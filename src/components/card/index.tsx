import { FC, useReducer } from "react";
import ReactMarkdown from "react-markdown";

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
        <div>
          <button
            onClick={() => {
              toggleIsEdit();
            }}
          >
            Edit
          </button>
          <div>
            <textarea>{contentMarkdown}</textarea>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              toggleIsEdit();
            }}
          >
            Edit
          </button>
          <ReactMarkdown children={contentMarkdown} />
        </div>
      )}
    </>
  );
};
