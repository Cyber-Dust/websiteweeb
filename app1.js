
function timeZone(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    
    if (hourNow > 18) {
        greeting = 'Good evening! Welcome to';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon! Welcome to';
    } else if (hourNow > 0) {
        greeting = 'Good Morning! Welcome to';
    } else {
        greeting = 'WELCOME!';
    }
    
    document.write('<h3>' + greeting + '</h3>');
}

function userAlert(){
    let sign = prompt("Do you know what a cryptocurrency is? Type YES or NO");

    if (sign.toLocaleLowerCase() == "yes") {
        alert("So Far, So Good!")
    } else if (sign = "no") {
        alert("Keep Reading")
    }
}


function myFunction() {
    confirm("Cryptocurrency is the future!🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀");
  }

function addPictures(){
    numberOfPictures = prompt('How many Bitcoin would you like?');
    url = "https://www.aljazeera.com/wp-content/uploads/2020/11/2020-11-24T133928Z_788862449_RC2P9K9XL48K_RTRMADP_3_CRYPTO-CURRENCIES.jpg?resize=770%2C513"
    for(let i = 0; i < numberOfPictures; i ++){
        document.write('<img src=" ' + url + '" >');
    }
}
