





function openFullImg(img){
    document.getElementById("full-imgBox").style.display = "flex";

    document.getElementById("fullImage").src = img.src;

    document.getElementById('pic-title').innerHTML = img.alt;
   
}

function closeFullImg(){
    document.getElementById("full-imgBox").style.display = "none";
}