let ipTest = "172.16.25.1";
let ipTest1 = "172.16.25";
let ipTest2 = "17a2.16.25.1";
let ipTest3 = "172.1600.25.1";
let ipTest4 = "0123.123.123.123";

const validateIp = str => {
    let arr = str.split(".");
    if (arr.length !== 4) return false;
    return arr.every((num) => {
        if (num.length > 3) return false;
        num = Number(num);
        if (!(num < 256 && num >= 0)) return false;
        return true;
    });
}

console.log(validateIp(ipTest))
console.log(validateIp(ipTest1))
console.log(validateIp(ipTest2))
console.log(validateIp(ipTest3))
console.log(validateIp(ipTest4))

function validIp(str) {
    let ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; 
    if (str.match(ipformat)){
        return true
    }else {
        return false
    }
}
console.log(validIp(ipTest))
console.log(validIp(ipTest1))
console.log(validIp(ipTest2))
console.log(validIp(ipTest3))
console.log(validIp(ipTest4))
