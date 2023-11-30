import "./App.module.css";
import CustomizedAccordions from "./components/Accordion/Accordion";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <h1>Eco</h1>
        <CustomizedAccordions />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;
