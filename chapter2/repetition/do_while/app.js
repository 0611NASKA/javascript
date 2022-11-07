let max = 100;
let num = 1;
let count = 0;

do{
  num = num * 2;
  count = count + 1;
}while(num < max)

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');