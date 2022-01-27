import type { NextPage } from "next";
import StepUI from "../components/common-components/stepper";
import React, { useEffect, useState } from "react";

import UploadFile from "../components/common-components/uploadfile";
import TitleUpload from "../components/modules/registration/common/title_upload";
import Footer from "../components/layout/footer";
import ButtonUI from "../components/common-components/button";

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
      <UploadFile
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
          setState(e.target.value)
        }
      />
      <TitleUpload content="1. title dsadsadasdasdasds" />
      <TitleUpload content="Section A" color="red" fontWeight="bold" />
      <Footer content="@coppyright by KienNT76" />
      <ButtonUI
        name="next"
        size="large"
        padding="15px"
        onClick={testFunction}
        boderRadius="20px"
      />
      <ButtonUI
        name="search"
        size="large"
        padding="15px"
        onClick={testFunction}
        boderRadius="20px"
      />
      <ButtonUI
        name="back"
        size="large"
        padding="15px"
        onClick={testFunction}
        boderRadius="20px"
      />
    </div>
  );
};

export default Home;
