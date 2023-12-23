import { Protobuf } from 'as-proto/assembly';
import { AUint8Array } from '../common';
import {
  JitInherentRequest,
  JitInherentResponse,
  StaticCallRequest,
  StaticCallResult,
} from '../proto';

declare namespace __EvmCallApi__ {
  function staticCall(request: i32): i32;

  function jitCall(request: i32): i32;
}

export class EvmCallApi {
  private static _instance: EvmCallApi | null = null;

  private constructor() {}

  public static instance(): EvmCallApi {
    if (!this._instance) {
      this._instance = new EvmCallApi();
    }
    return this._instance!;
  }

  public staticCall(request: StaticCallRequest): StaticCallResult {
    const encoded = Protobuf.encode(request, StaticCallRequest.encode);
    const input = new AUint8Array();
    input.set(encoded);
    const inputPtr = input.store();
    const ret = __EvmCallApi__.staticCall(inputPtr);
    const bytes = new AUint8Array();
    bytes.load(ret);
    return Protobuf.decode<StaticCallResult>(bytes.get(), StaticCallResult.decode);
  }

  public jitCall(request: JitInherentRequest): JitInherentResponse {
    const encoded = Protobuf.encode(request, JitInherentRequest.encode);
    const input = new AUint8Array();
    input.set(encoded);
    const inputPtr = input.store();
    const ret = __EvmCallApi__.jitCall(inputPtr);
    const bytes = new AUint8Array();
    bytes.load(ret);
    return Protobuf.decode<JitInherentResponse>(bytes.get(), JitInherentResponse.decode);
  }
}
