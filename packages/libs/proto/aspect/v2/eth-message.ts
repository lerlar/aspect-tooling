// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.23.2

import { Writer, Reader } from 'as-proto/assembly';

export class EthMessage {
  static encode(message: EthMessage, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.from);

    writer.uint32(18);
    writer.string(message.to);

    writer.uint32(26);
    writer.string(message.gasTipCap);

    writer.uint32(34);
    writer.string(message.gasFeeCap);

    writer.uint32(40);
    writer.uint64(message.gas);

    writer.uint32(50);
    writer.string(message.gasPrice);

    writer.uint32(58);
    writer.string(message.value);

    writer.uint32(64);
    writer.uint64(message.nonce);

    writer.uint32(74);
    writer.bytes(message.input);

    writer.uint32(80);
    writer.bool(message.isFake);
  }

  static decode(reader: Reader, length: i32): EthMessage {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EthMessage();

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
          message.gasTipCap = reader.string();
          break;

        case 4:
          message.gasFeeCap = reader.string();
          break;

        case 5:
          message.gas = reader.uint64();
          break;

        case 6:
          message.gasPrice = reader.string();
          break;

        case 7:
          message.value = reader.string();
          break;

        case 8:
          message.nonce = reader.uint64();
          break;

        case 9:
          message.input = reader.bytes();
          break;

        case 10:
          message.isFake = reader.bool();
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
  gasTipCap: string;
  gasFeeCap: string;
  gas: u64;
  gasPrice: string;
  value: string;
  nonce: u64;
  input: Uint8Array;
  isFake: bool;

  constructor(
    from: string = '',
    to: string = '',
    gasTipCap: string = '',
    gasFeeCap: string = '',
    gas: u64 = 0,
    gasPrice: string = '',
    value: string = '',
    nonce: u64 = 0,
    input: Uint8Array = new Uint8Array(0),
    isFake: bool = false,
  ) {
    this.from = from;
    this.to = to;
    this.gasTipCap = gasTipCap;
    this.gasFeeCap = gasFeeCap;
    this.gas = gas;
    this.gasPrice = gasPrice;
    this.value = value;
    this.nonce = nonce;
    this.input = input;
    this.isFake = isFake;
  }
}
