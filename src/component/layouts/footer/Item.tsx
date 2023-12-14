// import { Box } from "@chakra-ui/react";
// import Delay from "./Delay";

// type ItemProps = {
//   index: number;
//   children: React.ReactNode;
//   show: boolean;
// };

// const Item = ({ index, children, show }: ItemProps) => {
//   const motionProps = {
//     initial: { opacity: 0 },
//     animate: {
//       opacity: 1,
//       transition: {
//         type: "tween",
//         duration: 2,
//       },
//     },
//     exit: {
//       opacity: 0,
//       transition: {
//         type: "tween",
//         duration: 2,
//       },
//     },
//   };

//   return (
//     <Delay delay={index * 1000} show={show}>
//       <Box>
//         {children}
//       </Box>
//     </Delay>
//   );
// };

// export default Item;
