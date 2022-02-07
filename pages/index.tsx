import type { NextPage } from "next";
import StepUI from "../components/common-components/stepper";
import React, { useEffect, useState } from "react";

import AttachMents from "../components/modules/registration/attachments";
import Submission from "../components/layout/content/submission";
import Stepper from "./registration/stepper";

const Home: NextPage = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    console.log(state);
  }, [state]);

  const testFunction = () => {
    console.log("kiennt");
  };

  return (
    <div>
      <Stepper step="attachments" />
    </div>
  );
};

export default Home;
