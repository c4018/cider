//main

const heroImg = document.querySelector(".hero .banner")
const leftButton = document.querySelector(".left_btn")
const rightButton = document.querySelector(".right_btn")

let currentNumber = 1;//현재 번호를 1로설정

leftButton.addEventListener("click", function(){//leftButton을 눌렀을 때 이벤트를 실행

    currentNumber--;
    if(currentNumber < 1){
      currentNumber = 3;
    }//만약 currentNumber가 1보다 작아지면, currentNumber를 3으로 설정. 이렇게 함으로써 currentNumber의 값을 1, 2, 3 순환시킴
    heroImg.src = `img/main/hero${currentNumber}.jpg`;
})

rightButton.addEventListener("click", function(){//rightButton을 눌렀을 때 이벤트를 실행

    currentNumber++;//currentNumber 변수를 1 증가
    if(currentNumber > 3){
      currentNumber = 1;//currentNumber가 3보다 크면 currentNumber를 1로 설정
    }
    heroImg.src = `img/main/hero${currentNumber}.jpg`;
})


// Elements appear when scrolling
const animatedTags = document.querySelectorAll("h2, h3, p,.section2 img,.section3 img, a.button ,.btn,header, h1,.section1 img,.marquee_orange,.latest_box")

animatedTags.forEach(tag =>{
  tag.style.opacity = "0";
})

document.addEventListener("scroll", function(){//스크롤 시에 이벤트를 실행
  
  let delay = 0.25;//각 요소들이 나타나는 시간 간격 

  animatedTags.forEach(tag=>{//포함된 각 요소에 대해 반복문을 실행
    const tagTop = tag.getBoundingClientRect().top;//getBoundingClientRect()를 사용하여 현재 요소의 상대적인 위치를 계산
    const tagBottom = tag.getBoundingClientRect().bottom;
    if(tagTop < window.innerHeight && tagBottom > 0){//만약 현재 요소가 화면에 보이는 영역에 위치하면, fadeIn 애니메이션을 적용
      tag.style.animation =`fadeIn 1s ${delay}s both`;
      console.log("appear");
      delay +=0.1;

    }else{
      tag.style.animation = "0";
      console.log("hide");
    }//그렇지 않은 경우, 요소를 숨김 상태로 유지

  })

})

//Elements appear on first load

const landingTags = document.querySelectorAll("header, h1,.section1 img,.marquee_orange")//header, h1,.section1 img,.marquee_orange 요소를 모두 선택
document.addEventListener("DOMContentLoaded", function() {
  let delay = 0.25;//각 요소들이 나타나는 시간 간격 

  landingTags.forEach(tag => {//포함된 각 요소에 대해 반복문을 실행
    tag.style.opacity = "0";//현재 요소의 opacity를 0으로 설정하여 숨김 상태로 만듬
    const tagTop = tag.getBoundingClientRect().top;//getBoundingClientRect()를 사용하여 현재 요소의 상대적인 위치를 계산
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {//만약 현재 요소가 화면에 보이는 영역에 위치하면, fadeIn 애니메이션을 적용
      tag.style.animation = `fadeIn 1s ${delay}s both`;
      console.log("appear");
      delay += 0.1;
    } else {
      tag.style.animation = "0";
      console.log("hide");
    }//그렇지 않은 경우, 요소를 숨김 상태로 유지
  });
});



















