import { FC, SyntheticEvent, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion, {
  AccordionProps as MuiAccordionProps,
} from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { GoPlus } from "react-icons/go";
import { FaMinus } from "react-icons/fa6";
import { accordionObj } from "./accordionObj";
import scss from "./Accordion.module.scss";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

interface CustomAccordionSummaryProps extends AccordionSummaryProps {
  expanded: boolean;
}
const CustomAccordion = styled((props: MuiAccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `1px solid #97d28b`,
  borderRight: 0,
  borderLeft: 0,
  backgroundColor: "#f3f5fa",

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const CustomAccordionSummary = styled(
  ({ expanded, ...props }: CustomAccordionSummaryProps) => (
    <MuiAccordionSummary
      expandIcon={
        <span style={{ color: "#97d28b", fontSize: "16px", display: "flex" }}>
          {expanded ? (
            <FaMinus style={{ color: "#173D33" }} />
          ) : (
            <GoPlus size="16px" />
          )}
        </span>
      }
      {...props}
    />
  )
)(({ theme }) => ({
  padding: theme.spacing(0),
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const CustomAccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  paddingBottom: theme.spacing(2),
}));

const CustomizedAccordions: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(accordionObj[0].id);

  const handleChange =
    (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <section className={scss.section_accordion} id="faq">
      <h2 className={scss.title}>Frequently Asked Questions</h2>

      <div className={scss.accordion}>
        {accordionObj.map(({ id, question }) => (
          <CustomAccordion
            key={id}
            expanded={expanded === id}
            onChange={handleChange(id)}
          >
            <CustomAccordionSummary
              aria-controls={`panel${id}d-content`}
              id={`${id}d-header`}
              expanded={expanded === id}
            >
              <p className={scss.accordion_title}>{question}</p>
            </CustomAccordionSummary>
            <CustomAccordionDetails>
              <p className={scss.accordion_description}>
                Wind turbines and solar panels generate electricity through
                different mechanisms. Wind turbines harness the kinetic energy
                of the wind to turn blades, which then drive a generator. Solar
                panels convert sunlight into electricity through the
                photovoltaic effect. When integrated into a renewable energy
                system, these technologies complement each other by providing a
                continuous and reliable power supply. Wind power is often more
                abundant during certain times, while solar power is consistent
                during daylight hours, resulting in a more stable overall energy
                output.
              </p>
            </CustomAccordionDetails>
          </CustomAccordion>
        ))}
      </div>
      <div className={scss.question}>
        <div>
          {" "}
          <h2 className={scss.title_tablet}>Frequently Asked Questions</h2>
        </div>
        <div>
          <span className={scss.question_title}>
            Didn't find the answer to your question?{" "}
          </span>
          <div className={scss.btn_wrap}>
            <a
              href="#contact"
              className={scss.learn_btn}
              aria-label="contact us"
            >
              Contact Us
              <span className={scss.arrow_btn}>
                <BsFillArrowDownCircleFill size={16} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizedAccordions;
