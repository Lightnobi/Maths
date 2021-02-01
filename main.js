console.log('Hello World!');
{//Multiplicative Persistence
//Digit Split
var dig1 = function(num){
            let sDigits = num.toString().split('');
            let rDigits = sDigits.map(Number)
            return rDigits
        };
//Digit Split Arrow
let dig = num => {
            let sDig = num.toString().split('');
            let rDig = sDig.map(Number); return rDig}
//multi0 (self written)   
var multi0 = function (num){
                let m = num[0]
                for(let i=1;i < num.length;i++){
                    m *= num[i];
                };
                return m;
}
//Multi1 (Arrow)
let multi1 = num => {
             let m = num[0]
                for(let i=1;i < num.length;i++){
                    m *= num[i];
                };
                return m
    
}
//multi2 (from stackoverflow)
function multi2 (array) {
    let sum=1;
    for (let i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}
//Main Function
var MP = function (num){
            let tab = [];
            let i ;
            for (i=0;num.toString().length!=1;i++){
                let m = dig(num)
                num = multi1(m)
                //console.log(i);
                //console.log(num);
                tab[i] = num
            }
            console.table(tab)
            console.log('MP = '+i)
         }
MP(777);
}
{//Console
var Tra = function(){
    console.trace('thus that')
}
Tra();
console.warn('%c kill','color:red;font-weight:bold;')
console.error('this');
console.info('%c console','color:#0ff;font-weight:bold');
}
{//FizzBuzz
//Personal
let fb = function (lim){
        for(let i=1;i<=lim;i++){
            if(i%3==0){
                console.log("Fizz")
            }
            if(i%5==0){
                console.log("Buzz")
            }
            if (i%3==0 && i%5==0){
                console.log("FizzBuzz");
            } 
            if (i%3!=0 && i%5!=0){
                console.log(i);
            }
         
        }
    }
//Tom Scott
let fb2 = function (lim){
        for (i=0;i<=lim;i++){
        let out="";
        if(i%3==0){out+="Fizz"}
        if(i%5==0){out+="Buzz"}
        if(out==""){console.log(i)}else{console.log(out)}
        }
    }
}
{//Fetch API
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
}