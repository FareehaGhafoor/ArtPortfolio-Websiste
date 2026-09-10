console.log("JS IS RUNNING");

console.log(document.querySelector(".masked1"));
gsap.registerPlugin(ScrollTrigger, SplitText);

const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {

    const lenis = new Lenis({
        lerp: 0.15
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

});

gsap.ticker.lagSmoothing(0);


//texts
const homeTitle = new SplitText(".homeheader", { type: "chars" });
const homeDescription = new SplitText(".homedescription", { type: "words" });

const aboutTitle = new SplitText(".abouttitle", {type: "chars"});
const aboutdesc = new SplitText(".aboutdescription1, .aboutdescription2", {type: "words"});

const illustrationtitle = new SplitText(".illustrationstitle", {
    type: "chars"
});

const khankottitle = new SplitText(".citybgtitle", {
    type: "chars"
});

const khankotdesc = new SplitText(".khankottextdesc", {
    type: "chars"
});


const deeptitle = new SplitText(".deeperlooktitle", {
    type: "chars"
});

const butterflytitlex = new SplitText(".butterflytitleX", {
    type: "chars"
});
const butterflytitley = new SplitText(".butterflytitleY", {
    type: "chars"
});
const cuptitle = new SplitText(".cuptitle", {
    type: "chars"
});

const iantitle = new SplitText(".iantitle", {
    type: "chars"
});

const fireworktitle = new SplitText(".fireworkgirltitLe", {
    type: "chars"
});
const traingirltitle = new SplitText(".traingirltitle", {
    type: "words"
});


const visualTitle = new SplitText(".visualtitle", {type: "chars"});
const visualDetail = new SplitText(".visualdetail", {type: "words"});

const backgroundsTitle = new SplitText(".backgroundstitle", {type: "chars"});
const bgText = new SplitText(".bgtext", {type: "words"});

const animationsTitle = new SplitText(".animationstitle", {type: "chars"});
const workflowTitle = new SplitText(".workflowtitle", {type: "words"});

const characterDescription = new SplitText(".characterdescription", {type: "chars"});
const storyboardTitle = new SplitText(".storyboardtitle", {type: "words"});
const animationBackgroundTitle = new SplitText(".backgroundstitleanimation", {type: "words"});

const bookmarksTitle = new SplitText(".bookmarkstitle", {type: "chars"});

const contactTitle = new SplitText(".contacttitle", {type: "chars"});
const contactItems = new SplitText(".contactitem h2, .contactitem h3", {type: "chars"});

const animationreelTitle = new SplitText(".animationreeltitle", {type: "chars"});



mm.add("(min-width: 768px", () =>{
    //desktop 

// homeimg
gsap.from(
    ".homeimg",{
    opacity:20,
    y: -60,
    // ease: "sin",
  duration: 1,

    scrollTrigger:{
        trigger: ".home",
        start: "top 70%",
        scrub: true,

    }

});


gsap.to(
    ".detectiveman",{
        scale:1.15,
    y: -50,
    duration:1.5,

    scrollTrigger:{
        trigger: ".home",
        scrub:true,


    }

});

// .redlines

gsap.from(
    ".redlines",{
    opacity:20,
    y: 120,
    scale:2,
    duration:1.15,

    scrollTrigger:{
        trigger: ".home",
 scrub: true

    }

});

//masked

gsap.to(".masked1", {
    y: -10,
    rotation: 2,
    scale: 1.3,

    scrollTrigger: {
        trigger: ".illustrations",
    
        scrub: true
    }
});
gsap.to(".masked2", {
    y: -80,
    rotation:-2,
    scale: 1.5,

    scrollTrigger: {
        trigger: ".illustrations",

        scrub: true
    }
});
gsap.to(".masked3", {
    y: -180,
        rotation: 15,
    scrollTrigger: {
        trigger: ".illustrations",

        scrub: true
    }
});



//buterfly
gsap.from(".butterflyimg", {
    y: -20,
    // scale: 1.1,
    //    opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".butterflyimg",
        scrub: true,
        start: "top 70%",
        end: "top 10%"
    }
});

gsap.from(".cupimg", {
    y: -30,
    // scale: 1.1,
    //    opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".cupimg",
        scrub: true,
        start: "top 70%",
        end: "top 10%"
    }
});

gsap.from(".paintedeyeimg", {
    y: -35,
    // scale: 1.1,
    //    opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".paintedeyeimg",
        scrub: true,
        start: "top 70%",
        end: "top 10%"
    }
});

