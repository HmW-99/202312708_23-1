const answer = `
node.js의 콜백 핸들러에는 error, null, 처리된 결과 데이터가 인수로 전달됩니다.
프로미스를 통해 코드를 위에서 아래로 진행하게 하여 콜백지옥을 해결할 수 있습니다.
`;
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