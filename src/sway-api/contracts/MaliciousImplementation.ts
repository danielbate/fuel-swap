/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.97.2
  Forc version: 0.66.5
  Fuel-Core version: 0.40.1
*/

import { Contract, Interface } from "fuels";
import type {
  Provider,
  Account,
  StorageSlot,
  AbstractAddress,
  BigNumberish,
  BN,
  FunctionFragment,
  InvokeFunction,
} from 'fuels';

import type { Option } from "./common";

export type AssetInput = { id: AssetIdInput, amount: BigNumberish };
export type AssetOutput = { id: AssetIdOutput, amount: BN };
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type AssetPairInput = { a: AssetInput, b: AssetInput };
export type AssetPairOutput = { a: AssetOutput, b: AssetOutput };
export type PoolInfoInput = { reserves: AssetPairInput, liquidity: BigNumberish };
export type PoolInfoOutput = { reserves: AssetPairOutput, liquidity: BN };
export type PreviewAddLiquidityInfoInput = { other_asset_to_add: AssetInput, liquidity_asset_to_receive: AssetInput };
export type PreviewAddLiquidityInfoOutput = { other_asset_to_add: AssetOutput, liquidity_asset_to_receive: AssetOutput };
export type PreviewSwapInfoInput = { other_asset: AssetInput, sufficient_reserve: boolean };
export type PreviewSwapInfoOutput = { other_asset: AssetOutput, sufficient_reserve: boolean };
export type RemoveLiquidityInfoInput = { removed_amounts: AssetPairInput, burned_liquidity: AssetInput };
export type RemoveLiquidityInfoOutput = { removed_amounts: AssetPairOutput, burned_liquidity: AssetOutput };

const abi = {
  "programType": "contract",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "()",
      "concreteTypeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
    },
    {
      "type": "enum std::option::Option<u64>",
      "concreteTypeId": "d852149004cc9ec0bbe7dc4e37bffea1d41469b759512b6136f2e865a4c06e7d",
      "metadataTypeId": 2,
      "typeArguments": [
        "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
      ]
    },
    {
      "type": "struct libraries::data_structures::Asset",
      "concreteTypeId": "81ff277b142ff42a650e979f50068ce2b30ba9479ab3add3379b470450cb2da1",
      "metadataTypeId": 4
    },
    {
      "type": "struct libraries::data_structures::PoolInfo",
      "concreteTypeId": "0f2b0923e99b83445f128fbe9a2ee502de2bd4bf5d0b56d79b17e89d7584b951",
      "metadataTypeId": 6
    },
    {
      "type": "struct libraries::data_structures::PreviewAddLiquidityInfo",
      "concreteTypeId": "8bf390c7d11bb9fd5051f2f7cee29830122ea8a73ddb72a522a59141d9b747cd",
      "metadataTypeId": 7
    },
    {
      "type": "struct libraries::data_structures::PreviewSwapInfo",
      "concreteTypeId": "d363985b54c2e94792f528141e92eae57e5ce3feb2efe4e6a376fc2675e0abee",
      "metadataTypeId": 8
    },
    {
      "type": "struct libraries::data_structures::RemoveLiquidityInfo",
      "concreteTypeId": "1e986d4dc368ee02a32784b7addc2d89c6cc159b12a0c882129a6795f6b4471a",
      "metadataTypeId": 9
    },
    {
      "type": "struct std::asset_id::AssetId",
      "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974",
      "metadataTypeId": 10
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [
    {
      "type": "b256",
      "metadataTypeId": 0
    },
    {
      "type": "bool",
      "metadataTypeId": 1
    },
    {
      "type": "enum std::option::Option",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "None",
          "typeId": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d"
        },
        {
          "name": "Some",
          "typeId": 3
        }
      ],
      "typeParameters": [
        3
      ]
    },
    {
      "type": "generic T",
      "metadataTypeId": 3
    },
    {
      "type": "struct libraries::data_structures::Asset",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "id",
          "typeId": 10
        },
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct libraries::data_structures::AssetPair",
      "metadataTypeId": 5,
      "components": [
        {
          "name": "a",
          "typeId": 4
        },
        {
          "name": "b",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct libraries::data_structures::PoolInfo",
      "metadataTypeId": 6,
      "components": [
        {
          "name": "reserves",
          "typeId": 5
        },
        {
          "name": "liquidity",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct libraries::data_structures::PreviewAddLiquidityInfo",
      "metadataTypeId": 7,
      "components": [
        {
          "name": "other_asset_to_add",
          "typeId": 4
        },
        {
          "name": "liquidity_asset_to_receive",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct libraries::data_structures::PreviewSwapInfo",
      "metadataTypeId": 8,
      "components": [
        {
          "name": "other_asset",
          "typeId": 4
        },
        {
          "name": "sufficient_reserve",
          "typeId": 1
        }
      ]
    },
    {
      "type": "struct libraries::data_structures::RemoveLiquidityInfo",
      "metadataTypeId": 9,
      "components": [
        {
          "name": "removed_amounts",
          "typeId": 5
        },
        {
          "name": "burned_liquidity",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 10,
      "components": [
        {
          "name": "bits",
          "typeId": 0
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "desired_liquidity",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "deadline",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "add_liquidity",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset_id",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        }
      ],
      "name": "balance",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset_a",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        },
        {
          "name": "asset_b",
          "concreteTypeId": "c0710b6731b1dd59799cf6bef33eee3b3b04a2e40e80a0724090215bbf2ca974"
        }
      ],
      "name": "constructor",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "deposit",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [],
      "name": "pool_info",
      "output": "0f2b0923e99b83445f128fbe9a2ee502de2bd4bf5d0b56d79b17e89d7584b951",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "concreteTypeId": "81ff277b142ff42a650e979f50068ce2b30ba9479ab3add3379b470450cb2da1"
        }
      ],
      "name": "preview_add_liquidity",
      "output": "8bf390c7d11bb9fd5051f2f7cee29830122ea8a73ddb72a522a59141d9b747cd",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "exact_input_asset",
          "concreteTypeId": "81ff277b142ff42a650e979f50068ce2b30ba9479ab3add3379b470450cb2da1"
        }
      ],
      "name": "preview_swap_exact_input",
      "output": "d363985b54c2e94792f528141e92eae57e5ce3feb2efe4e6a376fc2675e0abee",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "exact_output_asset",
          "concreteTypeId": "81ff277b142ff42a650e979f50068ce2b30ba9479ab3add3379b470450cb2da1"
        }
      ],
      "name": "preview_swap_exact_output",
      "output": "d363985b54c2e94792f528141e92eae57e5ce3feb2efe4e6a376fc2675e0abee",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "min_asset_a",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "min_asset_b",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "deadline",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "remove_liquidity",
      "output": "1e986d4dc368ee02a32784b7addc2d89c6cc159b12a0c882129a6795f6b4471a",
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "min_output",
          "concreteTypeId": "d852149004cc9ec0bbe7dc4e37bffea1d41469b759512b6136f2e865a4c06e7d"
        },
        {
          "name": "deadline",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "swap_exact_input",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "output",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "deadline",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ],
      "name": "swap_exact_output",
      "output": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0",
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        },
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "concreteTypeId": "81ff277b142ff42a650e979f50068ce2b30ba9479ab3add3379b470450cb2da1"
        }
      ],
      "name": "withdraw",
      "output": "2e38e77b22c314a449e91fafed92a43826ac6aa403ae6a8acb6cf58239fbaf5d",
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [],
  "messagesTypes": [],
  "configurables": []
};

