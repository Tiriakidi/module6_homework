function isPrimeNumber(n) {
    if (n <= 1000) {
        for (let i = 2; i < n; i++) { 
        if(n % i === 0) return false; 
        }
        return n > 1; 
    } else {
        return 'данные неверны'
    }
}

console.log(isPrimeNumber(2000));  // returns 'данные неверны'
console.log(isPrimeNumber(0));  // returns false
console.log(isPrimeNumber(1));  // returns false
console.log(isPrimeNumber(2));  // returns true
console.log(isPrimeNumber(9));  // returns false
console.log(isPrimeNumber(11)); // returns true