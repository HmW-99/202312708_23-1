const answer = `Promise 함수
`;

console.log(answer);


// Promise
new Promise( (resolve) => {
    setTimeout(()=>{
        let stack = '철수'
        console.log(stack)
        resolve(stack);
    },300);
}).then((prevStack) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(prevStack += " " + "영희");
            resolve(prevStack);
        },300);
    });
}).then((prevStack)=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log(prevStack += " " + "짱구");
            resolve(prevStack);
        },300);
    })
})
console.log(answer);


//async, await