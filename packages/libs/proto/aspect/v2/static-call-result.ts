// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.25.1

import { Protobuf, Reader, Writer } from "as-proto/assembly";

export class StaticCallResult {
  static encode(message: StaticCallResult, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.ret);

    writer.uint32(18);
    writer.string(message.vmError);

    writer.uint32(24);
    writer.uint64(message.gasLeft);
  }

  static decode(reader: Reader, length: i32): StaticCallResult {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new StaticCallResult();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ret = reader.bytes();
          break;

        case 2:
          message.vmError = reader.string();
          break;

        case 3:
          message.gasLeft = reader.uint64();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  ret: Uint8Array;
  vmError: string;
  gasLeft: u64;

  constructor(
    ret: Uint8Array = new Uint8Array(0),
    vmError: string = "",
    gasLeft: u64 = 0
  ) {
    this.ret = ret;
    this.vmError = vmError;
    this.gasLeft = gasLeft;
  }
}

export function encodeStaticCallResult(message: StaticCallResult): Uint8Array {
  return Protobuf.encode(message, StaticCallResult.encode);
}

export function decodeStaticCallResult(buffer: Uint8Array): StaticCallResult {
  return Protobuf.decode<StaticCallResult>(buffer, StaticCallResult.decode);
}
