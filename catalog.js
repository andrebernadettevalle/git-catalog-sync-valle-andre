function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
  // Task 1: 1-day grace period (no fee if daysLate <= 1)
  if (daysLate <= 1) {
    return 0;
  }

  return Math.floor(daysLate * ratePerDay);
}

module.exports = { isValidLoan, calculateLateFee };