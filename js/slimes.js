function main() {
  //----------------------------------------------------------------------
  // setup matter.js
  //----------------------------------------------------------------------

  const textures = [
    "../images/enemy_intro/slimes/Pyro_Silime_1.webp",
    "../images/enemy_intro/slimes/Anemo_Slime_1.webp",
    "../images/enemy_intro/slimes/Cryo_Slime_1.webp",
    "../images/enemy_intro/slimes/Dendro_Slime_1.webp",
    "../images/enemy_intro/slimes/Electro_Slime_1.webp",
    "../images/enemy_intro/slimes/Electro_Slime2_1.webp",
    "../images/enemy_intro/slimes/Geo_Slime_1.webp",
    "../images/enemy_intro/slimes/Hydro_Slime_1.webp",
  ];

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  const a = new Image(    "../images/enemy_intro/slimes/Hydro_Slime.webp");

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

  // Promise.all(textures.map(loadImage))
  // .then((images) => {
  //   // すべての画像の読み込みが完了した後に行いたい処理をここに記述する
  //   console.log('すべての画像の読み込みが完了しました');
    

    
  // })
  // .catch((error) => {
  //   console.error('画像の読み込みに失敗しました', error);
  // });

  let random;
      //10秒ごとに円を追加
      setInterval(function(){
        //0から7までの乱数を生成
        random = Math.floor(Math.random() * 8);
  
        //円を作成
        const slime = Matter.Bodies.circle(canvas.width / 2, 0, 40, {
          render: {
            fillStyle: 'rgba(255, 0, 0, 0.1)',
            sprite: {
              texture: textures[random],
              xScale: 0.12,
              yScale: 0.12
            }
          }
        });
        slime.onload;
        Matter.Composite.add(engine.world, [slime]);
      }, 5000);  
  
}
