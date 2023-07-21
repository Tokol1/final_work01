function main() {
  //----------------------------------------------------------------------
  // setup matter.js
  //----------------------------------------------------------------------
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

  const textures = [
    "../images/enemy_intro/slimes/Pyro_Silime.webp",
    "../images/enemy_intro/slimes/Anemo_Slime.webp",
    "../images/enemy_intro/slimes/Cryo_Slime.webp",
    "../images/enemy_intro/slimes/Dendro_Slime.webp",
    "../images/enemy_intro/slimes/Electro_Slime.webp",
    "../images/enemy_intro/slimes/Electro_Slime2.webp",
    "../images/enemy_intro/slimes/Geo_Slime.webp",
    "../images/enemy_intro/slimes/Hydro_Slime.webp",
  ]

  const ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true, render: { fillStyle: '#2aa', } });
  
  // マウスでオブジェクトを操作する
  const mouseConstraint = Matter.MouseConstraint.create(engine, { element: canvas });
  
  // engine.worldにオブジェクトを追加
  Matter.Composite.add(engine.world, [ground, mouseConstraint]);

  //５秒ごとに円を追加
  setInterval(function(){
    //0から7までの乱数を生成
    const random = Math.floor(Math.random() * 8);

    const slime = Matter.Bodies.circle(450, 50, 40, {
      render: {
        fillStyle: 'rgba(255, 0, 0, 0.1)',
        sprite: {
          texture: textures[random],
          xScale: 0.12,
          yScale: 0.12
        }
      } 
    }); // 位置x, y, 半径r
  
    Matter.Composite.add(engine.world, [slime]);
  }, 5000);
}
