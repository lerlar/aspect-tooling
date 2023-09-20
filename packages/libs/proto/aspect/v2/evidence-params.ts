// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.3

import { Writer, Reader } from 'as-proto/assembly';

export class EvidenceParams {
  static encode(message: EvidenceParams, writer: Writer): void {
    writer.uint32(8);
    writer.int64(message.maxAgeNumBlocks);

    writer.uint32(16);
    writer.int64(message.maxAgeDuration);

    writer.uint32(24);
    writer.int64(message.maxBytes);
  }

  static decode(reader: Reader, length: i32): EvidenceParams {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EvidenceParams();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxAgeNumBlocks = reader.int64();
          break;

        case 2:
          message.maxAgeDuration = reader.int64();
          break;

        case 3:
          message.maxBytes = reader.int64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  maxAgeNumBlocks: i64;
  maxAgeDuration: i64;
  maxBytes: i64;

  constructor(maxAgeNumBlocks: i64 = 0, maxAgeDuration: i64 = 0, maxBytes: i64 = 0) {
    this.maxAgeNumBlocks = maxAgeNumBlocks;
    this.maxAgeDuration = maxAgeDuration;
    this.maxBytes = maxBytes;
  }
}
