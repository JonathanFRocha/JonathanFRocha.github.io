import React from "react";
import Box from "./Box";
import { motion } from "framer-motion";

const AboutMeCard = ({ isVisible }) => {
  return (
    <Box>
      <motion.div drag="x" dragConstraints={{ left: -100, right: 100 }}>
        <h2>I'm someone who loves coding</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis aliquam
          architecto quas voluptatem perspiciatis, nobis vitae, consectetur earum similique quam id
          sapiente ducimus ratione harum dignissimos illum vel nihil!
        </p>
      </motion.div>
    </Box>
  );
};

export default AboutMeCard;
