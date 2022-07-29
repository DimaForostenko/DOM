"use strict";

const div=document.getElementById('div');

const btns= document.querySelectorAll('body>button');
for (const btn of btns)
btn.addEventListener('click',({target:{dataset},target})=>{
  div.style.flexDirection = dataset.display
})
