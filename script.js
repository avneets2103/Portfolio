// Add smooth scrolling behavior when clicking on anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// hobbies
let v1 = document.getElementById("hob1");
v1.addEventListener("mouseenter", function() {
    v1.innerHTML = "<h1>Photography</h1>"
    v1.classList.add("flipSide");
});

v1.addEventListener("mouseleave", function() {
  v1.innerHTML = "<img src='pic-168.jpg' width='300px'>";
  v1.classList.remove("flipSide");
});

let v2 = document.getElementById("hob2");
v2.addEventListener("mouseenter", function() {
    v2.innerHTML = "<h1>I cook</h1>";
    v2.classList.add("flipSide");
});

v2.addEventListener("mouseleave", function() {
  v2.innerHTML = '<img src="cooking.jpeg"  height="212px" alt="">'; 
  v2.classList.remove("flipSide");
});

let v3 = document.getElementById("hob3");
v3.addEventListener("mouseenter", function() {
    v3.innerHTML = "<h1>Sketching</h1>";
    v3.classList.add("flipSide");
});

v3.addEventListener("mouseleave", function() {
  v3.innerHTML = '<img src="drawing.jpeg" width="450px" alt="">' ; 
  v3.classList.remove("flipSide");
});

let v4 = document.getElementById("hob4");
v4.addEventListener("mouseenter", function() {
    v4.innerHTML = "<h1>Video editing</h1>";
    v4.classList.add("flipSide");
    v4.classList.add("measures2");
});

v4.addEventListener("mouseleave", function() {
  v4.innerHTML = '<video src="photosReel.mp4" controls width="300px"></video>' ; 
  v4.classList.remove("flipSide");
});

let v5 = document.getElementById("hob5");
v5.addEventListener("mouseenter", function() {
    v5.innerHTML = "<h1>Badminton</h1>";
    v5.classList.add("flipSide");
    v5.classList.add("measures");
});

v5.addEventListener("mouseleave", function() {
  v5.innerHTML = '<img src="badminton.jpeg" width="450px">'; 
  v5.classList.remove("flipSide");
});

let v6 = document.getElementById("hob6");
v6.addEventListener("mouseenter", function() {
    v6.innerHTML = "<h1>Watching good stuff</h1>";
    v6.classList.add("flipSide");
    v6.classList.add("measures");
});

v6.addEventListener("mouseleave", function() {
  v6.innerHTML = '<img src="anime.jpeg" width="300px" alt="">' ; 
  v6.classList.remove("flipSide");
});

// skills
let s1 = document.getElementById("skill1");
let c1 = s1.getElementsByClassName("lineClass")[0];
s1.addEventListener("mouseenter", function(){
    c1.innerHTML='<h2>Programming</h2><hr>';
    c1.classList.add("shift");
})
s1.addEventListener("mouseleave", function(){
    c1.innerHTML='<hr>';
    c1.classList.remove("shift");
})

let s2 = document.getElementById("skill2");
let c2 = s2.getElementsByClassName("lineClass")[0];
s2.addEventListener("mouseenter", function(){
    console.log("picked");
    c2.innerHTML='<h2>Web development</h2><hr>';
    c2.classList.add("shift");
})
s2.addEventListener("mouseleave", function(){
    c2.innerHTML='<hr>';
    c2.classList.remove("shift");
})

let s3 = document.getElementById("skill3");
let c3 = s3.getElementsByClassName("lineClass")[0];
s3.addEventListener("mouseenter", function(){
    c3.innerHTML='<h2>Photography</h2><hr>';
    c3.classList.add("shift");
})
s3.addEventListener("mouseleave", function(){
    c3.innerHTML='<hr>';
    c3.classList.remove("shift");
})

let s4 = document.getElementById("skill4");
let c4 = s4.getElementsByClassName("lineClass")[0];
s4.addEventListener("mouseenter", function(){
    c4.innerHTML='<h2>Problem Solving</h2><hr>';
    c4.classList.add("shift");
})
s4.addEventListener("mouseleave", function(){
    c4.innerHTML='<hr>';
    c4.classList.remove("shift");
})

let dsa =  document.getElementsByClassName("dsa")[0];
let v = dsa.getElementsByClassName("outside")[0];
let clickCount = 0;
v.addEventListener("click", function(){
    clickCount++;
    if(clickCount%2==1){
    dsa.getElementsByClassName("hide")[0].classList.remove("inside");}
    else{
        dsa.getElementsByClassName("hide")[0].classList.add("inside");
    }
})

let others = document.getElementsByClassName("otherLinks")[0];
others.addEventListener("click", function(){
    clickCount++;
    if(clickCount%2==1){
    dsa.getElementsByClassName("hide")[0].classList.remove("inside");}
    else{
        dsa.getElementsByClassName("hide")[0].classList.add("inside");
    }
})

let mail = document.getElementsByClassName("mail")[0];
let mailCounter = 0;
mail.addEventListener("click", function(){
    let mailMe = document.getElementsByClassName("mailMe")[0];
    mailCounter++;
    if(mailCounter%2==1){
        mailMe.classList.add("bgColor")}
    else{
        mailMe.classList.remove("bgColor");
    }
})

let mailMe = document.getElementsByClassName("mailMe")[0];
mailMe.addEventListener("click", function(){
    mailCounter++;
    if(mailCounter%2==0){
        mailMe.classList.remove("bgColor");
    }
}
)