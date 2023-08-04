import { ScrollArea } from "@/components/ui/scroll-area";

type BoardColumns = ["Todo", "In Progress", "Testing"];
type BoardColumn = BoardColumns[number];

function BoardColumn({ title }: { title: BoardColumn }) {
  return (
    <div className="bg-muted h-full basis-1/2 p-2">
      <div>
        <span>{title}</span>
      </div>
      <ScrollArea>
        <div></div>
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
