
function ForOf(){
    
    let numbers = [43, 32, 23];

    document.write( 'Before pushing element - '+ numbers +'<br>');
    for(let i = 1; i <= 5 ; i++){
        numbers.push(Number(prompt(`Enter Your Number to add in Numbers Array :`)));
    }
    document.write( 'After pushing element - '+ numbers +'<br>');
        
    for(let nums of numbers){
        document.write( 'After looping element - '+ nums +'<br>');
    }

}


/**
 * 
Subtask-1:
Now tell Ersa to display sum of all the odd numbers from 1 to 100.
Display sum of all the odd numbers from 81 to 131.
 */


// Using while loop to sum of all odd numbers from 1 to 100
function ForWhile(){
    document.write('All odd numbers from 1 to 100. <br> Here = ');
    let i = 1;
    let sum = 0;
    
    while(i <= 100){
        if(i % 2 !== 0){  
            document.write(' ' + i ); 
            sum = sum + i;
        }
        i++;
    }
    document.write( '<br> All odd Numbers sum = '+ sum );    
}


/***
Subtask-2:
    Now tell Ersa to display sum of all the even numbers from 1 to 100.
    Display sum of all the even numbers from 206 to 311.
 */

// Using for loop to sum of all even numbers from 1 to 100

function ForFor(){
    let initial_sum = 0;
    document.write('All even Numbers from 1 to 100. <br> Here = ');
    
    for( let initial_number = 1; initial_number <= 100; initial_number++ ){
        if(initial_number % 2 === 0){
            document.write(' ' +  initial_number);
            initial_sum = initial_sum + initial_number;
        }
    }
    document.write('<br> All even Number sumation = ' + initial_sum);
}

/***
    Implement a countdown timer that counts down from 21 to 15.
 */
let countdown = 21 ;
document.write(' Countdown <br>');
while (countdown > 15){
    document.write(' ' + countdown + '<br>');
    countdown--;
}
/**
 * Find out big Number 
 */

function ForBigNum(){
    let num_1 = Number(prompt('Enter Your First Number : '));
    let num_2 = Number(prompt('Enter Your Second Number : '));
    let num_3 = Number(prompt('Enter Your Third Number : '));
    let num_4 = Number(prompt('Enter Your Fourth Number : '));
    
    document.write( 'Your given Number '+ num_1 +', '+ num_2 +', '+ num_3 +', '+ num_4);
    
    if (num_1 > num_2 && num_1 > num_3 && num_1 > num_4){
        document.write('Big Number is '+ num_1);
    }
    else if(num_2 > num_3 && num_2 > num_4){
        document.write('Big Number is '+ num_2);
    }
    else if(num_3 > num_4){
        document.write('Big Number is '+ num_2);
    }
    else{
        document.write(' <br> Big Number is '+ num_4);
    }
}

