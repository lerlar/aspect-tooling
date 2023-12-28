// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.25.1

import { Protobuf, Reader, Writer } from "as-proto/assembly";

export class BlockInput {
  static encode(message: BlockInput, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.number);
  }

  static decode(reader: Reader, length: i32): BlockInput {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BlockInput();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.number = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  number: u64;

  constructor(number: u64 = 0) {
    this.number = number;
  }
}

export function encodeBlockInput(message: BlockInput): Uint8Array {
  return Protobuf.encode(message, BlockInput.encode);
}

export function decodeBlockInput(buffer: Uint8Array): BlockInput {
  return Protobuf.decode<BlockInput>(buffer, BlockInput.decode);
}
