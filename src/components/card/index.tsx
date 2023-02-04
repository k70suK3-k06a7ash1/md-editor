import { FC, useReducer } from "react";
import { EditMode } from "./mode/edit";
import { DisplayMode } from "./mode/display";
type Props = {
  contentMarkdown: string;
};

export const Card: FC<Props> = ({ contentMarkdown }) => {
  const [isEdit, toggleIsEdit] = useReducer((state) => {
    return !state;
  }, false);

  return (
    <>
      {isEdit ? (
        //   Edit Mode
        <EditMode
          toggleIsEdit={toggleIsEdit}
          contentMarkdown={contentMarkdown}
        />
      ) : (
        // diplay Mode
        <DisplayMode
          toggleIsEdit={toggleIsEdit}
          contentMarkdown={contentMarkdown}
        />
      )}
    </>
  );
};
