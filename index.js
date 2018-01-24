
let message = 'some random string';

message = parseInt(message.split('').map(str => {return str.charCodeAt().toString(2)}).join(''));

let s = [], k = [];
let i = 0;

s = [
    7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22,
    5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20,
    4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23,
    6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21
];

for(let i = 0; i < 64; i++){
    k[i] = Math.floor(Math.pow(2, 32) * Math.abs(Math.sin(i+1)));
}

//Initialize variables:
let a0 = 0x67452301;   //A
let b0 = 0xefcdab89;   //B
let c0 = 0x98badcfe;   //C
let d0 = 0x10325476;   //D

console.log(message);

message = message << 1;

console.log(message);