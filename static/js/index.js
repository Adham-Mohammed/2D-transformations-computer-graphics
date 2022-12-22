let transitions= document.getElementById("trans")
let shape= document.getElementById("shape")
let xvalue= document.getElementById("valuex")
let yvalue= document.getElementById("valuey")

let rotation =0;
function rotated(){
    rotation= (rotation + +xvalue.value) % 360 
    circle.style.transform =`rotate(${rotation}deg)`
}

function scaling(){
circle.style.transform=`scale(${+xvalue.value},${+yvalue.value})`
}
transitions.addEventListener('change',function(){
    output = transitions.value;
    if (output==="transX"){
        shape.style.transform=`translate(${xvalue.value},0)`
    }
    else if(output==="transY"){
        shape.style.transform='translate(0,30px)'
    }
    else if(output==="scale"){
        shape.style.transform='scale(2,2)'
    }
    else if(output==="rotation"){
        shape.style.transform='rotate(-30deg)'
    }





})
function draw() {
    const canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
    }
  }
