function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  if (daysLate <= 1) {
    return 0;
  }
  let fee = Math.round(daysLate * ratePerDay);
  if (fee > 0 && fee < 1) {
    fee = 1;
  }
  if (fee > 20) {
    fee = 20;
  }
  return fee;
}

module.exports = { isValidLoan, calculateLateFee };