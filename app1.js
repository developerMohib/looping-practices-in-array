let numbers = [43, 32, 44, 8, 23, 3];

document.write( 'Before pushing element - '+ numbers +'<br>');


for(let i = 1; i <= 5 ; i++){
    numbers.push(Number(prompt(`Enter Your Number to add in Numbers Array :`)));
}


document.write( 'After pushing element - '+ numbers +'<br>');

for(let nums of numbers){
    document.write( 'After looping element - '+ nums +'<br>');
}