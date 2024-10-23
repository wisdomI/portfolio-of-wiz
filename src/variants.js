export const fadeIn = (direction, delay) => {
  let x = 0;
  let y = 0;

  if (direction === "up") y = 40;
  else if (direction === "down") y = -40;
  else if (direction === "left") x = -40;
  else if (direction === "right") x = 40;

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
