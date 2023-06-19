let container = document.querySelector(".main-wrapper");
let section = container.querySelectorAll("section");

let tl = gsap//tl 변수에 GSAP의 Timeline을 생성
  .timeline({
    scrollTrigger: {//ScrollTrigger를 사용하여 스크롤 이벤트에 대한 애니메이션을 제어
      trigger: container,
      scrub: 1,//스크롤 이벤트에 따라 애니메이션의 진행도를 제어
      pin: true,//옵션은 컨테이너를 고정시켜 스크롤 영역에서 벗어나지 않도록 함
      start: "top top",//start와 end 는 애니메이션의 시작과 끝 위치를 지정
      end: "+=3300",
    },
  })
  .to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth - 95) +
      "px",
    ease: "none",
    duration: 1,
  })
  // container를 가로로 스크롤 할 수 있게함
  // scrollWidth:스크롤 가능한 전체 너비, 
  // document.documentElement.clientWidth: 뷰포트의 너비
  // 95:스크롤 위치에 따라 약간의 여유를 주기 위한 값
  // "px"는 픽셀 단위로 설정

  
 
  .to({}, { duration: 1 / (section.length + 1) });

gsap.to(".col-1", {
  y: -250,
  ease: "none",
  duration: 2,
  scrollTrigger: {//스크롤 이벤트를 트리거로 설정
    trigger: ".image-gallery",
    start: "top center",//요소의 상단이 뷰포트의 중앙에 닿을 때 애니메이션이 시작됨
    end: "+=3000",//현재 스크롤 위치에서 3000픽셀 아래로 이동할 때 애니메이션이 종료됨
    scrub: true,//스크롤하는 동안 애니메이션을 부드럽게 전환
  },
});
gsap.to(".col-2", {
  y: 250,
  ease: "none",
  duration: 2,
  scrollTrigger: {//스크롤 이벤트를 트리거로 설정
    trigger: ".image-gallery",
    start: "top center",//요소의 상단이 뷰포트의 중앙에 닿을 때 애니메이션이 시작됨
    end: "+=3000",//현재 스크롤 위치에서 3000픽셀 아래로 이동할 때 애니메이션이 종료됨
    scrub: true,//스크롤하는 동안 애니메이션을 부드럽게 전환
  },
});
gsap.to(".col-3", {
  y: -250,
  ease: "none",
  duration: 2,
  scrollTrigger: {//스크롤 이벤트를 트리거로 설정
    trigger: ".image-gallery",
    start: "top center",//요소의 상단이 뷰포트의 중앙에 닿을 때 애니메이션이 시작됨
    end: "+=3000",//현재 스크롤 위치에서 3000픽셀 아래로 이동할 때 애니메이션이 종료됨
    scrub: true,//스크롤하는 동안 애니메이션을 부드럽게 전환
  },
});

gsap.from(".row-2", {
  height: "0%",
  duration: 1,//".row-2" 클래스를 가진 요소의 높이를 0%에서 1초 동안 애니메이션을 적용하여 나타냄
  delay: 0.5,
  scrollTrigger: {
    trigger: ".section-3",
    start: "40% center",//".section-3" 요소를 가운데에서 40% 위치로 설정
    toggleActions: "play pause reverse reverse",//스크롤 방향에 따라 애니메이션을 제어
  },
});

gsap.from(".row li", {
  y: 200,//수직으로 200px만큼 이동
  opacity: 0,
  ease: "none",
  delay: 2,
  duration: 2,
  stagger: {//요소들의 애니메이션 시작 시간을 간격을 주어 설정
    amount: 1,
  },
  scrollTrigger: {
    trigger: ".row li",
    toggleActions: "play pause reverse reverse",
  },
});

gsap.to(".num", {
  x: 620,//x축으로 620px 이동
  duration: 2,
  scrollTrigger: {
    trigger: ".num",
    start: "right left",// 시작 위치
  },
});

const landingTags = document.querySelectorAll("header, h1, h2, .box1 p,.box2")//header, h1, h2, .box1 p, .box2 요소를 모두 선택
document.addEventListener("DOMContentLoaded", function() {//로드될 때 이벤트를 수행
  let delay = 0.25;//각 요소들이 나타나는 시간 간격 

  landingTags.forEach(tag => { //포함된 각 요소에 대해 반복문을 실행
    tag.style.opacity = "0";//현재 요소의 opacity를 0으로 설정하여 숨김 상태로 만듬
    const tagTop = tag.getBoundingClientRect().top;//getBoundingClientRect()를 사용하여 현재 요소의 상대적인 위치를 계산
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {//만약 현재 요소가 화면에 보이는 영역에 위치하면, fadeIn 애니메이션을 적용
      tag.style.animation = `fadeIn 1s ${delay}s both`;
      console.log("appear");
      delay += 0.4;
    } else {
      tag.style.animation = "0";
      console.log("hide");
    }//그렇지 않은 경우, 요소를 숨김 상태로 유지
  });
});