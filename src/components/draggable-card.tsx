import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { BoardItem } from "@/typings/board-types";

export default function DraggableCard({
  cardData,
}: {
  cardData: BoardItem;
}) {
  const { title, description, status, priority } = cardData;

  return (
    <Card className="bg-muted flex flex-col gap-2 rounded-md p-2 shadow-sm cursor-pointer">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <p>Card Content</p>
      </CardContent> */}
      <CardFooter>
        <p>{priority}</p>
      </CardFooter>
    </Card>
  );
}
