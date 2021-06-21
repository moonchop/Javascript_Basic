
# Math

#### parseInt
```
let a= '10px';
parseInt(s); //10
Number(s); //NaN
```
문자가 있을 경우, parseInt는 차례로 읽을 수 있는 만큼 숫자로 반환, Number는 Nan반환.

#### Math.max

#### Math.min

#### Math.abs() : 
절대값

#### Math.pow(2,10) : 
2의 10승

---

# String

#### trim() : 
앞 뒤 공백 제거.

<hr/>

#### indexOf() : 
문자의 위치 반환

없을 경우 -1 반환

#### includes() : 
문자가 있으면 true, 없으면 false 반환.

<hr/>

#### slice(n, m) : 
m이 없으면 문자열 끝까지, 양수면 그 숫자까지(포함X)
```
let desc="abcdefg";
desc.slice(2) //"cdefg"
desc.slice(0,5) //"abcde"
desc.slice(2,-2) //"ced"
```
#### substring(n, m) : 
n,m사이 문자열 반환(n과 m을 바꿔도 동작함.)

slice와 비슷한 기능임.

#### substr(n, m) : 
n부터 시작, m개를 가져옴.

<hr/>

