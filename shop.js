// dress
const leftButton = document.querySelector(".left_btn")
const rightButton = document.querySelector(".right_btn")
const dressImg = document.querySelector(".dress")

const itemTags = document.querySelectorAll(".item");

itemTags.forEach((item,index) => {//itemTags 안에 포함된 각 요소에 대해 반복문을 실행

  const dressImg = item.querySelector(".dress");

  const leftButton = item.querySelector(".left_btn");
  const rightButton = item.querySelector(".right_btn");
  
  let itemNumber = 0;//변수가 0에서 시작

  leftButton.addEventListener("click", function(){
    itemNumber--;
    if(itemNumber < 1){
      itemNumber = 2;
    }//변수는 1씩 감소하고, 만약 itemNumber가 1보다 작아지면 2가 됨
    
    dressImg.src = `img/shop/dress${index}-${itemNumber}.jpg`;
  //${index}와 ${itemNumber}는 변수로, 이미지 파일 이름을 동적으로 생성하는 데 사용
  })
  
  rightButton.addEventListener("click", function(){
    console.log(itemNumber);
  
    itemNumber++;
    if(itemNumber > 2){
      itemNumber = 1;
    }//변수는 1씩 증가하고, 만약 itemNumber가 2보다 커지면 1이 됨
    dressImg.src = `img/shop/dress${index}-${itemNumber}.jpg`;
  })

})
//main에 쓰인 코드와 동일
const landingTags = document.querySelectorAll("header,.container")
document.addEventListener("DOMContentLoaded", function() {
  let delay = 0.25;

  landingTags.forEach(tag => {
    tag.style.opacity = "0";
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadeIn 1s ${delay}s both`;
      console.log("appear");
      delay += 0.1;
    } else {
      tag.style.animation = "0";
      console.log("hide");
    }
  });
});

const animatedTags = document.querySelectorAll("header")

animatedTags.forEach(tag =>{
  tag.style.opacity = "0";
})

document.addEventListener("scroll", function(){
  
  let delay = 0.25;

  animatedTags.forEach(tag=>{
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;
    if(tagTop < window.innerHeight && tagBottom > 0){
      tag.style.animation =`fadeIn 1s ${delay}s both`;
      console.log("appear");
      delay +=0.1;

    }else{
      tag.style.animation = "0";
      console.log("hide");
    }

  })

})
















