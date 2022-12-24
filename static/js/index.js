var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);
let face = document.querySelector('#face')
let Left_ear = document.querySelector('#Left_ear')
let right_ear = document.querySelector('#right_ear')
let right_eye = document.querySelector('#right_eye')
let left_eye = document.querySelector('#left_eye')
let mouth = document.querySelector('#mouth')

let transformButton = document.querySelector('.transformButton')
let rotatingButton = document.querySelector('.rotatingButton')
let up = document.querySelector('.up')
let left = document.querySelector('.left')
let rotate = document.querySelector('.rotate')
let scalingButton = document.querySelector('.scalingButton')
let scaleX = document.querySelector('.scaleX')
let scaleY= document.querySelector('.scaleY')

let faceTop = parseInt(getComputedStyle(face).getPropertyValue('top'));
let faceLeft = parseInt(getComputedStyle(face).getPropertyValue('left'));
let Left_earTop = parseInt(getComputedStyle(Left_ear).getPropertyValue('top'));
let Left_earLeft = parseInt(getComputedStyle(Left_ear).getPropertyValue('left'));
let right_earTop = parseInt(getComputedStyle(right_ear).getPropertyValue('top'));
let right_earLeft = parseInt(getComputedStyle(right_ear).getPropertyValue('left'));
let right_eyeTop = parseInt(getComputedStyle(right_eye).getPropertyValue('top'));
let right_eyeLeft = parseInt(getComputedStyle(right_eye).getPropertyValue('left'));
let left_eyeTop = parseInt(getComputedStyle(left_eye).getPropertyValue('top'));
let left_eyeLeft = parseInt(getComputedStyle(left_eye).getPropertyValue('left'));
let mouthTop = parseInt(getComputedStyle(mouth).getPropertyValue('top'));
let mouthLeft = parseInt(getComputedStyle(mouth).getPropertyValue('left'));

let rest_but= document.querySelector('#rest')



let rotation =0
function rotated(){
    rotation= (rotation+ +rotate.value) %360 

    face.style.transform =`rotate(${rotation}deg)`
    Left_ear.style.transform =`rotate(${rotation}deg)`
    right_ear.style.transform =`rotate(${rotation}deg)`
    left_eye.style.transform =`rotate(${rotation}deg)`
    right_eye.style.transform =`rotate(${rotation}deg)`
    mouth.style.transform =`rotate(${rotation}deg)`
}
let x=1
let y=1
function scaling(){
    x = (x + +scaleX.value)
    y = (y+ +scaleY.value)
if (!x){
    x=1
}
if (!y){
    y=1
}
face.style.transform=`scale(${+x},${+y})`
Left_ear.style.transform=`scale(${x},${y})`
right_ear.style.transform=`scale(${x},${y})`
left_eye.style.transform=`scale(${x},${y})`
right_eye.style.transform=`scale(${x},${y})`
mouth.style.transform=`scale(${x},${y})`
}
  
function upShape(){
    faceTop -= +up.value
    Left_earTop -= +up.value
    right_earTop -= +up.value
    right_eyeTop -= +up.value
    left_eyeTop -= +up.value
    mouthTop -= +up.value
}

function leftShape(){
    faceLeft -= +left.value
    Left_earLeft -= +left.value
    right_earLeft -= +left.value
    right_eyeLeft -= +left.value
    left_eyeLeft -= +left.value
    mouthLeft -= +left.value

}
transformButton.onclick = function(){
    upShape()
    leftShape()
    face.style.top=faceTop+'px'
    face.style.left=faceLeft+'px'

    right_ear.style.top=right_earTop+'px'
    right_ear.style.left=right_earLeft+'px'

    Left_ear.style.top=Left_earTop+'px'
    Left_ear.style.left=Left_earLeft+'px'

    right_eye.style.top=right_eyeTop+'px'
    right_eye.style.left=right_eyeLeft+'px'
    
    left_eye.style.top=left_eyeTop+'px'
    left_eye.style.left=left_eyeLeft+'px'

    mouth.style.top=mouthTop+'px'
    mouth.style.left=mouthLeft+'px'
}
scalingButton.onclick = function(){  
    scaling()
}
rotatingButton.onclick = function(){
    rotated()
}

rest_but.onclick=function(){
    location.reload()

}