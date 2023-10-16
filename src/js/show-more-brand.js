const btnBrand = document.querySelector('.show-more__btn');
const blockBrands = document.querySelector('.slider-brands__wrapper');
let textBrand = btnBrand.querySelector('span');
let imgBrand = btnBrand.querySelector('.show-more--img');

btnBrand.addEventListener('click',function(){
   if(textBrand.textContent === 'Показать все'){
      blockBrands.style.height = '100%'
      textBrand.textContent = 'Скрыть'
      imgBrand.style.transform = 'rotate(180deg)'
   }else{
      blockBrands.style.height = '145px'
      textBrand.textContent = 'Показать все'
      imgBrand.style.transform = 'rotate(0deg)'
   }
});