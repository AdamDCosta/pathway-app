import type { ColumnData } from "@/typings/board-types";

const testBoardColumns = [
  {
    id: "todo-1",
    status: "Todo",
    items: [
      {
        id: 1,
        title: "<Team>-1",
        description: "Test Item 1",
        status: "Todo",
        priority: "high",
      },
      {
        id: 3,
        title: "<Team>-3",
        description: "Test Item 3",
        status: "Todo",
        priority: "low",
      },
      {
        id: 5,
        title: "<Team>-5",
        description: "Test Item 5",
        status: "Todo",
        priority: "low",
      },
      {
        id: 6,
        title: "<Team>-6",
        description: "Test Item 6",
        status: "Todo",
        priority: "low",
      },
    ],
  },
  {
    id: "in-progress-2",
    status: "In Progress",
    items: [
      {
        id: 2,
        title: "<Team>-2",
        description: "Test Item 2",
        status: "In Progress",
        priority: "medium",
      },
    ],
  },
  {
    id: "testing-3",
    status: "Testing",
    items: [
      {
        id: 4,
        title: "<Team>-4",
        description: "Test Item 4",
        status: "Testing",
        priority: "high",
      },
    ],
  },
] as ColumnData[];

export function getBoardState() {
  return testBoardColumns;
}
