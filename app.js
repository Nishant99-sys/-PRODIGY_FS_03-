const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function imageAnimation(){

    let elemC=document.querySelector(".elem-container");
    let fixed=document.querySelector("#fixed-image1");
    elemC.addEventListener("mouseenter",function(){
            fixed.style.display="block"
    });
    elemC.addEventListener("mouseleave",function(){
           fixed.style.display="none"
    });
    
    
    
    
    let elems=document.querySelectorAll(".elem");
    
    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            let image=e.getAttribute("data-image");
            fixed.style.backgroundImage=`url(${image})`;
    
        })
    })
}

imageAnimation();

function SliderAnimation(){
    const left=document.querySelector(".arrow-left");
    const right=document.querySelector(".arrow-right");
    const slider=document.querySelector(".slider");
    const images=document.querySelectorAll(".images");
      
    let length=images.length;
    const nextslide=()=>{
        slider.style.transform=`translateX(-${slidenum*800}px)`;
        slidenum++;
    }
    const prevslide=()=>{
        slider.style.transform=`translateX(-${(slidenum-2)*800}px)`;
        slidenum--;
    }
    
    const getfirstslide=()=>{
        slider.style.transform=`translateX(0px)`;
        slidenum=1;
    }
    const getlastslide=()=>{
        slider.style.transform=`translateX(-${(length-1)*800}px)`;
        slidenum=length;
    }
    
    let slidenum=1;
    
    right.addEventListener('click',()=>{
        if(slidenum<length){
              nextslide();
        }else{
           getfirstslide(); 
        }
        changecolor();
    });
    left.addEventListener('click',()=>{
        if(slidenum>1){
              prevslide();
        }else{
           getlastslide(); 
        }
        changecolor();
    });
    
    
    
    const bottom=document.querySelector(".bottom");
    
    for(let i=0;i<length;i++){
        const div=document.createElement('div');
        div.className='button';
        div.style.cursor='pointer';
        bottom.appendChild(div);
    }
    
    
    
    const buttons=document.querySelectorAll('.button');
    buttons[0].style.backgroundColor='black';
    
    
    
    
    
    const resetbg=()=>{
        buttons.forEach((button)=>{
            button.style.backgroundColor='transparent';
            button.addEventListener('mouseover',stopslideshow);
            button.addEventListener('mouseout',startslideshow);
        })
    }
    
    
    
    
    
    buttons.forEach((button,i)=>{
        button.addEventListener('click',()=>{
            resetbg();
            slidenum=i+1;
            slider.style.transform=`translateX(-${i*800}px)`;
            button.style.backgroundColor='black';
        });
    });
    
    const changecolor=()=>{
        resetbg();
        buttons[slidenum-1].style.backgroundColor='black';
    }
    
    
    
    //------>start auto slider
    
    let slideinterval;
    
    const startslideshow=()=>{
        slideinterval=setInterval(()=>{
            if(slidenum<length){
                nextslide();
          }else{
             getfirstslide(); 
          }
          changecolor();
        },2000);
    };
    
    startslideshow();
    
    
    const stopslideshow=()=>{
        clearInterval(slideinterval);
    };
    
    
    slider.addEventListener('mouseover',stopslideshow);
    slider.addEventListener('mouseout',startslideshow);
    right.addEventListener('mouseout',startslideshow);
    right.addEventListener('mouseover',stopslideshow);
    left.addEventListener('mouseover',stopslideshow);
    left.addEventListener('mouseout',startslideshow);
    
}

SliderAnimation();

function videoconAnimation(){
    let videocon=document.querySelector("video");
    let playbtn=document.querySelector("#play");
    
    
    videocon.addEventListener('mouseenter',function(){
        gsap.to(playbtn,{
            scale:1,
            opacity:0.8
        })
    })
    videocon.addEventListener('mouseleave',function(){
        gsap.to(playbtn,{
            scale:0,
            opacity:0
        })
    })
    
    
    videocon.addEventListener("mousemove",function(dets){
        gsap.to(playbtn,{
                 left:dets.x-80,
                 top:dets.y-70
        })
    })
}

videoconAnimation();



function loadingAnimation(){
    gsap.from("#page1 nav",{
        translateX:-20,
        opacity:0,
        delay:1,
        duration:1
        
    })
    gsap.from("#left h3",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#right h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page-4 .container",{
        scale:0.7,
        opacity:0,
        delay:1,
        duration:1.5
        
    })
    gsap.from("#page1 .video-container",{
        scale:0.6,
        opacity:0,
        delay:0.5,
        duration:1.5
    })
    
    
        
    
    gsap.from("#nav-part2",{
        scale:0.6,
        opacity:0,
        delay:1.8,
        duration:0.7
        
    })

   
    

    
    
}

loadingAnimation();

function ImageAnimation(){
    let btn2=document.querySelector("#btn-2");
    let page5=document.querySelector("#page-5");
    btn2.addEventListener('click',function(){
          page5.style.opacity=1;
          page5.style.scale=1;
          
          gsap.from("#page-5 #ele1",{
            y:200,
            opacity:0,
            delay:0.8,
            duration:0.5
        })
        gsap.from("#page-5 #ele2",{
            y:200,
            opacity:0,
            delay:1.5,
            duration:0.5
        })
        gsap.from("#page-5 #ele3",{
            y:200,
            opacity:0,
            delay:2,
            duration:0.5
        })
       
       
    
        btn2.style.display='none';
          
    })
    
    
}
ImageAnimation();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


















