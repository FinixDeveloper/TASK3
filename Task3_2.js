let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function (){
    const data = JSON.parse(xhr.response);
    console.log(data);
    for(let i=0; i<data.length; i++){
        console.log("Flag :", data[i].flags.png);
    }
};