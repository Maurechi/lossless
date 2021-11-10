/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface ILosslessControllerInterface extends ethers.utils.Interface {
  functions: {
    "afterApprove(address,address,uint256)": FunctionFragment;
    "afterDecreaseAllowance(address,address,uint256)": FunctionFragment;
    "afterIncreaseAllowance(address,address,uint256)": FunctionFragment;
    "afterTransfer(address,address,uint256)": FunctionFragment;
    "afterTransferFrom(address,address,address,uint256)": FunctionFragment;
    "beforeApprove(address,address,uint256)": FunctionFragment;
    "beforeDecreaseAllowance(address,address,uint256)": FunctionFragment;
    "beforeIncreaseAllowance(address,address,uint256)": FunctionFragment;
    "beforeTransfer(address,address,uint256)": FunctionFragment;
    "beforeTransferFrom(address,address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "afterApprove",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "afterDecreaseAllowance",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "afterIncreaseAllowance",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "afterTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "afterTransferFrom",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeApprove",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeDecreaseAllowance",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeIncreaseAllowance",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "beforeTransferFrom",
    values: [string, string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "afterApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterDecreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterIncreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "afterTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeApprove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeDecreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeIncreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeTransferFrom",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ILosslessController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILosslessControllerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    afterApprove(
      sender: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterDecreaseAllowance(
      sender: string,
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterIncreaseAllowance(
      sender: string,
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterTransfer(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    afterTransferFrom(
      msgSender: string,
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beforeApprove(
      sender: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beforeDecreaseAllowance(
      msgSender: string,
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beforeIncreaseAllowance(
      msgSender: string,
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beforeTransfer(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    beforeTransferFrom(
      msgSender: string,
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  afterApprove(
    sender: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterDecreaseAllowance(
    sender: string,
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterIncreaseAllowance(
    sender: string,
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterTransfer(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  afterTransferFrom(
    msgSender: string,
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beforeApprove(
    sender: string,
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beforeDecreaseAllowance(
    msgSender: string,
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beforeIncreaseAllowance(
    msgSender: string,
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beforeTransfer(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  beforeTransferFrom(
    msgSender: string,
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    afterApprove(
      sender: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    afterDecreaseAllowance(
      sender: string,
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    afterIncreaseAllowance(
      sender: string,
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    afterTransfer(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    afterTransferFrom(
      msgSender: string,
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    beforeApprove(
      sender: string,
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    beforeDecreaseAllowance(
      msgSender: string,
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    beforeIncreaseAllowance(
      msgSender: string,
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    beforeTransfer(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    beforeTransferFrom(
      msgSender: string,
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    afterApprove(
      sender: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterDecreaseAllowance(
      sender: string,
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterIncreaseAllowance(
      sender: string,
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterTransfer(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    afterTransferFrom(
      msgSender: string,
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beforeApprove(
      sender: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beforeDecreaseAllowance(
      msgSender: string,
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beforeIncreaseAllowance(
      msgSender: string,
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beforeTransfer(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    beforeTransferFrom(
      msgSender: string,
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    afterApprove(
      sender: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterDecreaseAllowance(
      sender: string,
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterIncreaseAllowance(
      sender: string,
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterTransfer(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    afterTransferFrom(
      msgSender: string,
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beforeApprove(
      sender: string,
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beforeDecreaseAllowance(
      msgSender: string,
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beforeIncreaseAllowance(
      msgSender: string,
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beforeTransfer(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    beforeTransferFrom(
      msgSender: string,
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}