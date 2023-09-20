// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.3

import { Writer, Reader } from "as-proto/assembly";

export class EthCallStackQuery {
  static encode(message: EthCallStackQuery, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.toEq);

    const indexIn = message.indexIn;
    if (indexIn.length !== 0) {
      for (let i: i32 = 0; i < indexIn.length; ++i) {
        writer.uint32(16);
        writer.uint64(indexIn[i]);
      }
    }

    writer.uint32(24);
    writer.uint64(message.parentIndexEq);
  }

  static decode(reader: Reader, length: i32): EthCallStackQuery {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EthCallStackQuery();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toEq = reader.string();
          break;

        case 2:
          message.indexIn.push(reader.uint64());
          break;

        case 3:
          message.parentIndexEq = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  toEq: string;
  indexIn: Array<u64>;
  parentIndexEq: u64;

  constructor(
    toEq: string = "",
    indexIn: Array<u64> = [],
    parentIndexEq: u64 = 0
  ) {
    this.toEq = toEq;
    this.indexIn = indexIn;
    this.parentIndexEq = parentIndexEq;
  }
}
