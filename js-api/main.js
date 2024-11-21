let Data = 'https://randomuser.me/api/'
let Api = new XMLHttpRequest();
Api.open('GET', Data)
Api.send()
console.log(Data);