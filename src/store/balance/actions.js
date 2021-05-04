// src/store/balance/actions.js
export const deposit = (depositAmount) => ({
  type: "balance/deposit",
  payload: depositAmount,
});
