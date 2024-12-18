import { motion } from "framer-motion";

const MainSection = () => {
  return (
    <motion.div
      className="h-[40%] max-h-[40%] flex items-center flex-col text-balance py-[10px] px-5 mt-[10px] md:mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
    >
      <h3 className="font-heading text-xl lg:text-2xl text-accent border-b-2 border-b-accent pb-2 w-[60%] lg:w-[30%] text-center">
        Welcome to Terrapical
      </h3>
      <p className="font-body text-base lg:text-lg text-text text-justify mt-3 md:mt-5">
        Dive into the lush world of tropical plants with Terrapical. Learn how to care for exotic greenery, discover the best places to find them, and master the art of creating your own terrariums. Whether you're a seasoned plant parent or just starting out, we've got everything you need to nurture your green passion.
      </p>
      <button className="rounded-md bg-secondary text-accent font-heading text-base md:text-lg py-3 px-5 mt-5 hover:text-secondary hover:bg-accent focus:text-secondary focus:bg-accent transition-all duration-300">
        Explore
      </button>
    </motion.div>
  );
};

export default MainSection;
