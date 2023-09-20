// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.3

import { Writer, Reader } from "as-proto/assembly";
import { DataSpaceType } from "./data-space-type";

export class ContextQueryRequest {
  static encode(message: ContextQueryRequest, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.dataSpace);

    const conditions = message.conditions;
    if (conditions.length !== 0) {
      for (let i: i32 = 0; i < conditions.length; ++i) {
        writer.uint32(18);
        writer.string(conditions[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): ContextQueryRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ContextQueryRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataSpace = reader.int32();
          break;

        case 2:
          message.conditions.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  dataSpace: DataSpaceType;
  conditions: Array<string>;

  constructor(dataSpace: DataSpaceType = 0, conditions: Array<string> = []) {
    this.dataSpace = dataSpace;
    this.conditions = conditions;
  }
}
