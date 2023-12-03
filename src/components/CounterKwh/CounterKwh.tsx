import { FC, useEffect, useState } from "react";
import scss from "./CounterKwh.module.scss";

const formatNumberWithDot = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const CounterKwh: FC = () => {
  const [electricity, setElectricity] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElectricity((prevElectricity) => prevElectricity + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <section className={scss.section}>
      <h2 className={scss.counter_title}>
        Electricity we produced for all time
      </h2>
      <hr className={scss.greenline} />
      <h3 className={scss.counter}>
        {formatNumberWithDot(electricity)} <span>kWh</span>
      </h3>
    </section>
  );
};

export default CounterKwh;
