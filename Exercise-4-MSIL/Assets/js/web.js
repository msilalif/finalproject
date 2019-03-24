const slider =document.querySelector('.slider')
const image=document.querySelectorAll('.slider img')
function Next(){    
}
$('#Next').on('click',function(){
    if(counter>=image.length-1) return
    slider.style.transition='transform 0.5s ease-in-out'
    counter++
    slider.style.transform='translateX('+(-size*counter)+'px)'    
})
$('#Prev').on('click',function(){
    if(counter<=0) return 
    slider.style.transition='transform 0.5s ease-in-out'
    counter--
    slider.style.transform='translateX('+(-size*counter)+'px)'
})
slider.addEventListener('transitionend',function(){
    if(image[counter].id==='last'){
        slider.style.transition='none'
        counter=image.length-2
        slider.style.transform='translateX('+(-size*counter)+'px)'
    }
    if(image[counter].id==='first'){
        slider.style.transition='none'
        counter=image.length-counter
        slider.style.transform='translateX('+(-size*counter)+'px)'
    }
})
let counter =1;
const size =image[0].clientWidth
slider.style.transform='translate('+(-size*counter)+'px)'

$('document').ready(function(){
    setInterval(function(){
        if(counter>=image.length-1) return
        slider.style.transition='transform 1s ease-in-out'
        counter++
        slider.style.transform='translateX('+(-size*counter)+'px)'
    },3000)
})