let toggleIcon  = document.querySelector(".nav__toggle-icon");
let menu  = document.querySelector(".menu");
let cover  = document.querySelector(".cover");
let resumeListItmes = document.querySelectorAll(".resume-list__itme");
let portfolioListItme = document.querySelectorAll(".portfolio-list__itme")
let menuItem = document.querySelectorAll('.menu__item')
const sections = document.querySelectorAll("main > section")


toggleIcon.addEventListener("click" , function(){
    console.log('hi');
    toggleIcon.classList.toggle("nav__toggle-icon--open")
    menu.classList.toggle("menu--open")
    cover.classList.toggle("cover--open")
})





resumeListItmes.forEach(resumeListItme=>{
    resumeListItme.addEventListener("click" ,  function(){
        document.querySelector(".resume-list__itme--activ").classList.remove('resume-list__itme--activ')
        document.querySelector(".resume-content--show").classList.remove('resume-content--show')
        resumeListItme.classList.add('resume-list__itme--activ')

         let attribute = resumeListItme.getAttribute('data-content-id');
         document.querySelector(attribute).classList.add('resume-content--show')
        
            

    })

    })


    portfolioListItme.forEach(portfolioitem=>{
        
        portfolioitem.addEventListener('click' , function(){
            document.querySelector(".portfolio-list__itme--active").classList.remove('portfolio-list__itme--active');
            portfolioitem.classList.add("portfolio-list__itme--active");
            
            
            
            
            let portfolioattribute =  portfolioitem.getAttribute("data-portfilio-id");
            // console.log(portfolioattribute);
            
            console.log(document.querySelector(portfolioattribute));
            document.querySelector('.portfolio-content--show').classList.remove('portfolio-content--show');
            document.querySelector(portfolioattribute).classList.add('portfolio-content--show');
            
            
            
            
        })
    })
    
    const observer = new IntersectionObserver(observerHandler,{
        threshold: 0.5
    });
    
    function observerHandler(allSections) {
        allSections.map(section => {
            let sectionClassName = section.target.className
            let sectionMenuItem = document.querySelector(`.menu__item[data-section=${sectionClassName}]`)
            if (section.isIntersecting){
                sectionMenuItem.classList.add("menu__item--active")
            } else {
                sectionMenuItem.classList.remove("menu__item--active")
            }
        })
    }
    
    
    sections.forEach(section => {
        observer.observe(section)
    })
    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault()
            removeActiveClass('menu__item--active')
            item.classList.add("menu__item--active")
    
            let sectionClass = item.getAttribute("data-section")
            let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop
    
            window.scrollTo({
                top: sectionOffsetTop - 130,
                behavior: "smooth"
            })
        })
    })
