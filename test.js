function* fn(){
    console.log(1);
    yield 1; // a.next()하면 여기까지 찍힘
    console.log(2);
    yield 2; // 한번 더 a.next()하면 여기까지 찍힘
    console.log(3);
    console.log(4);
    yield 3; // 한번 더 a.next()하면 여기까지 찍힘
    
    return "finish"  
}
const a=fn();
console.log(a.next(),a.next(),a.next(),a.next());
