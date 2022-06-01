function slider () {
         //Slider
         const slides = document.querySelectorAll('.offer__slide'),/*  берем слайды */
         prev = document.querySelector('.offer__slider-prev'),/* берем стрелки прев и следующую */
         next = document.querySelector('.offer__slider-next'),
         total = document.querySelector('#total'),
         current = document.querySelector("#current"),
         slidesWrapper = document.querySelector('.offer__slider-wrapper'),
         slidesField = document.querySelector('.offer__slider-inner'),
         width = window.getComputedStyle(slidesWrapper).width;  /* получаем ширину обертки */
  
         //Easy version
  
  /*        const slides = document.querySelectorAll('.offer__slide'), берем слайды
         prev = document.querySelector('.offer__slider-prev'),берем стрелки прев и следующую
         next = document.querySelector('.offer__slider-next'),
         total = document.querySelector('#total'),
         current = document.querySelector("#current"); 
   */
  
     
        /*  showSlides(slideIndex); */
  
    /*      if(slides.length < 10){
          total.textContent = `0${slides.length}`;
         } else {
             total.textContent =slides.length;
         }
      */
  /*        function showSlides(n){ создаем функцию переключения
             if(n > slides.length){ если индекс больше кол-ва слайдов
                 slideIndex = 1;  вернуть индекс в 1
             }
             if (n < 1){ тоже самое, только наоборот 
             slideIndex = slides.length;
         } */
     
  /*            slides.forEach( item => item.style.display = 'none');
             slides[slideIndex - 1].style.display = 'block'; показ первого слайда под нулевым элементом 
             if(slides.length < 10){
              current.textContent = `0${slideIndex}`;
             } else {
              current.textContent = slideIndex;
             }
         } 
          */
  /*        function plusSlides(n){ делаем функцию для -/+ прохождения по слайдеру
             showSlides(slideIndex += n);
         }
     
         prev.addEventListener('click', () =>{
             plusSlides(-1);
         });
         next.addEventListener('click', () =>{
             plusSlides(1);
         }); */
  
  
         // Hard Version
         let slideIndex = 1; /* назначаем текущий индекс слайда
         наш индекс */
         let offset = 0; /* насколько сдвигается слайд */
  
         if(slides.length < 10){
          total.textContent = `0${slides.length}`;
          current.textContent = `0${slideIndex}`;
         } else {
             total.textContent =slides.length;
             current.textContent = slideIndex;
         }
  
  
  
         slidesField.style.width = 100 * slides.length +'%';  /* задаем ширину всех слайдов */
         slidesField.style.display = 'flex'; /* устанавливаем их в горизонтальный ряд */
         slidesField.style.transition = '0.5s all';
  
         slidesWrapper.style.overflow = 'hidden'; /* скрываем все элементы, которые не попадают в область видимости*/
  
         slides.forEach(slide => {
             slide.style.width = width; /* задаем каждому слайду ширину обертки */
         })
  
         next.addEventListener('click',() =>{
             /* слайс нам нужен чтобы не брать два последних пикселя и умножение работало */
          if(offset === +width.slice(0, width.length -2) * (slides.length - 1)){
              offset = 0;
          }   else {
              offset += +width.slice(0, width.length -2) 
          }
          slidesField.style.transform = `translateX(-${offset}px)`;
  
          if( slideIndex == slides.length) {
              slideIndex = 1;
              
          } else{
              slideIndex++;
          }
  
          if(slides.length < 10){
              current.textContent = `0${slideIndex}`;
          } else{
              current.textContent = slideIndex;
          }
         })
  
         prev.addEventListener('click',() =>{
       if(offset === 0){    
           offset = +width.slice(0, width.length -2) * (slides.length - 1)
       }   else {
           offset -= +width.slice(0, width.length -2) 
       }
       slidesField.style.transform = `translateX(-${offset}px)`;
  
       if( slideIndex == 1) {
          slideIndex = slides.length;
          
      } else{
          slideIndex--;
      }
  
       if(slides.length < 10){
          current.textContent = `0${slideIndex}`;
      } else{
          current.textContent = slideIndex;
      }
      })


}

module.exports = slider;