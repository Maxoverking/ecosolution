import React from "react";
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

const CustomAccordionSummary = styled((props: CustomAccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <span style={{ color: "#97d28b", fontSize: "1.5rem", display: "flex" }}>
        {props.expanded ? <FaMinus style={{ color: "#173D33" }} /> : <GoPlus />}
      </span>
    }
    {...props}
  />
))(({ theme }) => ({
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

const CustomizedAccordions: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(
    accordionObj[0].id
  );

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
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
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          </CustomAccordionDetails>
        </CustomAccordion>
      ))}
    </div>
  );
};

export default CustomizedAccordions;
