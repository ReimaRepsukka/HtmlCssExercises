document.querySelector("button").addEventListener("click", ok)

let check = document.querySelector("input")

function ok(){

    console.log(check.value);
    if(check.checked){
        console.log("valittu");
    }
}
