
// var arr=[]

// addToArray()
// addToArray()
// addToArray()


// document.write(arr)

 


// function addToArray()
// {
//     var ele=+prompt("Enter value to add to array")
//    arr.push(ele) 
//    document.write()
// }

// var n1=+prompt("Enter first number")
// var n2=+prompt("Enter second number")
// add(n1,n2)

// function add(num1,num2){
//     var result=num1+num2;
//     document.write(result);
// }

//Basic Calculator

//number1,number2
//Operator (+,-,*,/)
// var number1=+prompt("Enter Number 1");
// var number2=+prompt("Enter Number 2");
// var choice=prompt("Enter an operator")

// if(choice==="+"){
//     addition(number1,number2)
// }
// else if(choice==="-"){
//     subtraction(number1,number2)
// }
// else if(choice==="*"){
//     multiplication(number1,number2)
// }
// else if(choice==="/"){
//     division(number1,number2)
// }
// else{
//     document.write("Invalid Input")
// }

// switch(choice){
//     case "+":
//         addition(number1,number2)
//         break;
//         case "-":
//             subtraction(number1,number2)
//             break;
//             case "*":
//                 multiplication(number1,number2)
//                 break;
//                 case "/":
//                     division(number1,number2)
//                     break;
//                     default:
//                         document.write("Invalid Input")
// }
// 
// subtraction(number1,number2)
// multiplication(number1,number2)
// division(number1,number2)




/* <script>
var names = new Array('James', 'Kevin', 'Brad');
function change_names(names) {
names[0]= 'Stuart';
}
function display_names() {
document.writeln('<h3> List of Student Names:</h3>');
document.write('<ul>');
for(var i=0; i <names.length; i++) {
document.write('<li>' + names[i]+ '</li>');
}
document.write('</ul>');
change_names(names);
document.write('<h3> List of Changed Students Names:</h3>');
document.write('<ul>');
for(var i=0; i<names.length; i++){
document.write('<li>' + names[i]+ '</li>');
}
document.write('</ul>');
}
display_names(names);
</script>

function addition(){
var result=num1+num2
console.log("Addition Result: \n"+result)
}
function subtraction(num1,num2){
    var result=num1-num2
    document.write("Subtraction Result: \n"+result)
}
function multiplication(num1,num2){
    var result=num1*num2
    document.write("Multiplication Result: \n"+result)
}
function division(num1,num2){
    var result=num1/num2
    document.write("Division Result: \n"+result)
} */


var number1=+prompt("Enter Number 1");
var number2=+prompt("Enter Number 2");

var answer=addition()
document.write("Transferred amount is: "answer)


function addition(num1,num2){
    var result=num1+num2
    return result
    }
    function subtraction(num1,num2){
        var result=num1-num2
        return result
       
    }
    function multiplication(num1,num2){
        var result=num1*num2
        return result
        
    }
    function division(num1,num2){
        var result=num1/num2
        return result
        
    } 

