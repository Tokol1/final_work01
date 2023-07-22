function main() {
  //----------------------------------------------------------------------
  // setup matter.js
  //----------------------------------------------------------------------

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }



  const imageUrls = [
    "images/enemy_intro/slimes/Pyro_Silime_1.webp",
    "images/enemy_intro/slimes/Anemo_Slime_1.webp",
    "images/enemy_intro/slimes/Cryo_Slime_1.webp",
    "images/enemy_intro/slimes/Dendro_Slime_1.webp",
    "images/enemy_intro/slimes/Electro_Slime_1.webp",
    "images/enemy_intro/slimes/Electro_Slime2_1.webp",
    "images/enemy_intro/slimes/Geo_Slime_1.webp",
    "images/enemy_intro/slimes/Hydro_Slime_1.webp",
  ];

  const engine = Matter.Engine.create();
  const runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);

  // レンダリングを実行するオブジェクトを作成
  const canvas = document.querySelector('#canvas');
  // canvasの背景色を設定

  const render = Matter.Render.create({
    canvas, engine,
    options: { width: canvas.width, height: canvas.height, wireframes: false, background: 'rgba(0,0,0,0)', } ,
  });
  Matter.Render.run(render);

  //----------------------------------------------------------------------
  // content
  //----------------------------------------------------------------------

  const ground = Matter.Bodies.rectangle(canvas.width / 2, canvas.height - 15, canvas.width, 10, { isStatic: true, render: { fillStyle: '#2aa', } });
  
  // マウスでオブジェクトを操作する
  const mouseConstraint = Matter.MouseConstraint.create(engine, { element: canvas });
  
  // engine.worldにオブジェクトを追加
  Matter.Composite.add(engine.world, [ground, mouseConstraint]);

  let random;
  //10秒ごとに円を追加
  setInterval(function(){
    //0から7までの乱数を生成
    let random = Math.floor(Math.random() * 8);

    const image = new Image();

    image.onload = () => {
      console.log('画像の読み込みが完了しました');
          //円を作成
      const slime = Matter.Bodies.circle(canvas.width / 2, 0, 40, {
        render: {
          fillStyle: 'rgba(255, 0, 0, 0.1)',
          sprite: {
            texture: image.src,
            xScale: 0.12,
            yScale: 0.12
          }
        }
      });

      Matter.Composite.add(engine.world, [slime]);
    };

    image.src = imageUrls[random];

    // Promise.all(imageUrls.map(loadImage))
    // .then((images) => {
    //   // すべての画像の読み込みが完了した後に行いたい処理をここに記述する
    //   console.log('すべての画像の読み込みが完了しました');
      
    // //円を作成
    // const slime = Matter.Bodies.circle(canvas.width / 2, 0, 40, {
    //   render: {
    //     fillStyle: 'rgba(255, 0, 0, 0.1)',
    //     sprite: {
    //       texture: images[random].src,
    //       xScale: 0.12,
    //       yScale: 0.12
    //     }
    //   }
    // });

    // Matter.Composite.add(engine.world, [slime]);
    // })
    // .catch((error) => {
    //   console.error('画像の読み込みに失敗しました', error);
    // });


  }, 5000);  

}
