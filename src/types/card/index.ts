import { DispatchWithoutAction } from "react";

export type CardProps = {
  toggleIsEdit: DispatchWithoutAction;
  contentMarkdown: string;
};
