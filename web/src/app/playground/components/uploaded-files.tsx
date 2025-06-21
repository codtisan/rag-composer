import pdfLogo from "@/assets/pdf-file.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type UploadedFileMessageProps = {
  file: File;
  size?: number;
  documentWidth?: "max" | "50%";
};

const UploadedFileMessage = ({
  file,
  size = 300,
  documentWidth = "50%",
}: UploadedFileMessageProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  if (file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = (event) => {
      setPreviewUrl(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  }

  if (previewUrl && file.type.startsWith("image/")) {
    return (
      <div className="w-max self-end">
        <Zoom>
          <Image
            className="rounded-lg"
            src={previewUrl}
            alt="uploaded-image"
            width={size}
            height={size}
          />
        </Zoom>
      </div>
    );
  }

  if (file.type === "application/pdf") {
    return (
      <div
        className={cn(
          `w-[${documentWidth}] self-end flex border-[1px] rounded-2xl`,
        )}
      >
        <div className="size-full flex flex-row justify-center items-center gap-2 pl-2 pr-2">
          <Image src={pdfLogo} alt="pdf-file" width={50} height={50} />
          <div className="flex flex-col justify-center items-center truncate">
            <div>{file.name}</div>
            <div className="text-[#A5A5A5]">
              {(file.size / 1024 / 1024).toFixed(1)} MB
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default React.memo(UploadedFileMessage);
