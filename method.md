
# ✔Math

## parseInt
```
let a= '10px';
parseInt(s); //10
Number(s); //NaN
```
문자가 있을 경우, parseInt는 차례로 읽을 수 있는 만큼 숫자로 반환, Number는 Nan반환.

## Math.max()

## Math.min()

## Math.abs() : 
절대값

## Math.pow(2,10) : 
2의 10승

---

# ✔String

## trim() :
앞 뒤 공백 제거.

<hr/>

## indexOf() : 
문자의 위치 반환

없을 경우 -1 반환

## includes() : 
문자가 있으면 true, 없으면 false 반환.

<hr/>

## slice(n, m) : 
m이 없으면 문자열 끝까지, 양수면 그 숫자까지(포함X)
```
let desc="abcdefg";
desc.slice(2) //"cdefg"
desc.slice(0,5) //"abcde"
desc.slice(2,-2) //"ced"
```
## substring(n, m) : 
n,m사이 문자열 반환(n과 m을 바꿔도 동작함.)

slice와 비슷한 기능임.

## substr(n, m) : 
n부터 시작, m개를 가져옴.

<hr/>

# ✔Array
## arr.splice(n,m) : 
특정 요소 지움(n:시작, m:개수)

삭제된 요소를 반환함.
```
let arr=[1,2,3,4,5];
arr.splice(1,2);
console.log(arr); //[1,4,5]
```
## arr.splice(n,m,x) :
특정 요소 지우고, 그 자리에 x값 추가 
```
arr.splice(1,3,100,200);
console.log(arr); //[1,100,200,5]
```
## arr.slice(n,m) : 
n부터 m미만 까지 반환(m안쓰면 끝까지 반환)
```
let arr=[1,2,3,4,5];
arr.splice(1,4);
console.log(arr); //[2,3,4]
```
## arr.concat(arr2, arr3 ..) : 
합쳐서 새배열 반환
```
let arr=[1,2];
arr.concat([3,4]); //[1,2,3,4]
arr.concat([3,4],[5,6]); //[1,2,3,4,5,6]
arr.concat([3,4],5,6); //[1,2,3,4,5,6]
```
## arr.indexOf / arr.lastIndexOf : 
발견하면 해당요소의 index를 반환하고, 없으면 -1 반환.
```
let arr=[1,2,3,4,5,3,3];
arr.indexOf(3); //index:2
arr.indexOf(3,3); //index:5
arr.lastIndexOf(3) // index:6
```
## arr.includes() : 
포함하는지 확인하고, true/false 반환. (index가 필요없다면 indexOf보단 includes)

## arr.find() / arr.findIndex() : 
조건에 맞는 첫번째 값만 반환하고 끝, 없으면 undefined반환
```
const arr=[1,2,3,4,5,6];
const result=arr.find((item)=>{
    return item%2 === 0;
});
// 2
```
## arr.filter() : 
조건에 맞는 값을 배열로 반환.
```
const arr=[1,2,3,4,5,6];
const result=arr.filter((item)=>{
    return item%2 === 0;
});
// [2,4,6]
```
## str.split() : 
```
let str="Hello";
const result = str.split("");
// "H","e","l","l","o"
```

## Array.isArray() :
배열 확인.

## reduce() : 
(누적 계산값, 현재값) => {return 계산값};
```
let arr=[1,2,3,4,5];
const result=arr.reduce((prev, cur)=>{
    return prev + cur;
},0)
console.log(result); //15

let userList = [{name:'a',age:1},{name:'b',age:2},{name:'c',age:3},{name:'d',age:4}];
let result = userList.reduce((prev,cur)=>{
    if(cur.age > 2){
        prev.push(cur.name);
    }
    return prev;
},[]);
console.log(result); // ["c","d"]

```