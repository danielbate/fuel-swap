/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.2
  Forc version: 0.66.5
  Fuel-Core version: 0.40.1
*/

import {
  Account,
  BigNumberish,
  BN,
  decompressBytecode,
  Script,
} from 'fuels';

import type { Enum } from "./common";

export enum InputErrorInput { DesiredLiquidityZero = 'DesiredLiquidityZero' };
export enum InputErrorOutput { DesiredLiquidityZero = 'DesiredLiquidityZero' };

export type AssetInput = { id: AssetIdInput, amount: BigNumberish };
export type AssetOutput = { id: AssetIdOutput, amount: BN };
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type AssetPairInput = { a: AssetInput, b: AssetInput };
export type AssetPairOutput = { a: AssetOutput, b: AssetOutput };
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type LiquidityParametersInput = { deposits: AssetPairInput, liquidity: BigNumberish, deadline: BigNumberish };
export type LiquidityParametersOutput = { deposits: AssetPairOutput, liquidity: BN, deadline: BN };

export type AtomicAddLiquidityInputs = [exchange_contract_id: ContractIdInput, liquidity_parameters: LiquidityParametersInput];
export type AtomicAddLiquidityOutput = BN;

const abi = {
  "programType": "script",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "enum InputError",
      "concreteTypeId": "f80518e57110202a12ede2db119a63d0fa0b1e209891bf7fff6ee4e9a2b22e77",
      "metadataTypeId": 2
    },
    {
      "type": "struct libraries::data_structures::LiquidityParameters",
      "concreteTypeId": "a28eaf00ca2b7ce73392c6dabfc29796c229e4ce36f78c38c4d911d95fceb1a8",
      "metadataTypeId": 5
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 7
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [
    {
      "type": "()",
      "metadataTypeId": 0
    },
    {
      "type": "b256",
      "metadataTypeId": 1
    },
    {
      "type": "enum InputError",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "DesiredLiquidityZero",
          "typeId": 0
        }
      ]
    },
    {
      "type": "struct libraries::data_structures::Asset",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "id",
          "typeId": 6
        },
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct libraries::data_structures::AssetPair",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "a",
          "typeId": 3
        },
        {
          "name": "b",
          "typeId": 3
        }
      ]
    },
    {
      "type": "struct libraries::data_structures::LiquidityParameters",
      "metadataTypeId": 5,
      "components": [
        {
          "name": "deposits",
          "typeId": 4
        },
        {
          "name": "liquidity",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "deadline",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 6,
      "components": [
        {
          "name": "bits",
          "typeId": 1
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 7,
      "components": [
        {
          "name": "bits",
          "typeId": 1
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "exchange_contract_id",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        },
        {
          "name": "liquidity_parameters",
          "concreteTypeId": "a28eaf00ca2b7ce73392c6dabfc29796c229e4ce36f78c38c4d911d95fceb1a8"
        }
      ],
      "name": "main",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "doc-comment",
          "arguments": [
            " Deposits pool assets and adds liquidity to an AMM exchange contract."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Arguments"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `exchange_contract_id`: [ContractId] - The contract id of the exchange."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * `liquidity_parameters`: [LiquidityParameters] - Exchange liquidity for a specific asset pair."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Returns"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * The amount of liquidity assets minted."
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " # Reverts"
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            ""
          ]
        },
        {
          "name": "doc-comment",
          "arguments": [
            " * When `liquidity_parameters.liquidity` is not greater than zero."
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "17871718070013141034",
      "concreteTypeId": "f80518e57110202a12ede2db119a63d0fa0b1e209891bf7fff6ee4e9a2b22e77"
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const bytecode = decompressBytecode('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');

export class AtomicAddLiquidity extends Script<AtomicAddLiquidityInputs, AtomicAddLiquidityOutput> {

  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(wallet: Account) {
    super(bytecode, abi, wallet);
  }
}