function solution(number) {
    return function(input){
        return number + input;
    };
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
