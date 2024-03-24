import { motion } from "framer-motion";
import useMediaQuery from "src/hooks/useMediaQuery";
import { HeroSectionStyled } from "./Hero.styled";
import mockups from "src/assets/images/image-mockups.png";
import BgIntroDesk from "src/assets/images/BgIntroDesk";
import { CallToActionBtnStyled } from "src/components/Buttons/CallToAction";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <HeroSectionStyled id="hero">
      <div className="hero__bg-img" aria-hidden="true">
        <motion.img
          initial={{ y: "-30%" }}
          animate={{ y: "0" }}
          transition={{ duration: 0.7 }}
          src={mockups}
        />
        {isDesktop && (
          <div className="hero__bg-img__desktop">
            <BgIntroDesk />
          </div>
        )}
      </div>
      <div className="hero__content">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="hero__call-action">
          <CallToActionBtnStyled>Request Invite</CallToActionBtnStyled>
        </div>
      </div>
    </HeroSectionStyled>
  );
}
