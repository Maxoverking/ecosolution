import "./App.module.scss";
import Cases from "./components/Cases/Cases";
import CustomizedAccordions from "./components/Accordion/Accordion";
import ContactUs from "./components/ContactUs/ContactUs";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CounterKwh from "./components/CounterKwh/CounterKwh";
import Footer from "./components/Footer/Footer";
import MainValue from "./components/MainValue/MainValue";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <MainValue />
        <CounterKwh />
        <Cases />
        <CustomizedAccordions />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default App;
