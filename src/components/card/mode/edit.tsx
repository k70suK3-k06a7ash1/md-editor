import { FC } from "react";
import { CardProps } from "../../../types/card/index";

export const EditMode: FC<CardProps> = ({ toggleIsEdit, contentMarkdown }) => {
  return (
    <div>
      <button
        onClick={() => {
          toggleIsEdit();
        }}
      >
        Save
      </button>
      <div>
        <textarea defaultValue={contentMarkdown} />
      </div>
    </div>
  );
};
