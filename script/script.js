new fullpage('#fullpage', {
    
    navigation:true,
    navigationPosition: 'right',
    showActiveTooltip:true,
    responsiveWidth:1900,
    scrollOverflow: true,
    afterResponsive: function(isResponsive){
      //alert("Is responsive: " + isResponsive);
    }
   
  });

  // aos 라이브러리

  AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
  });

  // 서브타이틀 애니메이션

  var subTitle = gsap.timeline({
    repeat:-1,
    repeatDelay:1.5
  });

  subTitle.from(".sub-title > span > span",  {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.5
  });

  

  subTitle.to(".sub-title > span > span", {
      opacity: 0,
      y: -100,
      duration: 1,
      stagger: {
        each: "0.1",
        from: "end"
      }
    }, "+=2");

