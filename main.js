// task1
function fun2Parameters(p1, p2) {
  if (arguments.length !== 2) {
    throw new Error("Function must be called with exactly 2 parameters.");
  }
  return p1 + p2;
}
function displaySum2(...parameters) {
  try {
    const sum = fun2Parameters(...parameters);
    document.getElementById("task1").textContent = "Sum: " + sum;
  } catch (error) {
    document.getElementById("task1").textContent = "Error: " + error.message;
  }
}


// task 2
function addValues(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const num of numbers) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error("All arguments must be numerical values.");
    }
    sum += num;
  }
  return sum;
}
function displaySum(...numbers) {
    try {
        const sum = addValues(...numbers);
        document.getElementById("task2").textContent = "The sum is: " + sum;
    } catch (error) {
        document.getElementById("task2").textContent = "Error: " + error.message;
    }
}


// task3
function reverseParameters(...params) {
  const reversed = [...params].reverse();
  return reversed;
}
function displayReversed(...params) {
  const reversed = reverseParameters(...params);
  const outputDiv = document.getElementById("task3");
  outputDiv.innerHTML = "";

  if (reversed.length === 0) {
    outputDiv.textContent = "No parameters to reverse.";
    return;
  }
  outputDiv.textContent = reversed.join(", ");
}


// task4
function isPrime(n) {
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  } else { 
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
}
function checkPrime() {
  const inputElement = document.getElementById("numberInput");
  const resultElement = document.getElementById("task4");
  const n = parseInt(inputElement.value);
  if (isPrime(n)) {
    resultElement.textContent = n + " is a prime number.";
  } else {
    resultElement.textContent = n + " is not a prime number.";
  }
}