gsap.from(".trainface", {
    y: 70,
    // scale: 1.1,
    //    opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".trainface",
        scrub: true,
        start: "top 60%",
        end: "top 10%"
    }
});



gsap.from(".rocksimg", {
    y: 90,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".rocksimg",
        scrub: true,
        start: "top 70%",
        end: "top 10%"
    }
});

gsap.from(".mountainimg", {
    x: -70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".mountainimg",
        scrub: true,
        start: "top 70%",
        end: "top 10%"
    }
});

gsap.from(".homebgimg", {
    x: -70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".homebgimg",
        scrub: true,
        start: "top 80%",
        end: "top 30%"
    }
});



gsap.from(".yellowface", {
    y: 70,
    // scale: 1.1,
    //    opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".yellowface",
        scrub: true,
        start: "top 70%",
        end: "top 10%"
    }
});

gsap.from(".halffacebk", {
    x: -70,
    // scale: 1.1,
    //    opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".halffacebk",
        scrub: true,
        start: "top 70%",
        end: "top 10%"
    }
});



gsap.from(".fieldimg", {
    y: 70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".fieldimg",
        scrub: true,
        start: "top 80%",
        end: "top 30%"
    }
});

gsap.from(".dooropenimg", {
    y: 70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".dooropenimg",
        scrub: true,
        start: "top 80%",
        end: "top 30%"
    }
});

gsap.from(".buildingblueimg", {
    x: 70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".buildingblueimg",
        scrub: true,
        start: "top 80%",
        end: "top 30%"
    }

    
});

gsap.from(".doorimg", {
    x: -70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".doorimg",
        scrub: true,
        start: "top 80%",
        end: "top 30%"
    }

    
});




gsap.from(".charactersideviewimg", {
    y: -70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".charactersideviewimg",
        scrub: true,
        start: "top 80%",
        end: "top 40%"
    }
    

    
});


gsap.from(".characterfrontviewimg", {
    y: 70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".characterfrontviewimg",
        scrub: true,
        start: "top 70%",
        end: "top 40%"
    }
    
});

gsap.from(".characterturnaroundimg", {
    x: 70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".characterturnaroundimg",
        scrub: true,
        start: "top 50%",
        end: "top 30%"
    }
    
});


gsap.from(".storyboardimg", {
    x: -70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".storyboardimg",
        scrub: true,
        start: "top 70%",
        end: "top 40%"
    }
    
});



gsap.from(".doorfrontimg", {
    x: 70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".doorfrontimg",
        scrub: true,
        start: "top 80%",
        end: "top 50%"
    }
    
});

gsap.from(".buildingimg", {
    x: 70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".buildingimg",
        scrub: true,
        start: "top 80%",
        end: "top 50%"
    }
    
});

gsap.from(".doorgroundviewimg", {
    x: -70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".doorgroundviewimg",
        scrub: true,
        start: "top 80%",
        end: "top 50%"
    }
    
});

gsap.from(".doorknobimg", {
    x: 70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".doorknobimg",
        scrub: true,
        start: "top 80%",
        end: "top 50%"
    }
    
});


gsap.from(".arrowimg", {
    y: -10,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".arrowimg",
        scrub: true,
        start: "top 80%",
        end: "top 65%"
    }
});

    //titles


    //animations

});

//desktop end


