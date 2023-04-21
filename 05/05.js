const answer = `Node.js는 본질적으로 단일 스레드 프로세스입니다. Node.js에서 하위 스레드를 처리하는 방법과 멀티 스레드를 지원하기 위한 방법을 상세히 기술하시오.

실행순서
1, on, addListener, once을 통해 이벤트 생성
2, emit으로 이벤트 실행
3, removeAllListeners로 이벤트 제거
4, listenerCount로 이벤트 리스터의 개수 카운팅
`;
console.log(answer);

const Event = require('events');
const myEvent = new Event();

myEvent.on('H_event', () => {
    console.log('event1');
})

myEvent.addListener('H_event2', () => {
    console.log('event2');
})

myEvent.once('H_event3', () => {
    console.log('event3');
})

myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.removeAllListeners('event2');

console.log(myEvent.listenerCount('event1'));