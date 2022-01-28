import type { NextPage } from "next";
import StepUI from "../components/common-components/stepper";
import React, { useEffect, useState } from "react";

import UploadFile from "../components/common-components/uploadfile";
import TitleUpload from "../components/modules/registration/common/titleUpload";
import Footer from "../components/layout/footer";
import ButtonUI from "../components/common-components/button";
import PersistentDrawerLeft from "../components/layout/sidebar/sidebar";
<<<<<<< HEAD
import BasicTable from "../components/layout/header/DropDownList";
import BottomAppBar from "../components/layout/header/DropDownList";
import ButtonAppBar from "../components/layout/header/header";
=======
import AttachMents from "../components/modules/registration/attachments";
import Submission from "../components/layout/content/submission";
>>>>>>> 7fc94b68cea9929bde138c66d40c666f8f07168e
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
<<<<<<< HEAD
      
=======
      <Submission onClickBack={testFunction} onClickNext={testFunction} />
>>>>>>> 7fc94b68cea9929bde138c66d40c666f8f07168e
    </div>
  );
};

export default Home;
