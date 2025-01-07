import { launchTestNode } from "fuels/test-utils";
import { describe, test, expect } from "vitest";

import { TestAssetId } from "fuels/test-utils";
import { AMMContractFactory, ExchangeContractFactory } from "../src/sway-api";
import { ContractUtils } from "fuels";

describe("AMM", () => {
  test("e2e", async () => {
    using launched = await launchTestNode();

    const { provider, wallets: [genesisWallet] } = launched;

    // Setup assets
    const baseAssetId = await provider.getBaseAssetId();
    const assetIdA = TestAssetId.A.value;
    const wrapAddress = (address: string) => ({ bits: address });
    const baseAssetIdWrapped = wrapAddress(baseAssetId);
    const assetIdAWrapped = wrapAddress(assetIdA);

    // Assert init balances for genesis wallet
    const initBaseAssetBalance = await genesisWallet.getBalance(baseAssetId);
    const initAssetABalance = await genesisWallet.getBalance(assetIdA);
    expect(initBaseAssetBalance.toNumber()).toBeGreaterThan(0);
    expect(initAssetABalance.toNumber()).toBeGreaterThan(0);

    // Deploy and initialize exchange contract
    const exchangeDeployTx = await ExchangeContractFactory.deploy(genesisWallet);
    const { contract: exchangeContract}  = await exchangeDeployTx.waitForResult();
    const exchangeBytecodeRoot = ContractUtils.getContractRoot(ExchangeContractFactory.bytecode);
    const exchangeContractId = exchangeContract.id.toB256();
    const exchangeContractIdWrapped = wrapAddress(exchangeContractId);
    const initExchangeTx = await exchangeContract.functions.constructor(assetIdAWrapped, baseAssetIdWrapped).call();
    await initExchangeTx.waitForResult();

    // Deploy and initialize AMM contract
    const ammDeployTx = await AMMContractFactory.deploy(genesisWallet);
    const { contract: ammContract } = await ammDeployTx.waitForResult();
    const initAmmContract = await ammContract.functions.initialize(wrapAddress(exchangeBytecodeRoot)).call();
    await initAmmContract.waitForResult();

    // Add pool to AMM contract
    const addPoolTx = await ammContract.functions.add_pool([assetIdAWrapped, baseAssetIdWrapped], exchangeContractIdWrapped).call();
    await addPoolTx.waitForResult();

    // Assert pool is added to AMM contract
    const poolTx = await ammContract.functions.pool([assetIdAWrapped, baseAssetIdWrapped]).call();
    const poolTxResult = await poolTx.waitForResult();
    expect(poolTxResult.value).toStrictEqual(exchangeContractIdWrapped);
  });
});
