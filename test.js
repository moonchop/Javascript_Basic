function Add(x){
    return function(y){
        return x + y;
    }
}
const add3=Add(3);
console.log(add3(2)); // 👉5
console.log(add3(10)); // 👉15