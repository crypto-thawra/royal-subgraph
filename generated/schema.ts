// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Fan extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Fan entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Fan must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Fan", id.toString(), this);
    }
  }

  static load(id: string): Fan | null {
    return changetype<Fan | null>(store.get("Fan", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get collectibles(): Array<string> | null {
    let value = this.get("collectibles");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set collectibles(value: Array<string> | null) {
    if (!value) {
      this.unset("collectibles");
    } else {
      this.set("collectibles", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class LDA extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save LDA entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type LDA must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("LDA", id.toString(), this);
    }
  }

  static load(id: string): LDA | null {
    return changetype<LDA | null>(store.get("LDA", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tier(): string {
    let value = this.get("tier");
    return value!.toString();
  }

  set tier(value: string) {
    this.set("tier", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class Tier extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Tier entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Tier must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Tier", id.toString(), this);
    }
  }

  static load(id: string): Tier | null {
    return changetype<Tier | null>(store.get("Tier", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tierId(): BigInt {
    let value = this.get("tierId");
    return value!.toBigInt();
  }

  set tierId(value: BigInt) {
    this.set("tierId", Value.fromBigInt(value));
  }

  get tierExhausted(): boolean {
    let value = this.get("tierExhausted");
    return value!.toBoolean();
  }

  set tierExhausted(value: boolean) {
    this.set("tierExhausted", Value.fromBoolean(value));
  }
}

export class OwnershipTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnershipTransfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OwnershipTransfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OwnershipTransfer", id.toString(), this);
    }
  }

  static load(id: string): OwnershipTransfer | null {
    return changetype<OwnershipTransfer | null>(
      store.get("OwnershipTransfer", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value!.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value!.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class SingleTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SingleTransfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SingleTransfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SingleTransfer", id.toString(), this);
    }
  }

  static load(id: string): SingleTransfer | null {
    return changetype<SingleTransfer | null>(store.get("SingleTransfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class BatchTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BatchTransfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type BatchTransfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("BatchTransfer", id.toString(), this);
    }
  }

  static load(id: string): BatchTransfer | null {
    return changetype<BatchTransfer | null>(store.get("BatchTransfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenIds(): Array<BigInt> {
    let value = this.get("tokenIds");
    return value!.toBigIntArray();
  }

  set tokenIds(value: Array<BigInt>) {
    this.set("tokenIds", Value.fromBigIntArray(value));
  }

  get values(): Array<BigInt> {
    let value = this.get("values");
    return value!.toBigIntArray();
  }

  set values(value: Array<BigInt>) {
    this.set("values", Value.fromBigIntArray(value));
  }
}

export class PauseStatus extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PauseStatus entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PauseStatus must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PauseStatus", id.toString(), this);
    }
  }

  static load(id: string): PauseStatus | null {
    return changetype<PauseStatus | null>(store.get("PauseStatus", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get paused(): boolean {
    let value = this.get("paused");
    return value!.toBoolean();
  }

  set paused(value: boolean) {
    this.set("paused", Value.fromBoolean(value));
  }
}

export class URI extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save URI entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type URI must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("URI", id.toString(), this);
    }
  }

  static load(id: string): URI | null {
    return changetype<URI | null>(store.get("URI", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }
}
