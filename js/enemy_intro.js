    // // 画像のURLを格納した配列
    // var images = [
    //     "../images/enemy_intro/test1.jpg",
    //     "../images/enemy_intro/test2.png",
    //     "../images/enemy_intro/test3.png"
    //   ];
  
    //   // ボタン要素を取得
    //   let left_button = document.getElementById("leftButton");

    //   let right_button = document.getElementById("rightButton");

  
    //   // 背景画像を変更する要素を取得
    //   let element = document.getElementById("myElement");
  
    //   // 現在表示している画像のインデックス
    //   let currentIndex = 0;
  
    //   // ボタンがクリックされたときの処理
    //   left_button.addEventListener("click", function() {
    //     // 次の画像のインデックスを計算
    //     currentIndex = (currentIndex + 1) % images.length;
  
    //     // 背景画像を変更する
    //     element.style.backgroundImage = "url('" + images[currentIndex] + "')";
    //   });

    //   // ボタンがクリックされたときの処理
    //   right_button.addEventListener("click", function() {
    //     // 次の画像のインデックスを計算
    //     currentIndex = (currentIndex - 1) % images.length;
  
    //     // 背景画像を変更する
    //     element.style.backgroundImage = "url('" + images[currentIndex] + "')";
    //   });

const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider li');
const numItems = sliderItems.length;
let currentIndex = 0;

function updateSliderIndex() {
  slider.style.setProperty('--index', currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % numItems;
  updateSliderIndex();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + numItems) % numItems;
  updateSliderIndex();
}

// 自動スライド
setInterval(nextSlide, 5000); // 5秒ごとに次のスライドへ切り替わる

updateSliderIndex();
