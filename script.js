function showPopup(e){
    e.preventDefault();
    document.getElementById("popup").style.display = "block";

    setTimeout(()=>{
        document.getElementById("popup").style.display = "none";
    },2000);
}