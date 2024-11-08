let btt = document.querySelector('#btt')
let pTag = document.querySelector('#para')

// btt.addEventListener('mouseover',(e)=>{
//     btt.textContent = 'mousein'
// })
// btt.addEventListener('mouseout',(e)=>{
//     btt.textContent = 'mouseout'
// })

// pTag.addEventListener('click' , () => {
//     pTag.textContent = 'clicked on para'
// })

// document.addEventListener('keydown' , (e) => {
//     pTag.textContent = 'key down ' + e.key
// })

document.addEventListener('keypress' , (e) => {
    pTag.textContent = 'key down ' + e.key
})