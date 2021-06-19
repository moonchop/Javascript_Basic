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

