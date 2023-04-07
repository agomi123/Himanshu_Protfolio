$(document).ready(function(){
    
    function sendEmail(){
        var name =$('#name').val();
        var email =$('#email').val();
        var subject =$('#subject').val();
        var message =$('#message').val();
        var body = 'Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>message: '+message;
       
    }
    Email.send({
        SecureToken: "ce05a918-43af-45d8-aee0-4b58387e67c2",
    To : 'himanshugupta3385@gmail.com',
    From : "smtp.elasticemail.com",
    Subject : "This is the subject From: "+name,
    Body : body
}).then(
  message =>{
      if(message=='OK')
      alert('EMail sent');
      else
      alert('Failed');
  }
);

    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    let btn=document.querySelector(".resumed");
    btn.addEventListener("click",()=>{
        const span=document.querySelector("a span");
        span.style.visibility="visible";
        setTimeout(()=>{
            span.style.visibility="hidden";
            btn.style.transition="1s ease-in-out";
        },3000);
    })
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing2", {
        strings: ["Developer",  "Designer", "Programmer","Learner","Adviser"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Designer", "Programmer","Learner", "Adviser"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
});