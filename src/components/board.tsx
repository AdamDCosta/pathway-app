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
          className="max-h-full basis-1/2 bg-muted"
        >
          <div className="mb-2 flex h-[5%] justify-between p-2">
            <span className="font-semibold">{data.status}</span>
            <span className="h-5 w-5 flex justify-center items-center rounded-full bg-foreground p-1 text-background">
              {data.items.length}
            </span>
          </div>
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="h-[95%]"
              >
                <ScrollArea
                  className={`h-full p-2 ${
                    snapshot.isDraggingOver ? "bg-slate-600" : "bg-muted"
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
