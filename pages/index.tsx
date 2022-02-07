import type { NextPage } from "next";
import StepUI from "../components/common-components/stepper";
import React, { useEffect, useState } from "react";

import Stepper from "./registration/stepper";

import UploadFile from "../components/common-components/uploadfile";
import TitleUpload from "../components/modules/registration/common/titleUpload";
import Footer from "../components/layout/footer";
import ButtonUI from "../components/common-components/button";
import PersistentDrawerLeft from "../components/layout/sidebar/sidebar";
import ButtonAppBar from "../components/layout/header/header";
import AttachMents from "../components/modules/registration/attachments";
import Submission from "../components/layout/content/submission";

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

    </div>
  );
};

export default Home;
