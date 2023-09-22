// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader } from "as-proto/assembly";

export class EthStackTransaction {
  static encode(message: EthStackTransaction, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.from);

    writer.uint32(18);
    writer.string(message.to);

    writer.uint32(26);
    writer.bytes(message.data);

    writer.uint32(34);
    writer.string(message.value);

    writer.uint32(42);
    writer.string(message.gas);

    writer.uint32(50);
    writer.bytes(message.ret);

    writer.uint32(56);
    writer.uint64(message.leftOverGas);

    writer.uint32(64);
    writer.uint64(message.index);

    writer.uint32(72);
    writer.uint64(message.parentIndex);

    const childrenIndex = message.childrenIndex;
    if (childrenIndex.length !== 0) {
      for (let i: i32 = 0; i < childrenIndex.length; ++i) {
        writer.uint32(80);
        writer.uint64(childrenIndex[i]);
      }
    }
  }

  static decode(reader: Reader, length: i32): EthStackTransaction {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EthStackTransaction();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;

        case 2:
          message.to = reader.string();
          break;

        case 3:
          message.data = reader.bytes();
          break;

        case 4:
          message.value = reader.string();
          break;

        case 5:
          message.gas = reader.string();
          break;

        case 6:
          message.ret = reader.bytes();
          break;

        case 7:
          message.leftOverGas = reader.uint64();
          break;

        case 8:
          message.index = reader.uint64();
          break;

        case 9:
          message.parentIndex = reader.uint64();
          break;

        case 10:
          message.childrenIndex.push(reader.uint64());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  from: string;
  to: string;
  data: Uint8Array;
  value: string;
  gas: string;
  ret: Uint8Array;
  leftOverGas: u64;
  index: u64;
  parentIndex: u64;
  childrenIndex: Array<u64>;

  constructor(
    from: string = "",
    to: string = "",
    data: Uint8Array = new Uint8Array(0),
    value: string = "",
    gas: string = "",
    ret: Uint8Array = new Uint8Array(0),
    leftOverGas: u64 = 0,
    index: u64 = 0,
    parentIndex: u64 = 0,
    childrenIndex: Array<u64> = []
  ) {
    this.from = from;
    this.to = to;
    this.data = data;
    this.value = value;
    this.gas = gas;
    this.ret = ret;
    this.leftOverGas = leftOverGas;
    this.index = index;
    this.parentIndex = parentIndex;
    this.childrenIndex = childrenIndex;
  }
}