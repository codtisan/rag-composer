import pdfLogo from "@/assets/pdf-file.png";
import Image from "next/image";
import React, { useState } from "react";

type UploadedFileMessageProps = {
  files: File[];
};

const UploadedFileMessage = ({ files }: UploadedFileMessageProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  return files.map((file: File, index: number) => {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }

    if (previewUrl) {
      return (
        <div key={index} className="w-max self-end">
          <Image
            src={previewUrl}
            alt="uploaded-image"
            width={300}
            height={300}
          />
        </div>
      );
    }

    return (
      <div key={index} className="w-max self-end flex border-[1px] rounded-2xl">
        <div className="size-full flex flex-row justify-center items-center gap-2 ml-2 mr-2">
          <Image src={pdfLogo} alt="pdf-file" width={35} height={35} />
          <div className="flex flex-col justify-center items-center">
            <div>{file.name}</div>
            <div className="text-[#A5A5A5]">
              {(file.size / 1024 / 1024).toFixed(1)} MB
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default React.memo(UploadedFileMessage);
