/*=============== SHOW MENU ===============*/
let barsIcon=document.querySelector('.icons .bars');
let menu=document.querySelector('.nav');
let closeMenu=document.querySelector('.nav .close-menu')
barsIcon.onclick=(e)=>{
    menu.classList.add('active')
    //Close Swither
    swither.classList.remove('active')
}
// CLose Cart 
closeMenu.onclick=()=>{
    menu.classList.remove('active')
}

/*=============== SHOW CART ===============*/
let cartIcon=document.querySelector('.icons .cart');
let cartSection=document.querySelector('.cart-section');
let closeCartsection=document.querySelector('.close-cart')
cartIcon.onclick=()=>{
    cartSection.classList.add('active')
}

//Close Cart
closeCartsection.onclick=()=>{
    cartSection.classList.remove('active')
}


/*=============== SHOW LOGIN ===============*/
let loginIcon=document.querySelector('.icons .login');
let loginSection=document.querySelector('.login-section');
let closeLoginsection=document.querySelector('.close-login')
loginIcon.onclick=()=>{
    loginSection.classList.add('active')
}

//Close Cart
closeLoginsection.onclick=()=>{
    loginSection.classList.remove('active')
}

/*=============== HOME SWIPER ===============*/
let homeSwiper=new Swiper(".home-content ",{
    spaceBetween:30,
    loop:'true',
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    }
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
let haede=document.getElementById('header')
addEventListener('scroll',()=>{
    if(window.scrollY>=50){
        haede.classList.add('scroll')
    }else{
        haede.classList.remove('scroll')
    }
})

/*=============== NEW SWIPER ===============*/
var swiper = new Swiper(".new-Swip ", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
  });

/*===== CART Product Details =====*/
let allProducts=document.querySelectorAll('.box');
let allImgs=document.querySelectorAll('.imgs >img');
let curentImgs=document.querySelector('.curent-imgs')
let imgSrc=document.querySelector('.img-src img');
let len=document.querySelector('.len');
let numberImgs=allImgs.length;
let count=0;

//IF Click On Any Box
allProducts.forEach((e)=>{
    e.addEventListener('click',()=>{
        window.location.href='details.html'
    })
})

//IF Click Any Img
allImgs.forEach((e,ind)=>{
    e.addEventListener('click',()=>{
        curentImgs.classList.add('active')
        count=ind+1;
        imgSrc.src=allImgs[ind].src;
        len.textContent=`${count} من ${numberImgs}`;
    })
})

//close curent-imgs 
function closeImg(){
    curentImgs.classList.remove('active')
}

function next(){
    count=(count+1)%numberImgs;
    imgSrc.src=allImgs[count].src;
    len.textContent=`${count+1} من ${numberImgs}`;
}
function prev(){
    count=(count -1 +numberImgs)%numberImgs;
    imgSrc.src=allImgs[count].src;
    len.textContent=`${count+1} من ${numberImgs}`;
}


/*=============== SHOW SCROLL UP ===============*/ 
let scrollUp=document.querySelector('.scroll-up');
addEventListener('scroll',()=>{
    if(this.scrollY>200){
        scrollUp.classList.add('active');
    }else{
        scrollUp.classList.remove('active');
    }
})
scrollUp.addEventListener('click',()=>{
    scrollTo(0,0)
})

/*=============== LIGHT BOX ===============*/
/*=============== QUESTIONS ACCORDION ===============*/
let allQuestions=document.querySelectorAll(".faq-content .faq-item");
allQuestions.forEach((item)=>{
    item.addEventListener('click',()=>{
        if(item.classList.contains('active')){
            item.classList.remove('active');
            item.querySelector('span').classList.remove('fa-times')
        }else{
            allQuestions.forEach((e)=>{
                e.classList.remove('active');
                e.querySelector('span').classList.remove('fa-times')
            })
            item.classList.add('active');
            item.querySelector('span').classList.add('fa-times')
        }
    })
})

/*=============== STYLE SWITCHER ===============*/
let colorStyle=document.querySelector('.color-style')
let swither=document.querySelector('.swither');
let gear=document.querySelector('.gear');
let allColor=document.querySelectorAll('.color'); 

gear.addEventListener('click',()=>{
    swither.classList.toggle('active')
})
addEventListener('scroll',()=>{
    swither.classList.remove('active')
})

allColor.forEach((e)=>{
    e.addEventListener('click',()=>{
        allColor.forEach(e=>{
            e.classList.remove('active','fa-check')
        })
        e.classList.add('active','fa-check');
        localStorage.setItem('color',e.getAttribute('data-color'));
        setColor(e);
    })
})

function setColor(e){
    let path=colorStyle.getAttribute('href').split('/');
    path=path.slice(0,path.length-1);
    colorStyle.setAttribute('href',`${path.join('/')}/${e.getAttribute('data-color')}.css`)
}

if(localStorage.getItem('color')){
    allColor.forEach((e,i)=>{
        if(localStorage.getItem('color')==e.getAttribute('data-color')){
            allColor.forEach((e)=>e.classList.remove('active','fa-check'));
            e.classList.add('active','fa-check');
            setColor(e);
        }
    })
}else{
    allColor[0].classList.add('active');
    setColor(allColor[0]);
}

/*=============== ADD Yaer To Footer===============*/
let year=document.querySelector('.year');
year.textContent=new Date().getFullYear();