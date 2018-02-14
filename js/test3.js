var box = document.getElementById('box');
var infotext = document.getElementById('infoText');
var uitest = document.getElementById('ui-test');
box.addEventListener('click', function(){


var scene = document.querySelector('a-scene');
var tx = 'GG';
var boxPos = box.getAttribute('position');
//    uitest.setAttribute('visible','true');
//    uitest.setAttribute('position', boxPos);
//scene.appendChild();   
//infotext.setAttribute('visible','true');
//infotext.setAttribute('text',{value: tx});
//box.setAttribute('color','red');
    
    
var cylinder = document.createElement('a-cylinder');
cylinder.setAttribute('color', '#FF9500');
cylinder.setAttribute('height', '2');
cylinder.setAttribute('radius', '0.75');
cylinder.setAttribute('position', '1 0 4');
scene.appendChild(cylinder);   
    
var plane = document.createElement('a-plane');
plane.setAttribute('color', 'blue');
plane.setAttribute('height', '2');
plane.setAttribute('width', '3');
plane.setAttribute('side','double');    
plane.setAttribute('position', '-3 0 4');
plane.setAttribute('src', 'uitest');
scene.appendChild(plane);
    

var curved = document.createElement('a-curvedimage');
curved.setAttribute('color', 'red');
curved.setAttribute('height', '2');
curved.setAttribute('radius', '5.7');
curved.setAttribute('theta-length','72');    
curved.setAttribute('position', '-5 0 4');
curved.setAttribute('rotation', '0 100 0');
scene.appendChild(curved);
    
});
