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