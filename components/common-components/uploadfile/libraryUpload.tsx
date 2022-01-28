import React from "react";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { Props } from "./libraryUpload.model";

const UploadTemplate: React.FC<Props> = ({ files, onChange, onDelete }) => {
  return (
    <Dropzone style={{ minWidth: "505px" }} onChange={onChange} value={files}>
      {files != null &&
        files.map((file) => (
          <FileItem {...file} onDelete={onDelete} key={file.id} info />
        ))}
    </Dropzone>
  );
};

export default UploadTemplate;
