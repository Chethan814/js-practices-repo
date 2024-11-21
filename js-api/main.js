let requestUrl = "https://randomuser.me/api/";
    let Api = new XMLHttpRequest();

    Api.open("GET", requestUrl);

    Api.onreadystatechange = function(){

      // console.log(Api.readyState);

      if (Api.readyState === 4) {
        let data = JSON.parse(this.responseText);
        console.log(data);
        let {eamil} = data.results[0]
        console.log(eamil);
        
      }
    }
      
    Api.send();

    console.log(Api);