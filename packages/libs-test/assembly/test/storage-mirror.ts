import {
  FilterTxCtx,
  IAspectBlock,
  IAspectTransaction,
  OnBlockFinalizeCtx,
  OnBlockInitializeCtx,
  PostContractCallCtx,
  PostTxCommitCtx,
  PostTxExecuteCtx,
  PreContractCallCtx,
  PreTxExecuteCtx,
  sys,
  JitInherentRequest,
  ethereum,
} from '@artela/aspect-libs';

export class StorageMirror implements IAspectTransaction, IAspectBlock {
  filterTx(ctx: FilterTxCtx): bool {
    return true;
  }

  isOwner(sender: string): bool {
    const value = sys.aspect.property.get<string>('owner');
    return value.includes(sender);
  }

  onBlockInitialize(ctx: OnBlockInitializeCtx): void {
    return;
  }

  onBlockFinalize(ctx: OnBlockFinalizeCtx): void {
    return;
  }

  onContractBinding(contractAddr: string): bool {
    return true;
  }

  preTxExecute(ctx: PreTxExecuteCtx): void {}

  preContractCall(ctx: PreContractCallCtx): void {}

  postContractCall(ctx: PostContractCallCtx): void {
    const txData = sys.utils.uint8ArrayToHex(ctx.tx.content.input);
    // calling store method
    if (txData.startsWith('6057361d')) {
      // then we try to mirror the call to another storage contract
      const walletAddress = sys.aspect.property.get<string>('wallet');
      const contractAddress = sys.aspect.property.get<string>('contract');
      const callData = ethereum.abiEncode('execute', [
        ethereum.Address.fromHexString(contractAddress),
        ethereum.Number.fromU64(0),
        ethereum.Bytes.fromHexString(txData),
      ]);

      const request = new JitInherentRequest(
        sys.utils.hexToUint8Array(walletAddress),
        new Uint8Array(0),
        new Uint8Array(0),
        sys.utils.hexToUint8Array(callData),
        sys.utils.hexToUint8Array(ethereum.Number.fromU64(1000000).encodeHex()),
        sys.utils.hexToUint8Array(ethereum.Number.fromU64(1000000).encodeHex()),
        new Uint8Array(0),
        new Uint8Array(0),
        new Uint8Array(0),
      );

      const response = sys.evm.jitCall(ctx).submit(request);
      sys.require(response.success, 'failed to call JIT');
    }
  }

  postTxExecute(ctx: PostTxExecuteCtx): void {}

  postTxCommit(ctx: PostTxCommitCtx): void {}
}