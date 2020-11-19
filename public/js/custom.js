
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