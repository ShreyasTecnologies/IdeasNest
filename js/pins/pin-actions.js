// =====================================
// IDEASNEST PIN ACTIONS
// LIKE / SAVE / SHARE / MENU / VIEW IMAGE
// =====================================



// ================================
// LIKE SYSTEM
// ================================


document.addEventListener("click", (event)=>{


const likeButton = event.target.closest(".like-btn");


if(!likeButton) return;



let liked =
likeButton.dataset.liked === "true";



if(liked){


likeButton.dataset.liked = "false";


likeButton.innerHTML =
`
🤍 Like
`;



}

else{


likeButton.dataset.liked = "true";


likeButton.innerHTML =
`
❤️ Liked
`;



}



});








// ================================
// SAVE SYSTEM
// ================================


document.addEventListener("click",(event)=>{


const saveButton =
event.target.closest(".save-btn");



if(!saveButton) return;



let saved =
saveButton.dataset.saved === "true";




if(saved){


saveButton.dataset.saved="false";


saveButton.innerHTML=
`
🔖 Save
`;



}

else{


saveButton.dataset.saved="true";


saveButton.innerHTML=
`
✅ Saved
`;



}



});









// ================================
// SHARE SYSTEM
// ================================


document.addEventListener("click",(event)=>{


const shareButton =
event.target.closest(".share-btn");



if(!shareButton) return;




let url =
window.location.href;




if(navigator.share){


navigator.share({

title:"IdeasNest Pin",

url:url


});


}

else{


navigator.clipboard.writeText(url);


alert(
"Pin link copied!"
);


}



});









// ================================
// OPEN FULL IMAGE
// ================================


window.openImage = function(image){



const viewer =
document.getElementById(
"imageViewer"
);



const fullImage =
document.getElementById(
"fullImage"
);




if(!viewer || !fullImage)
return;




fullImage.src=image;



viewer.style.display="flex";



};









// ================================
// CLOSE IMAGE VIEWER
// ================================


document.addEventListener("click",(event)=>{


if(event.target.id==="imageViewer"){



event.target.style.display="none";



}



});









// ================================
// THREE DOT MENU
// ================================


document.addEventListener("click",(event)=>{


const moreButton =
event.target.closest(".more-btn");



if(!moreButton)
return;



const menu =
document.getElementById(
"pinMenu"
);



if(menu){


menu.style.display="flex";


}



});









// ================================
// CLOSE MENU
// ================================


document.addEventListener("click",(event)=>{


const menu =
document.getElementById(
"pinMenu"
);



if(!menu)
return;



if(event.target === menu){



menu.style.display="none";


}



});









// ================================
// DOWNLOAD IMAGE
// ================================


document.addEventListener("click",(event)=>{


if(event.target.innerText.includes("Download")){


const image =
document.querySelector(
"#fullImage"
);



if(!image.src)
return;




const link =
document.createElement("a");



link.href=image.src;


link.download="IdeasNest-Pin.png";



link.click();



}



});









// ================================
// REPORT PIN
// ================================


document.addEventListener("click",(event)=>{


if(event.target.innerText.includes("Report")){


alert(
"Thank you. This pin has been reported."
);



}



});









// ================================
// EMBED CODE
// ================================


document.addEventListener("click",(event)=>{


if(event.target.innerText.includes("Embed")){


let code =

`<iframe src="${window.location.href}"></iframe>`;



navigator.clipboard.writeText(code);



alert(
"Embed code copied!"
);



}



});








// ================================
// SEE MORE / SEE LESS
// ================================


document.addEventListener("click",(event)=>{


if(event.target.innerText.includes("See more")){


alert(
"Showing more similar ideas"
);



}



if(event.target.innerText.includes("See fewer")){


alert(
"Hiding similar ideas"
);



}



});








console.log(
"IdeasNest Pin Actions Loaded"
);
