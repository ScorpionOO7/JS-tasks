"use script";

//первое задание
let a = 1, b = 1;

let c = ++a; //c=2 a=2
let d = b++; //d=1 b=2

//второе задание
let e = 2;

let x = 1 + (e *= 2);//x=5 e=4

/*третье задание
""+1+0=10
""-1+0=-1
true+falce=1
6/"3"=2
"2"*"3"=6
4+5+"px"=9px
"$"+4+5=$45
"4"-2=2
"4px"-2=NaN
"  -9  "+5=  -9  5
"  -9  "-5=-14
null+1=1
undefined+1=NaN
" \t  \n"-2=NaN*/

//четвертое задание
let f = prompt("Первое число?", 1);
let j = prompt("Второе число?", 2);

alert(+f + +j);
