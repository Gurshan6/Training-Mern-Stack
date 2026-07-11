
for(let i=10 ; i>0 ; i--){
    console.log(i);
}

let n=5;
let fact=1;
for(let i=1;i<=5;i++){
    fact=fact*i;
}
console.log("factorial " + fact);


let num=1234
let r=0;
while(num>0){
    let d=num%10;
    r=r*10+d;
    num=Math.floor(num/10);
    
}
console.log("reverse " + r);


for (let num = 2; num <= 100; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}