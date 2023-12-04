import "./App.module.scss";
// import CustomizedAccordions from "./components/Accordion/Accordion";
import ContactUs from "./components/ContactUs/ContactUs";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CounterKwh from "./components/CounterKwh/CounterKwh";
import Footer from "./components/Footer/Footer";
import MainValue from "./components/MainValue/MainValue";
// import Slider from "./components/Slider/Slider";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <MainValue />
        <CounterKwh />
        {/* <Slider /> */}
        {/* <CustomizedAccordions /> */}
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;
