import useMediaQuery from "src/hooks/useMediaQuery";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const navLinks = [
    { title: "Home", path: "#", current: true },
    { title: "About", path: "#" },
    { title: "Contact", path: "#" },
    { title: "Blog", path: "#" },
    { title: "Careers", path: "#" },
  ];
  if (isMobile) {
    return <NavbarMobile links={navLinks} />;
  }

  return <NavbarDesktop links={navLinks} />;
}
