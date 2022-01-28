import type { NextPage } from "next";
import StepUI from "../components/common-components/stepper";
import React, { useEffect, useState } from "react";

import UploadFile from "../components/common-components/uploadfile";
import TitleUpload from "../components/modules/registration/common/titleUpload";
import Footer from "../components/layout/footer";
import ButtonUI from "../components/common-components/button";
import PersistentDrawerLeft from "../components/layout/sidebar/sidebar";
import AttachMents from "../components/modules/registration/attachments";
import Submission from "../components/modules/registration/submission";
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
      <AttachMents
        title="1. Company's last signed audited fanacial statement"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState(e.target.value)
        }
      />
      <AttachMents
        title="1. Company's last signed audited fanacial statement"
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState(e.target.value)
        }
      />
      <Submission onClickBack={testFunction} onClickNext={testFunction} />
    </div>
  );
};

export default Home;
