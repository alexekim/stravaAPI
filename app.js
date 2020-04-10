console.log("ahhahahaha");

var getInfo(){
  const link = "http//alsdjkflakjsdf";
  fetch(link)
    .then( (res) => console.log(res.json() ) )
}

getInfo();
