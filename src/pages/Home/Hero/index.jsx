import { FontSizes } from "src/global-styles";
import useMediaQuery from "src/hooks/useMediaQuery";
import Images from "src/assets/images";
import Button from "src/components/UI/Button";
import Heading from "src/components/UI/Heading";
import { Container, HeroContent, ImgContainer } from "./Hero.styled";
import { motion, MotionConfig } from "framer-motion";

const animation = {
  initial: { opacity: 0, y: "-20%" },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const animationContent = {
  initial: (i) => ({ opacity: 0, y: -10 * i }),
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.3 + 0.5 },
  }),
};

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <MotionConfig reducedMotion="user">
      <Container>
        <ImgContainer aria-hidden="true">
          <div>
            {isDesktop && <Images.component.BgIntroDesk />}
            <motion.img
              initial="initial"
              animate="animate"
              variants={animation}
              src={Images.file.mockups}
              alt=""
            />
          </div>
        </ImgContainer>
        <HeroContent as={motion.div} initial="initial" animate="animate">
          <Heading
            custom={0}
            variants={animationContent}
            as={motion.h1}
            $fontSize={FontSizes[700]}
          >
            Next generation digital banking
          </Heading>
          <motion.p custom={1} variants={animationContent}>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </motion.p>
          <Button.CallToAction
            custom={3}
            variants={animationContent}
            as={motion.button}
            type="button"
          >
            Request Invite
          </Button.CallToAction>
        </HeroContent>
      </Container>
    </MotionConfig>
  );
}
