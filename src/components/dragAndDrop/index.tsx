import React, { FC, useRef, useState } from "react";
import { splitByTag } from "../../libs/splitByTag";
import { Card } from "../card/index";
import { ContentType } from "../../types/ContentType";
import { makeBeNamedList } from "../../libs/feature/dragAndDrop/makeBeNamedList";

type Props = {
  contents: string;
};

type PositionObject = {
  primaryKey: string | null;
};

export const useDragComponents = ({ contents }: Props) => {

  const beNamedList = makeBeNamedList(contents)
  const [dragList, setDragList] = useState<ContentType[]>(beNamedList);

  const setItems = (contents: string) => {

    const beNamedList = makeBeNamedList(contents)

    setDragList(beNamedList);
  };

  const updateDragList = (content: ContentType) => {
    dragList[content.id] = content;
    setDragList([...dragList]);
  };

  const draggingObjectState = useRef<PositionObject>({
    primaryKey: null,
  });
  const beDraggedObjectState = useRef<PositionObject>({
    primaryKey: null,
  });
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    beDraggedObjectState.current.primaryKey =
      event.currentTarget.getAttribute("primary-key");
  };
  const handleDragStart = (event: React.DragEvent) => {
    draggingObjectState.current.primaryKey =
      event.currentTarget.getAttribute("primary-key");
  };

  const replaceArrayElements = (
    array: ContentType[],
    replaceIndex: number,
    beReplacedIndex: number
  ) => {
    return array.reduce(
      (resultArray: ContentType[], element, index, originalArray) => [
        ...resultArray,
        index === replaceIndex
          ? originalArray[beReplacedIndex]
          : index === beReplacedIndex
            ? originalArray[replaceIndex]
            : element,
      ],
      []
    );
  };

  const handleDrop = (event: React.DragEvent) => {
    const hoveredElementPrimaryKey: string | null =
      event.currentTarget.getAttribute("primary-key");
    const draggingElementPrimaryKey: string | null =
      draggingObjectState.current.primaryKey;
    const hoveredElementIndex: number = dragList.findIndex(
      (contentObject: ContentType) => {
        return contentObject.id == Number(hoveredElementPrimaryKey);
      }
    );
    const draggingElementIndex = dragList.findIndex(
      (contentObject: ContentType) => {
        return contentObject.id == Number(draggingElementPrimaryKey);
      }
    );
    const replaceList = replaceArrayElements(
      dragList,
      hoveredElementIndex,
      draggingElementIndex
    );
    setDragList(replaceList);
  };

  const DragAndDropArea: FC = () => (
    <>
      {dragList?.map((contentObject) => {
        console.log("! " + contentObject);
        return (
          <div
            primary-key={contentObject.id}
            className="DragItem"
            key={contentObject.id}
            draggable={true}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
          >
            <Card content={contentObject} updateDragList={updateDragList} />
          </div>
        );
      })}
    </>
  );

  return { DragAndDropArea, setItems };
};
