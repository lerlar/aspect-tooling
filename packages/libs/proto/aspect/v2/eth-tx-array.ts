// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.3

import { Writer, Reader } from "as-proto/assembly";
import { EthTransaction } from "./eth-transaction";

export class EthTxArray {
  static encode(message: EthTxArray, writer: Writer): void {
    const tx = message.tx;
    for (let i: i32 = 0; i < tx.length; ++i) {
      writer.uint32(10);
      writer.fork();
      EthTransaction.encode(tx[i], writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): EthTxArray {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new EthTxArray();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tx.push(EthTransaction.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  tx: Array<EthTransaction>;

  constructor(tx: Array<EthTransaction> = []) {
    this.tx = tx;
  }
}
