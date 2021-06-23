# Scheduling
## setTimeout :
일정 시간이 지난 후 함수를 실행
```
//기본형
setTimeout(showName,3000) // 👉3초 후에 showName함수 실행
//인수를 함수에 넘겨줘야할 경우
setTimeout(showName, 3000, 'Moon') 

```

## setInterval : 
일정 시간 간격으로 함수를 반복
```
funcion showName(name){
    console.log(name);
}
setInterval(showName,3000,'Moon');



```
// 반복을 멈추고 싶을때
```
funcion showName(name){
    console.log(name);
    num++;
    
    if(num>5)
    clearInterval(tId);
}
const tId = setInterval(showName,3000,'Moon');
```
