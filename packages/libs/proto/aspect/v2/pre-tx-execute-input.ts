// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.25.1

import { Protobuf, Reader, Writer } from 'as-proto/assembly';
import { BlockInput } from './block-input';
import { WithFromTxInput } from './with-from-tx-input';

export class PreTxExecuteInput {
  static encode(message: PreTxExecuteInput, writer: Writer): void {
    const tx = message.tx;
    if (tx !== null) {
      writer.uint32(10);
      writer.fork();
      WithFromTxInput.encode(tx, writer);
      writer.ldelim();
    }

    const block = message.block;
    if (block !== null) {
      writer.uint32(18);
      writer.fork();
      BlockInput.encode(block, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): PreTxExecuteInput {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new PreTxExecuteInput();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx = WithFromTxInput.decode(reader, reader.uint32());
          break;

        case 2:
          message.block = BlockInput.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  tx: WithFromTxInput | null;
  block: BlockInput | null;

  constructor(tx: WithFromTxInput | null = null, block: BlockInput | null = null) {
    this.tx = tx;
    this.block = block;
  }
}

export function encodePreTxExecuteInput(message: PreTxExecuteInput): Uint8Array {
  return Protobuf.encode(message, PreTxExecuteInput.encode);
}

export function decodePreTxExecuteInput(buffer: Uint8Array): PreTxExecuteInput {
  return Protobuf.decode<PreTxExecuteInput>(buffer, PreTxExecuteInput.decode);
}