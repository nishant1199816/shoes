let next=document.querySelector('.next')
let prev=document.querySelector('.prev')
next.addEventListener('click', function() {
  let currImage=document.querySelector('.curr_image')
  let nextImage= currImage.nextElementSibling;
if(!nextImage){
  nextImage=document.querySelector(".main_image>img")
}
currImage.classList.remove("curr_image")
// console.log(currImage)
nextImage.classList.add("curr_image")
// console.log('neXtImage)
})

prev.addEventListener('click', function(){
  let currImage=document.querySelector(".curr_image")
  let prevImage= currImage.previousElementSibling;
  if(!prevImage){
    prevImage=document.querySelector(".main_image>img:last-child")
    }
    currImage.classList.remove("curr_image")
    prevImage.classList.add("curr_image")
})