// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader } from "as-proto/assembly";

export class Version {
  static encode(message: Version, writer: Writer): void {
    writer.uint32(8);
    writer.uint32(message.appVersion);
  }

  static decode(reader: Reader, length: i32): Version {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Version();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.appVersion = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  appVersion: u32;

  constructor(appVersion: u32 = 0) {
    this.appVersion = appVersion;
  }
}