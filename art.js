`use strict`;

window.addEventListener("DOMContentLoaded", start);

const artworks = document.querySelectorAll(".artwork");

function start() {
  console.log("start");
  artWork1();
  artWork2();
  artWork3();
  artWork4();
  artWork5();
  artWork6();
  artWork7();
  artWork8();
  artWork9();
}

// --- Artwork 1, first try ---
// function artMaker1() {
//   console.log("artMaker1");
//   for (let counter = 100; counter < 300; counter += 20) {
//     // console.log(counter);
//     const artWork1 = document.querySelector("#artwork1");

//     artWork1.classList.add("box");
//     artworks[0].style.width += `${counter}px`;
//     artworks[0].style.height += `${counter}px`;
//     console.log(`${counter}px`);
//   }
// }

function artWork1() {
  console.log("artMaker1");
  for (let i = 100; i < 300; i += 20) {
    artworks[0].innerHTML += `<div class="box" style="width:${i}px; height:${i}px"/><div>`;
  }
}

function artWork2() {
  for (let i = 0; i < 90; i += 10) {
    artworks[1].innerHTML += `<div class="box" style="transform:rotate(${i}deg;)"></div>`;
  }
}

function artWork3() {
  for (let i = 0; i < 200; i += 10) {
    artworks[2].innerHTML += `<div class="circle" style="width:${i}px; height:${i}px"/><div>`;
  }
}

function artWork4() {
  for (let i = -90; i < 90; i += 20) {
    // artworks[3].innerHTML += `<div class="box" style="transform:translateY(${i}px); transform:translateX(${i}px);"/><div>`;
    artworks[3].innerHTML += `<div class="box" style="transform:translate(${i}px, ${i}px);"></div>`;
  }
}

function artWork5() {
  for (let i = 1; i < 512; i *= 2) {
    artworks[4].innerHTML += `<div class="circle" style="width:${i}px; height:${i}px"></div>`;
  }
}

function artWork6() {
  for (let i = -20; i < 45; i += 5) {
    artworks[5].innerHTML += `<div class="circle" style="transform:translateX(${i - 50}px) rotate(${
      i * 4
    }deg)"></div>`;
  }
}

function artWork7() {
  for (let i = 0; i < 200; i += 10) {
    artworks[6].innerHTML += `<div class="circle" style="width:${i}px; height:${i}px; transform: translate(${i}px, ${
      -i / 2
    }px)"></div>`;
  }
}

function artWork8() {
  for (let i = 50; i < 200; i += 10) {
    artworks[7].innerHTML += `<div class="box" style="width:${i}px; height:${i}px; transform: translate(${
      i / 2
    }px) rotate(${i}deg)"></div>`;
  }
}

function artWork9() {
  for (let i = 50; i < 200; i += 30) {
    artworks[8].innerHTML += `<div class="circle" style="width:${i}px; height:${i}px;"></div>`;
    artworks[8].innerHTML += `<div class="box" style="width:${i}px; height:${i}px;"></div>`;
  }
}
