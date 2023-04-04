
import Body from "./components/Body";
import { motion, useScroll } from "framer-motion";
import "./Styles/Body.css"


function App() {
  const { scrollYProgress } = useScroll();
  return (
    // <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} >
     <>
      <Body />
      </>
    // </motion.div >
  );
}

export default App;
