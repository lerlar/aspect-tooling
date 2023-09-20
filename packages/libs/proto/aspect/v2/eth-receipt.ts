// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.3

import { Writer, Reader } from "as-proto/assembly";
import { EthLog } from "./eth-log";

export class EthReceipt {
  static encode(message: EthReceipt, writer: Writer): void {
    writer.uint32(8);
    writer.uint32(message.type);

    writer.uint32(18);
    writer.bytes(message.postState);

    writer.uint32(24);
    writer.uint64(message.status);

    writer.uint32(32);
    writer.uint64(message.cumulativeGasUsed);

    writer.uint32(42);
    writer.bytes(message.logsBloom);

    const logs = message.logs;
    for (let i: i32 = 0; i < logs.length; ++i) {
      writer.uint32(50);
      writer.fork();
      EthLog.encode(logs[i], writer);
      writer.ldelim();
    }

    writer.uint32(58);
    writer.string(message.txHash);

    writer.uint32(66);
    writer.string(message.contractAddress);

    writer.uint32(72);
    writer.uint64(message.gasUsed);

    writer.uint32(82);
    writer.string(message.blockHash);

    writer.uint32(90);
    writer.string(message.blockNumber);

    writer.uint32(96);
    writer.uint32(message.transactionIndex);
  }

  static decode(reader: Reader, length: i32): EthReceipt {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EthReceipt();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.uint32();
          break;

        case 2:
          message.postState = reader.bytes();
          break;

        case 3:
          message.status = reader.uint64();
          break;

        case 4:
          message.cumulativeGasUsed = reader.uint64();
          break;

        case 5:
          message.logsBloom = reader.bytes();
          break;

        case 6:
          message.logs.push(EthLog.decode(reader, reader.uint32()));
          break;

        case 7:
          message.txHash = reader.string();
          break;

        case 8:
          message.contractAddress = reader.string();
          break;

        case 9:
          message.gasUsed = reader.uint64();
          break;

        case 10:
          message.blockHash = reader.string();
          break;

        case 11:
          message.blockNumber = reader.string();
          break;

        case 12:
          message.transactionIndex = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  type: u32;
  postState: Uint8Array;
  status: u64;
  cumulativeGasUsed: u64;
  logsBloom: Uint8Array;
  logs: Array<EthLog>;
  txHash: string;
  contractAddress: string;
  gasUsed: u64;
  blockHash: string;
  blockNumber: string;
  transactionIndex: u32;

  constructor(
    type: u32 = 0,
    postState: Uint8Array = new Uint8Array(0),
    status: u64 = 0,
    cumulativeGasUsed: u64 = 0,
    logsBloom: Uint8Array = new Uint8Array(0),
    logs: Array<EthLog> = [],
    txHash: string = "",
    contractAddress: string = "",
    gasUsed: u64 = 0,
    blockHash: string = "",
    blockNumber: string = "",
    transactionIndex: u32 = 0
  ) {
    this.type = type;
    this.postState = postState;
    this.status = status;
    this.cumulativeGasUsed = cumulativeGasUsed;
    this.logsBloom = logsBloom;
    this.logs = logs;
    this.txHash = txHash;
    this.contractAddress = contractAddress;
    this.gasUsed = gasUsed;
    this.blockHash = blockHash;
    this.blockNumber = blockNumber;
    this.transactionIndex = transactionIndex;
  }
}
