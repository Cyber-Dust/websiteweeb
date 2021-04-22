
function timeZone(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good Morning!';
    } else {
        greeting = 'WELCOME!';
    }
    
    document.write('<h3>' + greeting + '</h3>');
}

function userAlert(){
    let sign = prompt("Do you know what a cryptocurrency is? Type YES or NO");

    if (sign.toLocaleLowerCase() == "yes") {
        alert("KEEP READING")
    } else if (sign = "no") {
        alert("WRONG CHOICE")
    }
}


function myFunction() {
    confirm("Cryptocurrency is the future!🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
  }