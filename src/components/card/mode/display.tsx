import { FC } from "react";
import { CardProps } from "../../../types/card/index";
import ReactMarkdown from "react-markdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

export const DisplayMode: FC<CardProps> = ({
  toggleIsEdit,
  contentMarkdown,
}) => {
  return (
    <div>
      <i
        onClick={() => {
          toggleIsEdit();
        }}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </i>

      <ReactMarkdown children={contentMarkdown} />
    </div>
  );
};
