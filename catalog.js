function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
<<<<<<< HEAD
  if (daysLate <= 1) {
    return 0;
  }
  let fee = Math.round(daysLate * ratePerDay);
  if (fee > 20) {
    fee = 20;
  }
  return fee;
=======
  return Math.round(daysLate * ratePerDay);
>>>>>>> 34889dd (Add  minimum fee for late returns - valle.andre)
}

module.exports = { isValidLoan, calculateLateFee };