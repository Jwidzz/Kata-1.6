const btnService = document.querySelector('.button__show-more');
const block = document.querySelector('.service__slider');
let textService = btnService.querySelector('span');
let imgService = btnService.querySelector('.button__show-more--image');

btnService.addEventListener('click', function () {
   if(textService.textContent === 'Показать все'){
    block.style.height = '100%'
    textService.textContent = 'Скрыть'
    imgService.style.transform = 'rotate(180deg)'
   }else{
    block.style.height = '180px'
    textService.textContent = 'Показать все'
    imgService.style.transform = 'rotate(0deg)'
   }
});