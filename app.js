const num = [
    1,
    2,
    3,
    4,
    5,
    6,
];

const arr = [...Array(6).keys()].map(x => x + 1);

console.log(
    num,
    arr,
    num === arr
);