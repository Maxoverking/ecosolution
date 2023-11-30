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
import {
  Accordion_Container,
  BUTTON,
  DIV_QUESTION,
  H2,
  ICON,
  SPAN,
} from "./Accordion.styled";

interface CustomAccordionSummaryProps extends AccordionSummaryProps {
  expanded: boolean;
}
const CustomAccordion = styled((props: MuiAccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `1px solid #97d28b`,
  borderRight: 0,
  borderLeft: 0,

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
        <span style={{ color: "#97d28b", fontSize: "30px", display: "flex" }}>
          {expanded ? (
            <FaMinus style={{ color: "#173D33" }} />
          ) : (
            <GoPlus size="30px" />
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
    <Accordion_Container>
      <div>
        <H2>Frequently Asked Questions</H2>

        <div>
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
                <p>{question}</p>
              </CustomAccordionSummary>
              <CustomAccordionDetails>
                <p>
                  Wind turbines and solar panels generate electricity through
                  different mechanisms. Wind turbines harness the kinetic energy
                  of the wind to turn blades, which then drive a generator.
                  Solar panels convert sunlight into electricity through the
                  photovoltaic effect. When integrated into a renewable energy
                  system, these technologies complement each other by providing
                  a continuous and reliable power supply. Wind power is often
                  more abundant during certain times, while solar power is
                  consistent during daylight hours, resulting in a more stable
                  overall energy output.
                </p>
              </CustomAccordionDetails>
            </CustomAccordion>
          ))}
        </div>
        <DIV_QUESTION>
          <SPAN>Didn't find the answer to your question? </SPAN>
          <BUTTON type="button">
            Contact Us <ICON />
          </BUTTON>
        </DIV_QUESTION>
      </div>
    </Accordion_Container>
  );
};

export default CustomizedAccordions;
