let transitions= document.getElementById("trans")
let shape= document.getElementById("shape")
transitions.addEventListener('change',function(){
    output = transitions.value;
    if (output==="transX"){
        shape.style.transform='translate(30px,0)'
    }
    else if(output==="transY"){
        shape.style.transform='translate(0,30px)'
    }
    else if(output==="scale"){
        shape.style.transform='scale(2,2)'
    }
    else if(output==="rotation"){
        shape.style.transform='rotate(30deg)'
    }





})
