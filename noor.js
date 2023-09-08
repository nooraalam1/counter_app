let value = 0;

function btn1(data){
   value = value+1;
   console.log(value);
   document.getElementById("append").innerText = value;
    
}
function btn2(data){
    value = value-1;
    console.log(value);
    document.getElementById("append").innerText = value;
}
function reset(data){
    value = 0;
    console.log(value);
    document.getElementById("append").innerText = value;
}