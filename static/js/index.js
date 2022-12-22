/* let transitions= document.getElementById("trans")
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
 */
var field = document.getElementById('field').innerHTML
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
let shape = document.querySelector('#shape')
let transformButton = document.querySelector('.transformButton')
let rotatingButton = document.querySelector('.rotatingButton')
let up = document.querySelector('.up')
let left = document.querySelector('.left')
let rotate = document.querySelector('.rotate')
let scalingButton = document.querySelector('.scalingButton')
let scaleX = document.querySelector('.scaleX')
let scaleY= document.querySelector('.scaleY')
let shapeTop = parseInt(getComputedStyle(shape).getPropertyValue('top'));
let shapeLeft = parseInt(getComputedStyle(shape).getPropertyValue('left'));

function rotated(){
    let rotation =0;
    rotation= (rotation + +rotate.value) % 360 
    shape.style.transform =`rotate(${rotation}deg)`
}

function scaling(){
    let x = scaleX.value
    let y = scaleY.value
if (!x){
    x=1
}
if (!y){
    y=1
}
shape.style.transform=`scale(${+x},${+y})`
}
  
function upShape(){
    shapeTop -= +up.value
}

function leftShape(){
    shapeLeft -= +left.value
}
rotatingButton.onclick = function(){
    rotated()
}

scalingButton.onclick = function(){
    scaling()
}
transformButton.onclick = function(){
    upShape()
    leftShape()
    shape.style.top=shapeTop+'px'
    shape.style.left=shapeLeft+'px'
}
