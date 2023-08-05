import { ScrollArea } from "@/components/ui/scroll-area";
import type { ColumnData } from "@/typings/board-types";
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
    <Draggable draggableId={data.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="max-h-full basis-1/2 bg-muted p-2"
        >
          <div className="mb-2 flex justify-between">
            <span className="font-semibold">{data.status}</span>
            <span className="rounded-full bg-foreground px-2 text-center text-background">
              {data.items.length}
            </span>
          </div>
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`max-h-100}`}
              >
                <ScrollArea>
                  <div
                    className={`flex flex-col space-y-2 ${
                      snapshot.isDraggingOver ? "bg-white" : "bg-muted"
                    }`}
                  >
                    {data.items.map((item, index) => {
                      return (
                        <Draggable
                          key={item.id}
                          index={index}
                          draggableId={item.id.toString()}
                        >
                          {(provided) => (
                            <DraggableCard
                              cardData={item}
                              key={item.title}
                              innerRef={provided.innerRef}
                              draggableProps={provided.draggableProps}
                              dragHandleProps={provided.dragHandleProps}
                            />
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                </ScrollArea>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
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
            className="w-100 grid h-full grid-cols-1 gap-4 p-4 md:grid-cols-3"
          >
            {boardState.map((col, index) => {
              return <Column data={col} index={index} key={col.id} />;
            })}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
