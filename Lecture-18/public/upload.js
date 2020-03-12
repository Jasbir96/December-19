// input tag
const imageupload=document.querySelector(".image-upload");
// image
const imagePicker=document.getElementById("imagePicker");

imagePicker.addEventListener("click",function(){

  imageupload.click();
})

imageupload.addEventListener("change",function(e){
    const img=document.createElement("img");
// console.log(imageupload.files);

  const  imgdata=imageupload.files[0];
    img.src=URL.createObjectURL(imgdata);
  //   console.log(img.src);
    const body=document.querySelector("body");
  
    body.appendChild(img);

img.onload=function(){
  URL.revokeObjectURL(img.src);
}


})

const download=document.querySelector(".download-tool");

download.addEventListener("click",function(){

const url=board.toDataURL("image/jpeg");
const anchor=document.createElement("a");
anchor.download="fileName.jpeg";

anchor.href=url;
anchor.click();
anchor.remove(); 


})