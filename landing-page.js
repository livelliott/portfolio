// gsap.to(".yell-tri-2", {y: 50, duration: 5});

// console.clear();

// const randomX = random(1, 10);
// const randomY = random(1, 10);
// const randomDelay = random(0, 1);
// const randomTime = random(3, 5);
// const randomTime2 = random(5, 10);
// const randomAngle = random(-20, 20);

// const shapes = gsap.utils.toArray('.moving');
// shapes.forEach(shape => {
//   gsap.set(shape, {
//     x: randomX(-1),
//     y: randomX(1),
//     rotation: randomAngle(-1)
//   });

//   moveX(shape, 0.75);
//   moveY(shape, -0.75);
//   rotate(shape, 1);
// });

// function rotate(target, direction) {
  
//   gsap.to(target, randomTime2(), {
//     rotation: randomAngle(direction),
//     // delay: randomDelay(),
//     ease: Sine.easeInOut,
//     onComplete: rotate,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function moveX(target, direction) {
  
//   gsap.to(target, randomTime(), {
//     x: randomX(direction),
//     ease: Sine.easeInOut,
//     onComplete: moveX,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function moveY(target, direction) {
  
//   gsap.to(target, randomTime(), {
//     y: randomY(direction),
//     ease: Sine.easeInOut,
//     onComplete: moveY,
//     onCompleteParams: [target, direction * -1]
//   });
// }

// function random(min, max) {
//   const delta = max - min;
//   return (direction = 1) => (min + delta * Math.random()) * direction;
// }