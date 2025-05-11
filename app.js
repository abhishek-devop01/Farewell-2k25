import { lerp } from "./utils.js";
import { createProjects, createBlogposts } from "./projects.js";

const main = document.querySelector('main');
const video = document.querySelector('video');
const videoSection = document.querySelector('#video');

createProjects();
createBlogposts();

main.addEventListener('scroll', () => {
    animateVideo()
})

// Video

const headerLeft = document.querySelector('.text__header__left');
const headerRight = document.querySelector('.text__header__right');

function animateVideo(){
    let {bottom} = videoSection.getBoundingClientRect();
    let scale = 1 - ((bottom - window.innerHeight) * .0005);
    scale = scale < .2 ? .2 : scale > 1 ? 1 : scale;
    video.style.transform = `scale(${scale})`;

    // Text transformation
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans;
    headerLeft.style.transform = `translateX(${-textTrans}px)`;
    headerRight.style.transform = `translateX(${textTrans}px)`;
} 

// Projects

const projectsSticky = document.querySelector('.projects__sticky');
const projectSlider = document.querySelector('.projects__slider');

let projectTargetX = 0;
let projectCurrentX = 0;

let percentages = {
    small: 700,
    medium: 300,
    large: 100
}

let limit = window.innerWidth <= 600 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large

function setLimit(){
    limit = window.innerWidth <= 600 ? percentages.small :
            window.innerWidth <= 1100 ? percentages.medium :
            percentages.large
}

window.addEventListener('resize', setLimit);

function animateProjects(){
    let offsetTop = projectsSticky.parentElement.offsetTop;
    let percentage = ((main.scrollTop - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > limit ? limit : percentage;
    projectTargetX = percentage;
    projectCurrentX = lerp(projectCurrentX, projectTargetX, .1);
    projectSlider.style.transform = `translate3d(${-(projectCurrentX)}vw, 0 , 0)`;
}

// Post animation
const blogSection = document.getElementById('blog');
const blogPosts = [...document.querySelectorAll('.post')];

function scrollBlogPosts(){
    let blogSectionTop = blogSection.getBoundingClientRect().top;
    for(let i = 0; i < blogPosts.length; i++){
        if(blogPosts[i].parentElement.getBoundingClientRect().top <= 1){
            // +1 to account for the first BLOG title div
        
            let offset = (blogSectionTop + (window.innerHeight * (i + 1))) * .0005;
            offset = offset < -1 ? -1 : offset >= 0 ? 0 : offset;
            if( i == 1) console.log(offset)
            blogPosts[i].style.transform = `scale(${1 + offset})`
        }
    }
}

// Circle animation
const circleSection = document.getElementById('circle__section');
const circle = document.querySelector('.circle');

function scrollCircle(){
    let {top} = circleSection.getBoundingClientRect();
    let scaleTop = Math.abs(top);
    let scale = (scaleTop / window.innerHeight)
    scale = scale < 0 ? 0 : scale > 1 ? 1 : scale;
    if(top <= 0){
        circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
    }else{
        circle.style.transform = `translate(-50%, -50%) scale(${0})`;
    }
}

// Dicover text animation
const dContainer = document.querySelector('.discover__container')
const leftText = document.querySelector('.text__left');
const rightText = document.querySelector('.text__right');

function scrollDiscover(){
    let {bottom} = dContainer.getBoundingClientRect();
    let textTrans = bottom - window.innerHeight;
    textTrans = textTrans < 0 ? 0 : textTrans
    leftText.style.transform = `translateX(${-textTrans}px)`
    rightText.style.transform = `translateX(${textTrans}px)`
}


// Text reveal

const textReveals = [...document.querySelectorAll('.text__reveal')];

let callback = (entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry);
            [...entry.target.querySelectorAll('span')].forEach((span, idx) => {
                setTimeout(() => {
                    span.style.transform = `translateY(0)`;
                }, (idx+1) * 50)
            })
        }
    })
})

let options = {
    rootMargin: '0px',
    threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);

textReveals.forEach(text => {
    let string = text.innerText;
    let html = '';
    for(let i = 0; i < string.length; i++){
        html += `<span>${string[i]}</span>`;
    }
    text.innerHTML = html
    observer.observe(text);
})


function animate(){
    animateProjects();
    requestAnimationFrame(animate)
}

main.addEventListener('scroll', () => {
    scrollBlogPosts();
    scrollCircle();
    scrollDiscover()
})
function locoInitilizer(){
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('.scroll__container'),
        smooth: true
    });
}

// random image position
function memories(){
var btn = document.querySelector('button')
var footer = document.querySelector('#footer')

btn.addEventListener('click', function() { 
    
    const arr = [
        {
            
            image: './assets/img1.jpeg' 
        },
        {
            
            image: './assets/img2.jpeg' 
    
        },
        {
            
            image: './assets/img3.jpeg' 
        },
        {
            
            image: './assets/img4.jpg' 
        },
        {
            
            image: './assets/5.jpg' 

        },
        {
            
            image: './assets/6.jpg' 

        },
        {
            
            image: './assets/7.jpg' 

        },
        {
            
            image: './assets/8.jpg' 

        },
        {
            
            image: './assets/9.jpg' 

        },
        {
            
            image: './assets/11.jpg' 

        },
        {
            
            image: './assets/12.jpg' 

        },
        {
            
            image: './assets/13.jpeg' 

        },
        {
            
            image: './assets/14.jpeg' 

        },
        {
            
            image: './assets/15.jpeg' 

        },
        {
            
            image: './assets/16.jpeg' 

        },
        {
            
            image: './assets/17.jpeg' 

        },
        {
            
            image: './assets/18.jpeg' 

        },
        {
            
            image: './assets/19.jpeg' 

        },
        {
            
            image: './assets/20.jpeg' 

        },
        {
            
            image: './assets/21.jpeg' 

        },
        {
            
            image: './assets/22.jpeg' 

        },
        {
            
            image: './assets/23.jpeg' 

        },
        {
            
            image: './assets/24.jpeg' 

        },
        {
            
            image: './assets/25.jpeg' 

        },
        {
            
            image: './assets/25.jpeg' 

        },
        {
            
            image: './assets/25.jpeg' 

        },
        {
            
            image: './assets/25.jpeg' 

        },
        {
            
            image: './assets/10.jpeg' 

        },
    ]

   var img = document.createElement('img')
   var x = Math.floor(Math.random() * 100)
   var y = Math.floor(Math.random() * 100)
   var rot = Math.floor(Math.random() * 360)

   let num=   Math.floor(Math.random()*arr.length);
   let winner = arr[num];

    img.setAttribute('src', winner.image)
     img.style.height = '200px'
    img.style.width = '200px'
    img.style.objectFit = "cover"
    img.style.left = x + '%'
     img.style.top = y + '%'
    //  img.style.transform = 'rotate(' + rot + 'deg)'
    img.style.position = 'absolute'
    footer.appendChild(img)

});
}
var p = document.querySelector("button");
     
p.addEventListener('click', function(){
          p.innerHTML = "Click Again";
})


memories();
locoInitilizer();
animate()
