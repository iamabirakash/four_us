// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
// function imageconanimate() {
//     var imagecon = document.querySelector("#image-container")
//     var clickbtn = document.querySelector("#click")
//     imagecon.addEventListener("mouseenter",function(){
//         gsap.to(clickbtn,{
//             scale: 1,
//             opacity: 1
//         })
//     })
//     imagecon.addEventListener("mouseleave",function(){
//         gsap.to(clickbtn,{
//             scale: 0,
//             opacity: 0
//         })
//     })
//     imagecon.addEventListener("mousemove",function(dets){
//         gsap.to(clickbtn,{
//             left:dets.x,
//             top:dets.y
//         })
//     })
// }
// imageconanimate()
// function loadinganimate() {
//     gsap.from(".page1 h1",{
//         y:100,
//         opacity:0,
//         delay:0.5,
//         duration:0.9,
//         stagger:0.3
//     })
//     gsap.from(".page1 #image-container",{
//         y:100,
//         opacity:0,
//         delay:1.2,
//         duration:0.9,
//     })
// }
// loadinganimate()