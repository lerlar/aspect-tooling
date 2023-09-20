// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.3

import { Writer, Reader } from "as-proto/assembly";
import { ScheduleId } from "./schedule-id";
import { EthTransaction } from "../../aspect/v2/eth-transaction";
import { ScheduleStatus } from "./schedule-status";

export class Schedule {
  static encode(message: Schedule, writer: Writer): void {
    const id = message.id;
    if (id !== null) {
      writer.uint32(10);
      writer.fork();
      ScheduleId.encode(id, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.uint64(message.createHeight);

    writer.uint32(24);
    writer.int32(message.status);

    const tx = message.tx;
    if (tx !== null) {
      writer.uint32(34);
      writer.fork();
      EthTransaction.encode(tx, writer);
      writer.ldelim();
    }

    writer.uint32(40);
    writer.uint64(message.startBlock);

    writer.uint32(48);
    writer.uint64(message.everyNBlock);

    writer.uint32(56);
    writer.uint64(message.maxRetry);

    writer.uint32(64);
    writer.uint64(message.count);
  }

  static decode(reader: Reader, length: i32): Schedule {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Schedule();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = ScheduleId.decode(reader, reader.uint32());
          break;

        case 2:
          message.createHeight = reader.uint64();
          break;

        case 3:
          message.status = reader.int32();
          break;

        case 4:
          message.tx = EthTransaction.decode(reader, reader.uint32());
          break;

        case 5:
          message.startBlock = reader.uint64();
          break;

        case 6:
          message.everyNBlock = reader.uint64();
          break;

        case 7:
          message.maxRetry = reader.uint64();
          break;

        case 8:
          message.count = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  id: ScheduleId | null;
  createHeight: u64;
  status: ScheduleStatus;
  tx: EthTransaction | null;
  startBlock: u64;
  everyNBlock: u64;
  maxRetry: u64;
  count: u64;

  constructor(
    id: ScheduleId | null = null,
    createHeight: u64 = 0,
    status: ScheduleStatus = 0,
    tx: EthTransaction | null = null,
    startBlock: u64 = 0,
    everyNBlock: u64 = 0,
    maxRetry: u64 = 0,
    count: u64 = 0
  ) {
    this.id = id;
    this.createHeight = createHeight;
    this.status = status;
    this.tx = tx;
    this.startBlock = startBlock;
    this.everyNBlock = everyNBlock;
    this.maxRetry = maxRetry;
    this.count = count;
  }
}
