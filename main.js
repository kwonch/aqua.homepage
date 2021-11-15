'use strict'

const slider = document.querySelector('.art4_img')
const sliderbox = document.querySelector('.art4_box')

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')


// Button Event
btn2.addEventListener('click', ()=>{
	slider.style.transform = 'translateX(-82.1vw)';
})

btn3.addEventListener('click', ()=>{
	slider.style.transform = 'translateX(-164.2vw)';
})

btn4.addEventListener('click', ()=>{
	slider.style.transform = 'translateX(-246.3vw)';
})

btn1.addEventListener('click', ()=>{
	slider.style.transform = 'translateX(0vw)';
})
