// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.3

import { Writer, Reader } from "as-proto/assembly";

export class EnvContent {
  static encode(message: EnvContent, writer: Writer): void {
    writer.uint32(8);
    writer.uint64(message.baseFee);
  }

  static decode(reader: Reader, length: i32): EnvContent {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EnvContent();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseFee = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  baseFee: u64;

  constructor(baseFee: u64 = 0) {
    this.baseFee = baseFee;
  }
}
