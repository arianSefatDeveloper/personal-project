let toggleIcon  = document.querySelector(".nav__toggle-icon");
let menu  = document.querySelector(".menu");
let cover  = document.querySelector(".cover");
let resumeListItmes = document.querySelectorAll(".resume-list__itme");


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
