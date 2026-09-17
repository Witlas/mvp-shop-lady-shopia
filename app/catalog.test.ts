import assert from "node:assert/strict";
import { test } from "node:test";
import { cartDiscount } from "./catalog";

test("checkout promo caps and targets discounts", () => {
  const cart = [{ id: 1, qty: 1 }, { id: 2, qty: 1 }];
  assert.equal(cartDiscount(cart, "WELCOME10"), 40000);
  assert.equal(cartDiscount(cart, "LUMIERE15"), 49350);
  assert.equal(cartDiscount([{ id: 2, qty: 1 }], "LUMIERE15"), 0);
  assert.equal(cartDiscount(cart, "INVALID"), 0);
});