//khankot
gsap.from(".standingmanimg", {
    // y: -20,
    scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".khankot",
        scrub: true,
        start: "top 20%",
        end: "top -30%"
    }

    
    
});




gsap.to(".animationsketchimg", {
    // y: 70,
    // scale: 1.1,
       opacity:0,
    // rotation: -2,
     scrollTrigger: {
        trigger:".animationsketchimg",
        scrub: true,
        start: "top 25%",
        end: "top 0%"
    }
    
});


// TITLES//////////


gsap.from(
    ".homeheader",{
    opacity:-2.5,
    x: 90,
    duration:1,

    scrollTrigger:{
        trigger: ".home",
        start: "top 20%"

    }

});


gsap.from(
    ".homedescription",{
    opacity:-2,
    x: -90,
    duration:1,

    scrollTrigger:{
        trigger: ".home",
        start: "top 70%"

    }

});



gsap.from(homeTitle.chars, {
    y: 50,
    opacity: 0,
    stagger: 0.075,
    duration: 0.5
});

gsap.from(homeDescription.words, {
    x: -90,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".home",
        start: "top 70%"
    }
});

gsap.from(aboutTitle.chars, {
    y: 70,
    stagger: 0.02,
    duration: 0.05,
    opacity: 0,

    scrollTrigger: {
        trigger: ".about",
        start: "top 60%",
        end: "top 25%",
        scrub: true
    }
});

gsap.from(aboutdesc.words, {
    y: 120,
    opacity: 0,
    stagger: 0.05,
    duration: 0.85,

    scrollTrigger: {
        scrub: true,
        trigger: ".about",
        start: "top 90%",
        end: "top 10%"
    }
});


gsap.from(illustrationtitle.chars, {
    x: 150,
    opacity: 0,
    stagger: 0.08,

    scrollTrigger: {
        trigger: ".illustrations",
        start: "top 40%",
        end: "top 0%",
        scrub: true
    }
});

gsap.from(khankottitle.chars, {
    y: 40,
    opacity: 0,
    scale: 1.3,
    duration: 1.15,

    scrollTrigger: {
        trigger: ".khankot",
        start: "top 70%"
    }
});

gsap.from(khankotdesc.chars, {
    y: 80,
    opacity: 0,
    scale: 0.2,
    duration: 1.8,

    scrollTrigger: {
        trigger: ".khankot",
        start: "top 80%"
    }
});

gsap.from(deeptitle.chars, {
    x: 30,
    opacity: 0,
    scale: 1.3,
    duration: 1.15,

    scrollTrigger: {
        trigger: ".deeperlooktitle",
      start: "top 80%",
        end: "top 20%",
        scrub: true

    }
});

// 

gsap.from(butterflytitlex.chars, {
    y: 120,
    opacity: 0,
    scale: 1.1,
    duration: 1.15,

    scrollTrigger: {
        trigger: ".butterfly",
       start: "top 80%",
        end: "top 12%",
        scrub: true
    }
});

gsap.from(butterflytitley.chars, {
    y: -120,
    opacity: 0,
    scale: 1.1,
    duration: 1.15,

    scrollTrigger: {
        trigger: ".butterfly",
       start: "top 80%",
        end: "top 10%",
        scrub: true
    }
});

// cuptitle

gsap.from(cuptitle.chars, {
    y: 70,
    opacity: 0,
    scale: 1.1,
    duration: 1.15,

    scrollTrigger: {
        trigger: ".cuptitle",
        start: "top 80%",
         end: "top 40%",
        scrub: true,
    }
});

gsap.from(iantitle.chars, {
    x: -10,
    opacity: 0,
    scale: 1.1,
    duration: 1.15,
        stagger: 0.01,

    scrollTrigger: {
        trigger: ".iantitle",
        start: "top 100%",
         end: "top 75%",
        scrub: true,
    }
});

