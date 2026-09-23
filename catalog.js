function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  let fee = Math.floor(daysLate * ratePerDay);
  if (fee > 20) {
    fee = 20;
  }
  return fee;
}

module.exports = { isValidLoan, calculateLateFee };