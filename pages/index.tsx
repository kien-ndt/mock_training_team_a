import type { NextPage } from "next";
import StepUI from "../components/common-components/stepper";

import Line from "../components/common-components/stepper/line";
import Element from "../components/modules/dashboard/common/element";

const Home: NextPage = () => {
  const aduvip = () => {
    console.log("adu");
  };
  return (
    <div>
      <Element
        image="https://images.unsplash.com/photo-1544306094-e2dcf9479da3"
        content="Assert Protection"
        onClick={aduvip}
      />

      <StepUI size="small" content="Section 5" disable={true} />
      <StepUI size="small" content="Section 1" />
      <StepUI type="number" size="small" content="Section 1" color="gray" />
      <Line />
      <StepUI type="number" size="small" content="Section 1=3" disable={true} />
    </div>
  );
};

export default Home;
