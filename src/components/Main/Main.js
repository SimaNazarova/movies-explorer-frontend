import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";
import Tech from "../Tech/Tech";
import AboutMe from "../AboutMe/AboutMe";

function Main() {
  return (
    <>
      <Header color="violet" navbar="violet" />
      <Promo />
      <NavTab />
      <AboutProject />
      <Tech />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Main;
