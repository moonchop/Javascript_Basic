# Generatior
: 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
```
function* fn(){
    console.log(1);
    yield 1; // a.next()하면 여기까지 찍힘
    console.log(2);
    yield 2; // 한번 더 a.next()하면 여기까지 찍힘
    console.log(3);
    console.log(4);
    yield 3; // 한번 더 a.next()하면 여기까지 찍힘

    return "finish" // 한번 더 a.next()하면 여기까지 찍힘
}
const a=fn();
```
a.next()를 4번했을 때 결과값 👉 

{ value: 1, done: false } { value: 2, done: false } { value: 3, done: false } { value: 'finish', done: true }

true : 함수 실행 끝