const answer = `
방식
1, 모듈로 만들 값을 module.exports로 지정하고 require 함수를 통해 다른 파일의 파일 경로로 모듈의 내용을 가져올 수 있다.
2, 코어모듈을 불러올 떄는 파일의 경로를 지정하지 않고 이름만 넣어 불러올 수 있다.

예제코드 변환 방식 및 설명
calc.js 파일에서 덧셈기능을 수행하는 "add"라는 함수를 작성하였고, 모듈로 생성했습니다, 다시 03.js 파일로 돌아와 require 함수를 사용해 'add'함수를 실행시킬 수 있습니다.
`;
var Calc1 = require("./calc");

console.log(answer);
console.log(Calc1.add(4, 8));