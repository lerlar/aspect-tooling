// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.25.1

import { Protobuf, Reader, Writer } from "as-proto/assembly";

export class StateChangeQuery {
  static encode(message: StateChangeQuery, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.account);

    writer.uint32(18);
    writer.string(message.stateVarName);

    const indices = message.indices;
    if (indices.length !== 0) {
      for (let i: i32 = 0; i < indices.length; ++i) {
        writer.uint32(26);
        writer.bytes(indices[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): StateChangeQuery {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new StateChangeQuery();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.bytes();
          break;

        case 2:
          message.stateVarName = reader.string();
          break;

        case 3:
          message.indices.push(reader.bytes());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  account: Uint8Array;
  stateVarName: string;
  indices: Array<Uint8Array>;

  constructor(
    account: Uint8Array = new Uint8Array(0),
    stateVarName: string = "",
    indices: Array<Uint8Array> = []
  ) {
    this.account = account;
    this.stateVarName = stateVarName;
    this.indices = indices;
  }
}

export function encodeStateChangeQuery(message: StateChangeQuery): Uint8Array {
  return Protobuf.encode(message, StateChangeQuery.encode);
}

export function decodeStateChangeQuery(buffer: Uint8Array): StateChangeQuery {
  return Protobuf.decode<StateChangeQuery>(buffer, StateChangeQuery.decode);
}
