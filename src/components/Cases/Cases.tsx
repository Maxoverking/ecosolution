import scss from "./Cases.module.scss";
import SliderContainer from "./sliderComponents/SliderContainer/SliderContainer";

const Cases = () => {
  return (
    <section className={scss.section_cases} id="cases">
      <SliderContainer />
    </section>
  );
};

export default Cases;
