import { FC, ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImport } from "@fortawesome/free-solid-svg-icons";

type Props = {
  children: ReactNode;
};

export const FrameComponent: FC<Props> = ({ children }) => {
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files);
  };

  return (
    <>
      <i>
        <input type="file" accept=".md" onChange={onFileInputChange} />
        <FontAwesomeIcon icon={faFileImport} />
      </i>
      {children}
    </>
  );
};
