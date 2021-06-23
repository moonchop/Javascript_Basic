# ✔Rest parameters

## arguments : 
함수로 넘어 온 모든 인수에 접근, Array형태의 객체, 배열의 내장 메서드 없음(forEach, map)
```
function show(name){
    console.log(arguments[0]); // moon
    console.log(arguments[1]); // soo

}
show('moon','soo')
```
## rest parameters(나머지 변수) : 
정해지지 않은 것을 배열로 나타낼 수 있게 함.
```
function add(...number){
    let result=0;
    number.forEach((num)=>(result+=num));
    console.log(result);
}
add(1,2,3); //👉 6
add(1,2,3,4,5,6,7,8,9,10); //👉 55
```

## spread syntax(전개 구문) : 
```
let arr1=[1,2,3];
let arr2=[4,5,6];

let result=[...arr1, ...arr2]; // 👉[1,2,3,4,5,6];
let result2=[0, ...arr1, ...arr2, ,7,8,9]; // 👉[0 ~ 9]
```
객체에서
```
let user={name:'moon', age:23};
let user2={...user};

user2.name = "star";
console.log(user.name) //'moon'
console.log(user2.name) //'star'
```

```
let user={name:'moon'};
let info={age:23};
let al=['a','b'];
let pa=['c','d'];

user={
    ...user,
    ...info,
    eng:[...al, ...pa]
}
//👉 { name: 'moon', age: 23, eng: [ 'a', 'b', 'c', 'd' ] }
```