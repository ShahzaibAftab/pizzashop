const leftIcon = document.querySelector('.leftIcon')
const rightIcon = document.querySelector('.rightIcon')
const menuItem = document.querySelectorAll('.menuItem')
const menuSection = document.querySelector('.menuSection')

rightIcon.addEventListener('click', ()=>{
    menuSection.classList.add('showSection')
})
leftIcon.addEventListener('click', ()=>{
    menuSection.classList.remove('showSection')
})

menuItem.forEach(menuItem =>{
    menuItem.addEventListener('click', ()=>{
        menuSection.classList.remove('showSection')

    } )
})