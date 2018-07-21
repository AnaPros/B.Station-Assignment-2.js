// Challenge 1

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "#";
    }
    return line + "\n";
}

    function buildTriangle(height) {
    var triangle = "";
    for (var i = 1; i <= height; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}

    console.log(buildTriangle(7));

/* two loops were created, one for the length of each line, second loop for the how many lines. I had a lot of help
from Google search for Challenge 1. I had a hard time understanding how to get each new line to increase 
the number of "#" */
console.log()
/ Challenge 2

function isEven(number) {
    if number % 2 == 0;{
    console.log("the number is even.");
}        
    else{
        console.log("the number is odd.");
    }
};
/* Here I have used the "if" function to
print "the number is even" if the number divides into 
two and have no remainder, but if it DOES divide into 
two and have a remainder then the function will print 
"the number is odd." Challenge two was easier to understand for me */