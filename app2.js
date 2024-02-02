/***
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
Generate a multiplication table for number 9
 */


function multiTable(){
    let number = Number(prompt('Enter Your Number :'));

    for(let i = 0; i <= 10 ; i++){
        let result = i * number;
        document.write( number + ' * ' + i + '  = '+ result + '<br>' );
    }
}
/* 

    Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
/*
let start = 0 ;
while(start <= 200){
    start++ ;
    if (start == 101) {
        break
    }
    document.write(start + '<br>');

}
/* 
    Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let my_nums = 0 ;
let my_sum = 0;

while(my_nums < 100 ){
    my_nums++;
    my_sum = my_sum + my_nums;
    if(my_sum == 100){
        break
    }
    document.write(my_nums + '<br>');
}
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let my_num1 = 4;
let square = my_num1 * my_num1;
while(my_num1 < 20){
    my_num1++;
    document.write('My numbers ' + my_num1 + '<br>');
    if(my_num1 === square){
        break
    }
}
document.write(square + ' = 4 square');