import { ScrollArea } from "@/components/ui/scroll-area";
import { BoardColumn } from "@/typings/board-types";
import type { BoardItem, BoardColumns } from "@/typings/board-types";
import DraggableCard from "./draggable-card";

const testBoardItem: BoardItem = {
  title: "<Team>-1",
  description: "Test Item 1",
  status: "Todo",
  priority: "high",
};

function BoardColumn({ title }: { title: BoardColumn }) {
  return (
    <div className="bg-muted h-full basis-1/2 p-2">
      <div className="mb-2">
        <span>{title}</span>
      </div>
      <ScrollArea>
        {testBoardItem.status === title && (
          <DraggableCard cardDetails={testBoardItem} />
        )}
      </ScrollArea>
    </div>
  );
}

export default function Board() {
  const columns = ["Todo", "In Progress", "Testing"] as BoardColumns;

  return (
    <section className="w-100 flex h-full gap-4 p-4">
      {columns.map((col) => {
        return <BoardColumn title={col} key={col} />;
      })}
    </section>
  );
}
