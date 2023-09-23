// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader } from 'as-proto/assembly';

export class BytesData {
  static encode(message: BytesData, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.data);
  }

  static decode(reader: Reader, length: i32): BytesData {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BytesData();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  data: Uint8Array;

  constructor(data: Uint8Array = new Uint8Array(0)) {
    this.data = data;
  }
}
