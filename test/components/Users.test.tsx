import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Users from "../../src/pages/Users";

interface BaseTableProps {
  tableRows: any[][];
  headers?: string[];
  showPagination?: boolean;
}

const transactionsMockTableRows = [
  [
    { hascheck: true, haspicture: false, name: "Musa Ahmed" },
    "Musaa@email.com",
    "08164493471",
    "30 Mar, 2024",
    "Kaduna",
  ],
];

vi.mock("../../src/components/ui/layout/dashboard/DashboardArea", () => ({
  DashboardArea: ({
    children,
    title,
  }: {
    children: React.ReactNode;
    title: string;
  }) => (
    <div>
      <h1>{title}</h1>
      <h1>{children}</h1>
    </div>
  ),
}));

vi.mock("../../src/components/table/BaseTable", () => ({
  BaseTable: ({ tableRows }: BaseTableProps) => (
    <div>
      {tableRows.flat().map((cell, index) => (
        <div key={index}>
          {typeof cell === "object" && cell !== null
            ? cell.name || JSON.stringify(cell)
            : cell.toString()}
        </div>
      ))}
    </div>
  ),
}));

describe("Users", () => {
  it("it should render User Page with Base Table", () => {
    render(<Users />);
    screen.debug();

    expect(screen.getByText("Welcome Raphael")).toBeInTheDocument();

    transactionsMockTableRows.flat().forEach((cell) => {
      if (typeof cell === "object" && cell !== null) {
        expect(
          screen.getByText(cell.name || JSON.stringify(cell))
        ).toBeInTheDocument();
      } else {
        expect(screen.getByText(cell.toString())).toBeInTheDocument();
      }
    });
  });
});
