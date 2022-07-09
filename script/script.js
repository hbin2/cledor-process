new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    
  });

  // aos 라이브러리

  AOS.init();

  // 서브타이틀 애니메이션
  gsap.from(".sub-title > span > span", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.8
  });

  gsap.to(".sub-title > span > span", {
    opacity: 0,
    y: -100,
    duration: 1,
    stagger: {
      each: "0.1",
      from: "end"
    }
  }, "+=2");
  