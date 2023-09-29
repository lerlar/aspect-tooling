// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.3

import { Writer, Reader } from 'as-proto/assembly';
import { Any } from '../../google/protobuf/any';
import { RemoveNameSpace } from './remove-name-space';

export class ContextRemoveRequest {
  static encode(message: ContextRemoveRequest, writer: Writer): void {
    writer.uint32(8);
    writer.int32(message.nameSpace);

    const query = message.query;
    if (query !== null) {
      writer.uint32(18);
      writer.fork();
      Any.encode(query, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): ContextRemoveRequest {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new ContextRemoveRequest();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameSpace = reader.int32();
          break;

        case 2:
          message.query = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  nameSpace: RemoveNameSpace;
  query: Any | null;

  constructor(nameSpace: RemoveNameSpace = 0, query: Any | null = null) {
    this.nameSpace = nameSpace;
    this.query = query;
  }
}