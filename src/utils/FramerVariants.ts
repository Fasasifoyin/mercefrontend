export const userSignVariants = {
  key: "user",
  initial: { x: "-100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.3 },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const companySignVariants = {
  key: "company",
  initial: { x: "100%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.3 },
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const modalVariants = {
  key: "modal",
  initial: { x: "-100%" },
  animate: {
    x: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    x: "-100%",
    transition: { duration: 0.3 },
  },
};

export const fadeinVariants = {
  key: "fade",
  initial: { opacity: 0 },
  animate: {
    opacity: 0.4,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const confirmActionVariants = {
  key: "confirmAction",
  initial: { y: "-100%" },
  animate: {
    y: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.3 },
  },
};

export const footerVariants = (index: number, elementNumber: number) => ({
  initial: { y: "-10px", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      delay: 0.1 * index,
      type: "spring",
      stiffness: 80,
    },
  },
  exit: {
    y: "-10px",
    opacity: 0,
    transition: {
      duration: 0.07,
      delay: (elementNumber + 1 - index) * 0.07,
      type: "tween",
    },
  },
});

export const slideBottomVaraiant = (
  delay: number,
  start: number,
  duration: number,
  type?: string
) => ({
  initial: {
    opacity: 0,
    y: start,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.07 * delay,
      duration: duration,
      type: type ? type : "tween",
    },
  },
});
