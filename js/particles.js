const colors = ["deepskyblue","blue","navy"];

const numBalls = 77;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  ball.style.position = "fixed";
  ball.style.borderRadius = "30%";
  ball.style.opacity = 0.5;
  ball.style.overflow = "hidden";
  balls.push(ball);
  document.body.append(ball);
}


balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 10000, 
      direction: "alternate-reverse",
      iterations: Infinity
    }
  );
});