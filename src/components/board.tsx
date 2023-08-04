import { ScrollArea } from "@/components/ui/scroll-area";
import type { BoardColumns, ColumnData } from "@/typings/board-types";
import DraggableCard from "./draggable-card";
import {
  DragDropContext,
  type DropResult,
  Droppable,
  Draggable,
} from "react-beautiful-dnd";
import { getBoardState } from "@/utils/getBoardState";
import { useEffect, useState } from "react";

function Column({ data, index }: { data: ColumnData; index: number }) {
  return (
    <div className="bg-muted max-h-full basis-1/2 p-2">
      <div className="mb-2">
        <span>{data.status}</span>
      </div>
      <Draggable draggableId={data.id} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <ScrollArea className="max-h-full">
              <Droppable droppableId={index.toString()}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={`${
                      snapshot.isDraggingOver ? "bg-slate-200" : "bg-green"
                    } flex flex-col gap-2`}
                  >
                    {data.items.map((item) => {
                      return <DraggableCard cardData={item} key={item.title} />;
                    })}
                  </div>
                )}
              </Droppable>
            </ScrollArea>
          </div>
        )}
      </Draggable>
    </div>
  );
}

export default function Board() {
  const [boardState, setBoardState] = useState([] as ColumnData[]);

  useEffect(() => {
    const board = getBoardState();
    setBoardState(board);
  }, []);

  function handleOnDragEnd(result: DropResult) {
    return;
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-100 flex h-full gap-4 p-4"
          >
            {boardState.map((col, index) => {
              return <Column data={col} index={index} key={col.status} />;
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
