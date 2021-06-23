# object
## object key value 접근
```
const Moon={
    name:"moon",
    age:30
}
for(x in Moon){
    console.log(x+" : "+Moon[x]);
}
```

결과값👉
name : moon
age : 30

## object 축약형
```
function makeObject(name,age){
    return{
        name:name,
        age:age,
        hobby:"basketball"
    };
}  
            👇
function makeObject(name,age){
    return{
        name,
        age,
        hobby:"basketball"
    };
}
```
결과값👉
{ name: 'moon', age: 23, hobby: 'basketball' }

name:name은 name과 변수인 name이 동일하기 때문에 생략이 가능하다.

# Object method
## Object.assign() : 객체 복제
```
const user = {name:moon, age:23}
const a= user;
❌
```
a에는 객체가 아닌 참조값만 복사된다.
```
const a= Object.assign({}, user);
```
## Object.keys() : 키 배열 반환
```
Object.keys(user)
```
결과값👉

[ 'name', 'age' ]

## Object.values() : 값 배열 반환
```
Object.values(user)
```
결과값👉

[ 'moon', 23 ]

## Object.entries() : 키/값 배열 반환
```
Object.entries(user)
```
결과값👉

[ [ 'name', 'moon' ], [ 'age', 23 ] ]

## Object.fromEntries() : 키/값 배열을 객체로

<hr/>

# Array
```
let days=['월','화','수'];
days.push('목');
console.log(days);
days.pop();
console.log(days);
```
배열 끝 요소 추가 및 제거

결과값👉

[ '월', '화', '수', '목' ]

[ '월', '화', '수' ]


```
days.unshift('일');
days.shift();
```
배열 앞에 제거 및 추가

결과값👉

[ '일', '월', '화', '수' ]

[ '월', '화', '수' ]

# 변수
var:함수 스코프

let,const:블록 스코프
```
function add(){}
if(){}
for(){}
```
let,const:코드블록에서 선언된 것은 코드블록 내에서만 유효함.

## Closure : 
함수가 생성될 당시의 외부 변수를 기억하여, 생성 이후에도 계속 접근 가능.
```
function Add(x){
    return function(y){
        return x + y;
    }
}
const add3=Add(3);
console.log(add3(2)); // 👉5
console.log(add3(10)); // 👉13
**************************
function Cnt(){
    let num=0;
    return function(){
        return num++;
    };
}
let count=Cnt();
console.log(Count()); // 👉0
console.log(Count()); // 👉1
console.log(Count()); // 👉2
```

