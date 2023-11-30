import "./App.module.css";
import CustomizedAccordions from "./components/Accordion/Accordion";
import ContactUs from "./components/ContactUs/ContactUs";

const App = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <h1>Eco</h1>
        <CustomizedAccordions />
        <ContactUs />
      </div>
    </>
  );
};

export default App;
