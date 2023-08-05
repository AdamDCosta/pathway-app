"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BoardItem } from "@/typings/board-types";
import {
  type DraggableProvidedDragHandleProps,
  type DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

export default function DraggableCard({
  cardData,
  innerRef,
  draggableProps,
  dragHandleProps,
}: {
  cardData: BoardItem;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}) {
  const { title, description, status, priority } = cardData;

  return (
    <Card
      className="flex cursor-pointer flex-col gap-1 rounded-md bg-muted shadow-sm"
      {...draggableProps}
      {...dragHandleProps}
      ref={innerRef}
    >
      <CardHeader className="p-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter className="p-2">
        <p>
          {priority} | {status}
        </p>
      </CardFooter>
    </Card>
  );
}
