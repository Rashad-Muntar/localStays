setTimeout(() => {
  $(function() {
    var modal = UIkit.modal("#modal-center");
    modal.show(); 
});

$(".signup-btn").click(function(){
  var modal = UIkit.modal("#signup-complete");
    modal.show();
})

}, 3000)


const cookies = document.querySelector('.cookies');
const btn = document.querySelector('.accept');


btn.addEventListener("click", () =>{
  cookies.classList.remove("active")
  localStorage.setItem("cookieBannerDisplay", "true")
})

setTimeout(()=>{
  if(!localStorage.getItem("cookieBannerDisplay")){
    cookies.classList.add("active")
  }
}, 2000)




