import {
  ApprovalForAll,
  NewTier,
  OwnershipTransferred,
  Paused,
  TierExhausted,
  TransferBatch,
  TransferSingle,
  URI,
  Unpaused
} from "../generated/Contract/Contract"

import "@graphprotocol/graph-ts"
import { BatchTransfer, SingleTransfer, Tier, OwnershipTransfer, PauseStatus } from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAll): void {
    // let approvalForAll = new ApprovalForAllEvent(event.transaction.hash.toHex())
    // approvalForAll.approvingAccount = event.params.approvingAccount
    // approvalForAll.operatingAccount = event.params.operatingAccount
    // approvalForAll.approved = event.params.approved
    // approvalForAll.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
    let ownershipTransfer = new OwnershipTransfer(event.transaction.hash.toHex())
    ownershipTransfer.previousOwner = event.params.previousOwner
    ownershipTransfer.newOwner = event.params.newOwner
    ownershipTransfer.save()
}

export function handlePaused(event: Paused): void {
    let pauseStatus = new PauseStatus(event.transaction.hash.toHex())
    pauseStatus.account = event.params.account
    pauseStatus.paused = true
    pauseStatus.save()
}

export function handleUnpaused(event: Unpaused): void {
    let pauseStatus = new PauseStatus(event.transaction.hash.toHex())
    pauseStatus.account = event.params.account
    pauseStatus.paused = false
    pauseStatus.save()
}

export function handleNewTier(event: NewTier): void {
    let tier = new Tier(event.params.tierID.toHex())
    tier.tierId = event.params.tierID
    tier.tierExhausted = false
    tier.save()
}
export function handleTierExhausted(event: TierExhausted): void {
    let tier = Tier.load(event.params.tierID.toHex())
    if (tier === null) {
        tier = new Tier(event.params.tierID.toHex())
    }
    tier.tierExhausted = true
    tier.save()
}

export function handleTransferBatch(event: TransferBatch): void {
    let transferBatch = new BatchTransfer(event.transaction.hash.toHex())
    transferBatch.operator = event.params.operator
    transferBatch.from = event.params.from
    transferBatch.to = event.params.to
    transferBatch.tokenIds = event.params.ids
    transferBatch.values = event.params.values
    transferBatch.save()
}

export function handleTransferSingle(event: TransferSingle): void {
    let transfer = new SingleTransfer(event.transaction.hash.toHex())
    transfer.operator = event.params.operator
    transfer.from = event.params.from
    transfer.to = event.params.to
    transfer.tokenId = event.params.id
    transfer.value = event.params.value
    transfer.save()
}

export function handleURI(event: URI): void {}
