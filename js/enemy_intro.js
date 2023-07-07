    // 画像のURLを格納した配列
    var images = [
        "../images/enemy_intro/test1.jpg",
        "../images/enemy_intro/test2.png",
        "../images/enemy_intro/test3.png"
      ];
  
      // ボタン要素を取得
      let left_button = document.getElementById("leftButton");

      let right_button = document.getElementById("rightButton");

  
      // 背景画像を変更する要素を取得
      let element = document.getElementById("myElement");
  
      // 現在表示している画像のインデックス
      let currentIndex = 0;
  
      // ボタンがクリックされたときの処理
      left_button.addEventListener("click", function() {
        // 次の画像のインデックスを計算
        currentIndex = (currentIndex + 1) % images.length;
  
        // 背景画像を変更する
        element.style.backgroundImage = "url('" + images[currentIndex] + "')";
      });

      // ボタンがクリックされたときの処理
      right_button.addEventListener("click", function() {
        // 次の画像のインデックスを計算
        currentIndex = (currentIndex - 1) % images.length;
  
        // 背景画像を変更する
        element.style.backgroundImage = "url('" + images[currentIndex] + "')";
      });