const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

window.addEventListener('load', () => {
  // image 는 모두 로드가 된 다음에 읽어지므로, 
  // 이때 정확한 이미지사이즈를 체크할 수 있음
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  window.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
  
  
    // vertical.style.left = `${x}px`;
    vertical.style.transform = `translateX(${x}px)`;
  
    // horizontal.style.top = `${y}px`;
    horizontal.style.transform = `translateY(${y}px)`;
    
    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    // target.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    
    tag.style.transform = `translate(${x}px, ${y}px)`
    // tag.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    tag.innerHTML = `${x}px, ${y}px`
  
  })

})

'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

