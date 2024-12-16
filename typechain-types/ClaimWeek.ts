/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface ClaimWeekInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claim"
      | "endTime"
      | "getWeekNumber"
      | "lastClaimedWeek"
      | "owner"
      | "startTime"
      | "weeklyReward"
      | "withdraw"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;

  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "endTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getWeekNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lastClaimedWeek",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "weeklyReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "endTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getWeekNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastClaimedWeek",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "weeklyReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace ClaimedEvent {
  export type InputTuple = [
    user: AddressLike,
    weeksClaimed: BigNumberish,
    reward: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    user: string,
    weeksClaimed: bigint,
    reward: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    user: string;
    weeksClaimed: bigint;
    reward: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ClaimWeek extends BaseContract {
  connect(runner?: ContractRunner | null): ClaimWeek;
  waitForDeployment(): Promise<this>;

  interface: ClaimWeekInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  claim: TypedContractMethod<[], [void], "nonpayable">;

  endTime: TypedContractMethod<[], [bigint], "view">;

  getWeekNumber: TypedContractMethod<
    [timestamp: BigNumberish],
    [bigint],
    "view"
  >;

  lastClaimedWeek: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  startTime: TypedContractMethod<[], [bigint], "view">;

  weeklyReward: TypedContractMethod<[], [bigint], "view">;

  withdraw: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "endTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getWeekNumber"
  ): TypedContractMethod<[timestamp: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastClaimedWeek"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "startTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "weeklyReward"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "Claimed"
  ): TypedContractEvent<
    ClaimedEvent.InputTuple,
    ClaimedEvent.OutputTuple,
    ClaimedEvent.OutputObject
  >;

  filters: {
    "Claimed(address,uint256,uint256,uint256)": TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;
    Claimed: TypedContractEvent<
      ClaimedEvent.InputTuple,
      ClaimedEvent.OutputTuple,
      ClaimedEvent.OutputObject
    >;
  };
}