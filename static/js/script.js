// window.addEventListener("load", function(){
//     document.querySelector(".preloader").classList.add("opacity-0")
    
//     setTimeout(function(){
//         document.querySelector(".preloader").style.display="none"
//     }, 1)
// })


// Portfolio item fliter 

const filterContainer=document.querySelector(".portfolio-filter"),
        filterBtns=filterContainer.children,
        totalFilterBtn=filterBtns.length,
        portfolioItems=document.querySelectorAll('.portfolio-item'),
        totalPortfolioItems=portfolioItems.length


for (let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener('click', function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue=this.getAttribute("data-filter")
        for (let k=0; k<totalPortfolioItems; k++){
            if(filterValue === portfolioItems[k].getAttribute("data-category")){
                portfolioItems[k].classList.remove("hide")
                portfolioItems[k].classList.add("show")
            }
            else {
                portfolioItems[k].classList.remove("show")
                portfolioItems[k].classList.add("hide")
            }
            if (filterValue==="all"){
                portfolioItems[k].classList.remove("hide")
                portfolioItems[k].classList.add("show")
            }
        }
    })
}


// portfolio Lightbox
const lightbox=document.querySelector(".lightbox"),
        lightboxImg=lightbox.querySelector(".lightbox-img"),
        lightboxClose=lightbox.querySelector(".lightbox-close"),
        lightboxText=lightbox.querySelector(".caption-text"),
        lightboxCounter=lightbox.querySelector(".caption-counter")
let itemIndex=0

for(let i=0; i<totalPortfolioItems; i++){
    portfolioItems[i].addEventListener("click", function(){
        itemIndex=i
        changeItem()
        toggleLightbox()
    })
}
function nextItem() {
    if(itemIndex == totalPortfolioItems-1){
        itemIndex=0
    }
    else{
        itemIndex++
    }
    changeItem()
}
function prevItem() {
    if(itemIndex == 0){
        itemIndex = totalPortfolioItems-1
    }
    else{
        itemIndex--
    }
    changeItem()
}
function toggleLightbox() {
    lightbox.classList.toggle("open")
}
function changeItem(){
    let imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src")
    lightboxImg.src=imgSrc
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML
    lightboxCounter.innerHTML=(itemIndex + 1) + " of " + totalPortfolioItems
}


// close Lightbox 
lightbox.addEventListener("click", function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox()
    }
})


// Aside navbar

const nav=document.querySelector(".nav"),
        navList=nav.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section")

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        // Remove backsection class 
        removeBackSectionClass()

        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                // add backsection class 
                addBackSectionClass(j)
                
            }
            navList[j].querySelector("a").classList.remove("active")  
        }
        this.classList.add("active")

        showSection(this)

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn()
        }
    })
}

function removeBackSectionClass(params) {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.remove("back-section")
        
    }
}
function addBackSectionClass(num){
    allSection[num].classList.add("back-section")
}
function showSection(element) {
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.remove("active")
        
    }

    const href = element.getAttribute("href").split("#"),
        target = href[1]

    document.querySelector("#"+target).classList.add("active")
}
function updateNav(element){
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active")
        const target = element.getAttribute("href").split("#")[1]
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active")
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("data-section-index")

    showSection(this)
    updateNav(this)
    removeBackSectionClass()
    addBackSectionClass(sectionIndex)
})


const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside")


navTogglerBtn.addEventListener("click", asideSectionTogglerBtn)

function asideSectionTogglerBtn() {
    aside.classList.toggle("open")
    navTogglerBtn.classList.toggle("open")
    for (let i = 0; i < allSection.length; i++) {
        allSection[i].classList.toggle("open")
        
    }

}


// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyvozAyjpDbEvVsIROyWT8Kzjfkz2RmFU05k-Tb8_ifv2cOxw9k/exec'
const form = document.forms['google-sheet']



$(document).ready(function(){
    $('form').on("submit",function(){
        Swal.fire(
            'Sent Successfully',
            'Thank you for your response',
            'success'
          )

        document.getElementById("myform").reset()
    });
});

form.addEventListener('submit', e => {
    
    e.preventDefault()
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .catch(error => console.error('Error!', error.message))
})