import { launchTestNode } from "fuels/test-utils";
import { describe, test, expect } from "vitest";

import { TestAssetId } from "fuels/test-utils";
import { AMMContractFactory, ExchangeContractFactory } from "../src/sway-api";
import { ContractUtils } from "fuels";

describe("AMM", () => {
  test("e2e", async () => {
    using launched = await launchTestNode();

    const { provider, wallets: [genesisWallet] } = launched;

    const baseAssetId = await provider.getBaseAssetId();
    const assetIdA = TestAssetId.A.value;
    const wrapAddress = (address: string) => ({ bits: address });

    const initBaseAssetBalance = await genesisWallet.getBalance(baseAssetId);
    const initAssetABalance = await genesisWallet.getBalance(assetIdA);

    expect(initBaseAssetBalance.toNumber()).toBeGreaterThan(0);
    expect(initAssetABalance.toNumber()).toBeGreaterThan(0);

    const exchangeDeployTx = await ExchangeContractFactory.deploy(genesisWallet);
    const { contract: exchangeContract}  = await exchangeDeployTx.waitForResult();
    const exchangeBytecodeRoot = ContractUtils.getContractRoot(ExchangeContractFactory.bytecode);
    console.log(exchangeBytecodeRoot);

    const initExchangeTx = await exchangeContract.functions.constructor(wrapAddress(assetIdA), wrapAddress(baseAssetId)).call();
    await initExchangeTx.waitForResult();

    const ammDeployTx = await AMMContractFactory.deploy(genesisWallet);
    const { contract: ammContract } = await ammDeployTx.waitForResult();
    const initAmmContract = await ammContract.functions.initialize(wrapAddress(exchangeBytecodeRoot)).call();
    await initAmmContract.waitForResult();
  });
});
