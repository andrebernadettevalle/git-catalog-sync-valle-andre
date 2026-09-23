function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  // Rule 1: 1-Day Grace Period
  if (daysLate <= 1) {
    return 0;
  }

  // Rule 2: Fee Rounding
  let fee = Math.round(daysLate * ratePerDay);

  // Rule 3: $1 Minimum Fee
  if (fee > 0 && fee < 1) {
    fee = 1;
  }

  // Rule 4: $20 Maximum Cap
  if (fee > 20) {
    fee = 20;
  }

  return fee;
}

module.exports = { isValidLoan, calculateLateFee };