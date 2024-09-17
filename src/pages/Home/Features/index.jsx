import Card from "src/components/UI/Card";
import Heading from "src/components/UI/Heading";
import Section from "src/components/UI/Section";
import { FontSizes, NEUTRAL_COLORS } from "src/global-styles";
import { featuresData } from "./features";
import { motion } from "framer-motion";
import useMediaQuery from "src/hooks/useMediaQuery";

const featureContainer = `
display: grid;
place-items: center;
gap: 2.5rem;

@media screen and (min-width: 550px){
  grid-template-columns: repeat(2, 1fr);
  place-items: start center;
  gap: 2rem;
}

  @media screen and (min-width: 1024px){
    grid-template-columns: repeat(${featuresData.length}, 1fr);
  }
`;

const textAnimation = {
  initial: { x: "-5%", opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeIn", duration: 0.5 },
  },
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const listContainerTransition = {
  duration: 0.5,
  delayChildren: 1,
  staggerChildren: 0.5,
};

export default function FeaturesSection() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const cardContainerAnimation = isDesktop && {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true },
  };
  const cardMobileAnimation = !isDesktop && {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true, amount: 0.7 },
  };

  return (
    <Section.Root $bgColor={NEUTRAL_COLORS.lightGrayBlue}>
      <Section.Header
        as={motion.header}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: "all" }}
        transition={{ staggerChildren: 0.3 }}
      >
        <Heading
          as={motion.h2}
          variants={textAnimation}
          $fontSize={FontSizes[600]}
        >
          Why choose Easybank?
        </Heading>
        <motion.p variants={textAnimation}>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before
        </motion.p>
      </Section.Header>

      <Section.Body
        $styles={featureContainer}
        as={motion.div}
        {...cardContainerAnimation}
        transition={listContainerTransition}
      >
        {featuresData.map((feature) => (
          <Card.Root
            key={feature.id}
            as={motion.div}
            {...cardMobileAnimation}
            variants={cardAnimation}
          >
            <Card.Icon>
              <img src={feature.icon} alt="" />
            </Card.Icon>
            <Card.Title $fontSize={FontSizes[500]}> {feature.title}</Card.Title>
            <Card.Text>{feature.description}</Card.Text>
          </Card.Root>
        ))}
      </Section.Body>
    </Section.Root>
  );
}
