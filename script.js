// function to check if a number is a perfect number

const isPerfectNumber = (val = 5) => {
  let addDivisors = 0;
  for (let i = 0; i < val; i++) {
    if (val % i == 0) {
      addDivisors += i;
    } else {
      continue;
    }
  }

  const halfDivisors = (addDivisors + val) / 2;

  if (addDivisors === val || halfDivisors === val) {
    return val;
  } else {
    return null;
  }
};
console.log(isPerfectNumber());

// To check for reuseability of the isPerfectNumber function
const findPerfectNums = (a = 1, b = 100) => {
  let start;
  let end;
  let perfectNumbers = "";
  a < b ? ((start = a), (end = b)) : ((start = b), (end = a));

  for (let i = start; i <= end; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers += i + " ";
    } else {
      continue;
    }
  }
  return perfectNumbers;
};

console.log(findPerfectNums());
