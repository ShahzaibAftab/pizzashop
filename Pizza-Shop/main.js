// Toggle navaBar On and Off =====>
const toggleIcon = document.getElementById('toggleIcon')
const closeNavBar = document.getElementById('closeNavBar')
const NavBar = document.getElementById('navBar')
const navLinks = document.querySelectorAll('.navLink')
const searchBox = document.querySelector('.searchBox')
const searchBoxBtn = document.querySelector('.searchIcon')

toggleIcon.addEventListener('click', function(){
    NavBar.classList.add('show')
    searchBox.classList.remove('showSearchBox')

})
searchBoxBtn.addEventListener('click', function(){
    searchBox.classList.toggle('showSearchBox')
    NavBar.classList.remove('show')

})

closeNavBar.addEventListener('click', function(){
    NavBar.classList.remove('show')

})

navLinks.forEach(navLink => {
    navLink.addEventListener('click', function(){
        NavBar.classList.remove('show')

    })
})



// CUSTOMER REVIEW SWIPER FUNCTION ====================>
  let customerSwiper = new Swiper(".swiperDiv", {
    autoplay: true,
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints:{
       546: {
         slidesPerView: 2
       },
       769: {
         slidesPerView: 3
       },
    },
    
   
  });


//   FEEDBACK PAGE SHOW AND CLOSE =======================>
const feedbackBtn = document.querySelector('.feedbackBtn')
const closePageBtn = document.getElementById('closePageBtn')
const feedbackPage = document.getElementById('feedbackPage')

feedbackBtn.addEventListener('click', ()=>{
feedbackPage.classList.add('showPage')
})

closePageBtn.addEventListener('click', ()=>{
feedbackPage.classList.remove('showPage')

})


//   APPLICATION PAGE SHOW AND CLOSE =======================>
const applyBtn = document.querySelector('.applyBtn')
const closeAplctnBtn = document.getElementById('closeAplctnBtn')
const applicationPage = document.getElementById('applicationPage')

applyBtn.addEventListener('click', ()=>{
    applicationPage.classList.add('showPage')
})

closeAplctnBtn.addEventListener('click', ()=>{
    applicationPage.classList.remove('showPage')

})


// FILTERING THROUGH FOOD AND DRINK ============================>
const categories = document.querySelectorAll('.category')
const itemWrapper = document.querySelectorAll('.itemWrapper')
for(let i=0; i<categories.length; i++){
    categories[i].addEventListener('click', function(){
        for(let a=0; a<categories.length; a++){
            categories[a].classList.remove('categoryActive')
        }
        this.classList.add('categoryActive')

        let itemFilter = this.getAttribute('data-filter')
        for(let f=0; f<itemWrapper.length; f++){
         itemWrapper[f].classList.add('hide')
         itemWrapper[f].classList.remove('live')
         if(itemWrapper[f].getAttribute('data-target') == itemFilter || itemFilter == "all"){
             itemWrapper[f].classList.remove('hide')
             itemWrapper[f].classList.add('live')
         }
        }
    })
}


     