const storageSlots: StorageSlot[] = [
  {
    "key": "871313c373a81d6104782a2726701f7c32f856f32db74a542807b80bb9206da6",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "871313c373a81d6104782a2726701f7c32f856f32db74a542807b80bb9206da7",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "871313c373a81d6104782a2726701f7c32f856f32db74a542807b80bb9206da8",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export class MaliciousImplementationInterface extends Interface {
  constructor() {
    super(abi);
  }

  declare functions: {
    add_liquidity: FunctionFragment;
    balance: FunctionFragment;
    constructor: FunctionFragment;
    deposit: FunctionFragment;
    pool_info: FunctionFragment;
    preview_add_liquidity: FunctionFragment;
    preview_swap_exact_input: FunctionFragment;
    preview_swap_exact_output: FunctionFragment;
    remove_liquidity: FunctionFragment;
    swap_exact_input: FunctionFragment;
    swap_exact_output: FunctionFragment;
    withdraw: FunctionFragment;
  };
}

export class MaliciousImplementation extends Contract {
  static readonly abi = abi;
  static readonly storageSlots = storageSlots;

  declare interface: MaliciousImplementationInterface;
  declare functions: {
    add_liquidity: InvokeFunction<[desired_liquidity: BigNumberish, deadline: BigNumberish], BN>;
    balance: InvokeFunction<[asset_id: AssetIdInput], BN>;
    constructor: InvokeFunction<[asset_a: AssetIdInput, asset_b: AssetIdInput], void>;
    deposit: InvokeFunction<[], void>;
    pool_info: InvokeFunction<[], PoolInfoOutput>;
    preview_add_liquidity: InvokeFunction<[asset: AssetInput], PreviewAddLiquidityInfoOutput>;
    preview_swap_exact_input: InvokeFunction<[exact_input_asset: AssetInput], PreviewSwapInfoOutput>;
    preview_swap_exact_output: InvokeFunction<[exact_output_asset: AssetInput], PreviewSwapInfoOutput>;
    remove_liquidity: InvokeFunction<[min_asset_a: BigNumberish, min_asset_b: BigNumberish, deadline: BigNumberish], RemoveLiquidityInfoOutput>;
    swap_exact_input: InvokeFunction<[min_output: Option<BigNumberish>, deadline: BigNumberish], BN>;
    swap_exact_output: InvokeFunction<[output: BigNumberish, deadline: BigNumberish], BN>;
    withdraw: InvokeFunction<[asset: AssetInput], void>;
  };

  constructor(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider,
  ) {
    super(id, abi, accountOrProvider);
  }
}