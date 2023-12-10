// function to check if a number is a perfect number

const isPerfectNumber = (val = 5) => {
  if (val <= 0 || typeof val != "number") {
    return `Enter a valid number above 1!`;
  } else {
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
  }
};
console.log(isPerfectNumber());

// To check for reuseability of the isPerfectNumber function
const findPerfectNums = (num1 = 1, num2 = 100) => {
  if (
    num1 <= 0 ||
    typeof num1 !== "number" ||
    num2 <= 0 ||
    typeof num2 !== "number"
  ) {
    return `Enter a valid number above 1!`;
  } else {
    let start;
    let end;
    let perfectNumbers = "";
    num1 < num2
      ? ((start = num1), (end = num2))
      : ((start = num2), (end = num1));

    for (let i = start; i <= end; i++) {
      if (isPerfectNumber(i)) {
        perfectNumbers += i + " ";
      } else {
        continue;
      }
    }
    return perfectNumbers;
  }
};

console.log(findPerfectNums());
