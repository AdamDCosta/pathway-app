export type BoardItem = {
  id: number, 
  title: string,
  description: string,
  status: BoardColumn,
  priority: Priority,
};

export const Priorities = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low"
} as const;

export type Priority = (typeof Priorities)[keyof typeof Priorities]

export type BoardColumns = ["Todo", "In Progress", "Testing"];
export type BoardColumn = BoardColumns[number];

export type ColumnData = {
  id: string
  status: BoardColumn;
  items: BoardItem[];
};