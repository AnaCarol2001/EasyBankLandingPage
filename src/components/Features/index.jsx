import { useState } from "react";
import { motion } from "framer-motion";
import { featuresData } from "src/data/features";
import {
  FeaturesItemsContainer,
  FeaturesSectionStyled,
} from "./FeaturesSection.styled";

const variants = {
  hidden: {
    opacity: 0,
    x: "-20%",
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: { type: "circIn" },
  },
};

export default function Features() {
  const [features] = useState(featuresData);
  return (
    <FeaturesSectionStyled id="features">
      <div className="features__text">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </p>
      </div>
      <FeaturesItemsContainer
        id="features__items"
        as={motion.div}
        transition={{ staggerChildren: 0.7 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature) => (
          <motion.div variants={variants} key={feature.id}>
            <img src={feature.icon} alt={feature.title} aria-hidden="true" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </FeaturesItemsContainer>
    </FeaturesSectionStyled>
  );
}