// gsap.from(fireworktitle.chars, {
//     y: -50,
//     opacity: 0,
//     scale: 1.1,
//     duration: 1.15,
//         stagger: 0.04,

//     scrollTrigger: {
//         trigger: ".fireworkgirlimg",
//         start: "top 80%",
//          end: "top 40%",
//         scrub: true,
//     }
// });

gsap.from(traingirltitle.chars, {
    x: 120,
    opacity: 0,
    stagger: 0.04,
    duration: 1,

    scrollTrigger: {
     trigger: ".traingirltitle",
        start: "top 80%",
        end: "top 60%",
        scrub: true
    }
});

gsap.from(visualTitle.words, {
    x: 120,
    opacity: 0,
    stagger: 0.04,
    duration: 1,

    scrollTrigger: {
     trigger: ".visualdetail",
        start: "top 110%",
        end: "top 90%",
        scrub: true
    }
});

gsap.from(visualDetail.words, {
    y: 40,
    opacity: 0,
    stagger: 0.015,
    duration: 1,

    scrollTrigger: {
        trigger: ".visualdetail",
        start: "top 95%",
        end: "top 70%",
        scrub: true
    }
});

gsap.from(backgroundsTitle.chars, {
    y: -60,
    opacity: 0,
    stagger: 0.05,
    duration: 0.05,

    scrollTrigger: {
        trigger: ".backgroundsimg",
        start: "top 70%",
        end: "top 0%",
        scrub: true
    }
});

gsap.from(bgText.words, {
    y: 60,
    opacity: 0,
    stagger: 0.025,
    duration: 1,

    scrollTrigger: {
        trigger: ".bgtext",
        start: "top 85%",
        end: "top 55%",
        scrub: true
    }
});

gsap.from(animationsTitle.chars, {
     y: -60,
    opacity: 0,
    stagger: 0.05,
    duration: 0.05,

    scrollTrigger: {
        trigger: ".animationstitle",
        start: "top 100%",
        end: "top 40%",
        scrub: true
    }
});


gsap.from(animationreelTitle.chars, {
     x: -50,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.01,

    scrollTrigger: {
        trigger: ".animationreeltitle",
         start: "top 100%",
        end: "top 40%",
             scrub: true
    }
});

gsap.from(workflowTitle.words, {
     x: -60,
    opacity: 0,
    stagger: 0.2,
    // duration: 0.05,

    scrollTrigger: {
        trigger: ".workflowtitle",
        start: "top 80%",
        end: "top 40%",
        scrub: true
    }
});

gsap.from(storyboardTitle.words, {
     x: -60,
    opacity: 0,
    stagger: 0.2,
    // duration: 0.05,

    scrollTrigger: {
        trigger: ".storyboardtitle",
        start: "top 80%",
        end: "top 55%",
        scrub: true
    }
});

gsap.from(animationBackgroundTitle.words, {
     x: 60,
    opacity: 0,
    stagger: 0.2,
    // duration: 0.05,

    scrollTrigger: {
        trigger: ".backgroundstitleanimation",
        start: "top 90%",
        end: "top 70%",
        scrub: true
    }
});

gsap.from(bookmarksTitle.chars, {
    y: 100,
    opacity: 0,
    stagger: 0.05,
    duration: 1,

    scrollTrigger: {
        trigger: ".bookmarks",
        start: "top 70%",
        end: "top 30%",
        scrub: true
    }
});

gsap.from(contactTitle.chars, {
    y: 80,
    opacity: 0,
    stagger: 0.04,
    duration: 1,

    scrollTrigger: {
        trigger: ".contacttitle",
        start: "top 90%",
        end: "top 70%",
        // scrub: true
    }
});

gsap.from(contactItems.chars, {
    y: 40,
    opacity: 0,
    stagger: 0.01,
    duration: 0.5,

    scrollTrigger: {
        trigger: ".contactsbox",
        // start: "top 80%",
        end: "top 60%",
        // scrub: true
    }
});


