const sections = document.querySelectorAll('section');





// .last-div 
  const lastDiv = document.querySelector(".last-div");

// .last-div Refresh page
lastDiv.addEventListener("click", () => {
            window.location.reload(); // 페이지 새로 고침
        });


//Script Hidden
function makeInvisible() {
  document.getElementById("ugly").className = "hidden";
}



//Sectino
sections.forEach(section => {
  section.addEventListener('click', () => {
    section.classList.toggle('clicked');
  });
});


// text
document.addEventListener("DOMContentLoaded", function() {
  const ShelveElement = document.querySelector(".Shelve"); 
  const FloorElement = document.querySelector(".Floor"); 
  const WallElement = document.querySelector(".Wall");
  const CeilingElement = document.querySelector(".Ceiling");  
  const CityElement = document.querySelector(".City");  

  const testElements = document.querySelectorAll(".test");
  const test2Elements = document.querySelectorAll(".test2");
  const test3Elements = document.querySelectorAll(".test3");
  const test4Elements = document.querySelectorAll(".test4");
  const test5Elements = document.querySelectorAll(".test5");


 
  // 처음에 모든 testElements를 숨김
  testElements.forEach(function(testElement) {
    testElement.style.display = "none";
  });
  test2Elements.forEach(function(test2Element) {
    test2Element.style.display = "none";
  });
  test3Elements.forEach(function(test3Element) {
    test3Element.style.display = "none";
  });
  test4Elements.forEach(function(test4Element) {
    test4Element.style.display = "none";
  });
  test5Elements.forEach(function(test5Element) {
    test5Element.style.display = "none";
  });


  // 각 섹션을 클릭하면 해당 섹션에 대한 텍스트를 토글 (숨김/보이기)
  ShelveElement.addEventListener("click", function() {
    testElements.forEach(function(testElement) {
      testElement.style.display = testElement.style.display === "none" ? "block" : "none";
    });
  });

  FloorElement.addEventListener("click", function() {
    test2Elements.forEach(function(test2Element) {
      test2Element.style.display = test2Element.style.display === "none" ? "block" : "none";
    });
  });

  WallElement.addEventListener("click", function() {
    test3Elements.forEach(function(test3Element) {
      test3Element.style.display = test3Element.style.display === "none" ? "block" : "none";
    });
  });

  CeilingElement.addEventListener("click", function() {
    test4Elements.forEach(function(test4Element) {
      test4Element.style.display = test4Element.style.display === "none" ? "block" : "none";
    });
  });

  CityElement.addEventListener("click", function() {
    test5Elements.forEach(function(test5Element) {
      test5Element.style.display = test5Element.style.display === "none" ? "block" : "none";
    });
  });
});