let PromiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is complete");
    resolve()
  }, 1000);
});


PromiseOne.then(function(){
    console.log('Promise consumed');
})