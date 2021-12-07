function sum (n) {
    return function (n2) {
        return n+n2
    }
}

let plus5 = sum(5);
let plus6 = sum(6);

let x = plus5(10);

console.log(x)