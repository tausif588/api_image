function get_img(){
   url="https://dog.ceo/api/breeds/image/random"; 
   fetch(url).then((data)=>{
    return data.json();
   }).then((actualData)=>{
     display_img(actualData.message)
   }).catch((error)=>{
    console.log("Error:" + error);
   });
   
}

function display_img(image_url){
    document.getElementById("img").src=image_url;
}