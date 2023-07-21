function main() {
  //----------------------------------------------------------------------
  // setup matter.js
  //----------------------------------------------------------------------
  const engine = Matter.Engine.create();
  const runner = Matter.Runner.create();
  Matter.Runner.run(runner, engine);

  // レンダリングを実行するオブジェクトを作成
  const canvas = document.querySelector('#canvas');
  const render = Matter.Render.create({
    canvas, engine,
    options: { width: canvas.width, height: canvas.height, wireframes: false, background: '#eee', } ,
  });
  Matter.Render.run(render);

  //----------------------------------------------------------------------
  // content
  //----------------------------------------------------------------------
  const box = Matter.Bodies.rectangle(400, 200, 80, 80); // 位置x, y, サイズw, h
  const ball = Matter.Bodies.circle(450, 50, 40); // 位置x, y, 半径r
  const hexagon = Matter.Bodies.polygon(350, 50, 6, 40); // 位置x, y, 多角形n, 半径r
  const ground = Matter.Bodies.rectangle(400, 610, 810, 60, { isStatic: true, render: { fillStyle: '#2aa', } });
  
  // マウスでオブジェクトを操作する
  const mouseConstraint = Matter.MouseConstraint.create(engine, { element: canvas });
  
  // engine.worldにオブジェクトを追加
  Matter.Composite.add(engine.world, [box, ball, hexagon, ground, mouseConstraint]);

  //５秒ごとに円を追加
  setInterval(function(){
    const ball = Matter.Bodies.circle(450, 50, 40);
    //円の背景を画像にする

    Matter.Composite.add(engine.world, [ball]);
  }, 5000);
}
