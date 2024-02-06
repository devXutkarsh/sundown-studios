// const ball= document.getElementById('ball')
// const hero= document.querySelector('.hero');

// ball.addEventListener('mousemove' ,function(e){
// // ball.style.transform= `translate(${e.clientX}px, ${e.clientY})`
// console.log(e.clientX)
// // console.log(e)
// })

let item= document.querySelectorAll('.item')

item.forEach(e =>{
let itemcards= document.querySelector('.item1-card')

  // console.log(e)
  e.addEventListener('mouseenter', function(){  
   itemcards.style.display= `block`
  let image = e.getAttribute('data-image')
  console.log(image)
  itemcards.style.backgroundImage=`url(${image})`

    })
    e.addEventListener('mouseleave', function(){
      itemcards.style.display= `none`
      })
})


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: "auto",
//   centeredSlides: true,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

