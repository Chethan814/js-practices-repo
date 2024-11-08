let btt = document.querySelector('#btt')
let pTag = document.querySelector('#para')

btt.addEventListener('dblclick',(e)=>{
    let timeStamp = Date(e.timeStamp)
    console.log(e.timeStamp, '->' , timeStamp);
    pTag.textContent = timeStamp
})