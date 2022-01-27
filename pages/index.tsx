import type { NextPage } from "next";
import StepUI from "../components/common-components/stepper";
import React, { useEffect, useState } from "react";

import UploadFile from "../components/common-components/uploadfile";
import TitleUpload from "../components/modules/registration/common/title_upload";

const Home: NextPage = () => {
  const [state, setState] = useState("");
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <UploadFile
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState(e.target.value)
        }
      />
      <TitleUpload content="1. title dsadsadasdasdasds" />
    </div>
  );
};

export default Home;
