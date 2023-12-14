// import { useState, useEffect } from "react";

// type DelayProps = {
//   delay: number;
//   children: React.ReactNode;
//   show: boolean;
// };

// const Delay = ({ children, delay, show }: DelayProps) => {
//   const [done, setDone] = useState(false);

//   useEffect(() => {
//     if (show) {
//       const showTimer = setTimeout(() => setDone(true), delay);
//       return () => clearTimeout(showTimer);
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [show]);

//   return done && <>{children}</>;
// };

// export default Delay;
