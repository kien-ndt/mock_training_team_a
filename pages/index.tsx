import type { NextPage } from "next";
import StepUI from "../components/common-components/stepper";

import Line from "../components/common-components/stepper/line";
import Element from "../components/modules/dashboard/common/element";

const Home: NextPage = () => {
  return (
    <div>
      <Element />
      <StepUI size="small" content="Section 5" />
      <StepUI size="small" content="Section 1" />
      <StepUI type="number" size="small" content="Section 1" color="gray" />
      <Line />
      <StepUI type="number" size="small" content="Section 1=3" />
    </div>
  );
};

export default Home;
