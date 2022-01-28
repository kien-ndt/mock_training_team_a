import type { NextPage } from "next";
import StepUI from "../components/common-components/stepper";

import Line from "../components/common-components/stepper/line";
import Element from "../components/modules/dashboard/common/element";
import TitleUpload from "../components/modules/registration/common/title_upload";
import Title from "../components/layout/content/Title";
import StepTitle from "../components/modules/registration/common/step_title/StepTitle";
import PersistentDrawerLeft from "../components/layout/sidebar/sidebar";
import IconButtons from "../components/layout/header/ButtonHeader";


const Home: NextPage = () => {
  const aduvip = () => {
    console.log("adu");
  };
  return (
    <div>
      {/* <Element
        image="https://images.unsplash.com/photo-1544306094-e2dcf9479da3"
        content="Assert Protection"
        onClick={aduvip}
      />
      <TitleUpload content="1. Title upload file" />

      <StepUI size="small" content="Section 5" disable={true} />
      <StepUI size="small" content="Section 1" />
      <StepUI type="number" size="small" content="Section 1" color="gray" />
      <Line />
      <StepUI type="number" size="small" content="Section 1=3" disable={true} /> */}

      <Title message="Registration"/>
      <Title message="Darkboard"/>
      <StepTitle step = {1} title ={"Company information"}/>
      <StepTitle step = {2} title ={"submission"}/>
      <StepTitle step = {3} title ={"upload the following documents"}/>
      <PersistentDrawerLeft/>
      {/* <IconButtons acc={"DeleteIcon"} size="small"/> */}
      <IconButtons/>
    </div>
  );
};

export default Home;
