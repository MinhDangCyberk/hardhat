/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Escrow, EscrowInterface } from "../Escrow";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyWithdrawn",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "FailedToSendEther",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "OnlyClaimerCanWithdraw",
    type: "error",
  },
  {
    inputs: [],
    name: "amount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "isWithdraw",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516106493803806106498339818101604052810190610032919061011c565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610149565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100e9826100be565b9050919050565b6100f9816100de565b811461010457600080fd5b50565b600081519050610116816100f0565b92915050565b600060208284031215610132576101316100b9565b5b600061014084828501610107565b91505092915050565b6104f1806101586000396000f3fe6080604052600436106100555760003560e01c80633ccfd60b1461005a5780638da5cb5b14610071578063aa8c217c1461009c578063d0e30db0146100c7578063d379be23146100d1578063dbae172c146100fc575b600080fd5b34801561006657600080fd5b5061006f610127565b005b34801561007d57600080fd5b506100866102ce565b604051610093919061038d565b60405180910390f35b3480156100a857600080fd5b506100b16102f2565b6040516100be91906103c1565b60405180910390f35b6100cf6102f8565b005b3480156100dd57600080fd5b506100e6610313565b6040516100f3919061038d565b60405180910390f35b34801561010857600080fd5b50610111610339565b60405161011e91906103f7565b60405180910390f35b600360009054906101000a900460ff161561016e576040517f6507689f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461020057336040517fe30cd0a60000000000000000000000000000000000000000000000000000000081526004016101f7919061038d565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff1660025460405161022890610443565b60006040518083038185875af1925050503d8060008114610265576040519150601f19603f3d011682016040523d82523d6000602084013e61026a565b606091505b50509050806102b057336040517f4933c7760000000000000000000000000000000000000000000000000000000081526004016102a7919061038d565b60405180910390fd5b6001600360006101000a81548160ff02191690831515021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b346002600082825461030a9190610487565b92505081905550565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900460ff1681565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103778261034c565b9050919050565b6103878161036c565b82525050565b60006020820190506103a2600083018461037e565b92915050565b6000819050919050565b6103bb816103a8565b82525050565b60006020820190506103d660008301846103b2565b92915050565b60008115159050919050565b6103f1816103dc565b82525050565b600060208201905061040c60008301846103e8565b92915050565b600081905092915050565b50565b600061042d600083610412565b91506104388261041d565b600082019050919050565b600061044e82610420565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610492826103a8565b915061049d836103a8565b92508282019050808211156104b5576104b4610458565b5b9291505056fea264697066735822122021ea0925bd52c883addc76b4df177d5f2f87f96539c2c64bf789a257f63e2f3264736f6c634300081b0033";

type EscrowConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EscrowConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Escrow__factory extends ContractFactory {
  constructor(...args: EscrowConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _claimer: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_claimer, overrides || {});
  }
  override deploy(
    _claimer: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_claimer, overrides || {}) as Promise<
      Escrow & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Escrow__factory {
    return super.connect(runner) as Escrow__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EscrowInterface {
    return new Interface(_abi) as EscrowInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Escrow {
    return new Contract(address, _abi, runner) as unknown as Escrow;
  }
}
