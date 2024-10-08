import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Home from "../../src/pages/Home";

interface BaseTableProps {
  tableRows: any[][];
  headers?: string[];
  showPagination?: boolean;
}

const transactionsMockTableRows = [
  [
    { hasAvatar: false, statusText: "", img: "", name: "Yam" },
    "Cerels",
    "₦12,2200",
    "31 Mar, 2024",
    "Buha",
    "10 bags",
    { isStatus: true, statusText: "In stock" },
  ],
  [
    { hasAvatar: false, statusText: "", img: "", name: "Maize" },
    "Grains",
    "₦12,900",
    "30 Mar, 2024",
    "Buhari",
    "5 bags",
    { isStatus: false, statusText: "No stock" },
  ],
];

// Mock child components
vi.mock("../../src/components/charts/line-chart", () => ({
  LineChartDemo: () => <div>LineChartDemo</div>,
}));

vi.mock("../../src/components/charts/Doughnut", () => ({
  DoughnutChartDemo: () => <div>DoughnutChartDemo</div>,
}));

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
      <div>{children}</div>
    </div>
  ),
}));

vi.mock("../../src/components/grouped-components/dashboard-card-row", () => ({
  DashboardCardRow: () => <div>DashboardCardRow</div>,
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

describe("Home", () => {
  it("renders Home component with dashboard and charts", () => {
    render(<Home />);
    screen.debug();

    // Check if the welcome message is displayed
    expect(screen.getByText("Welcome Raphael")).toBeInTheDocument();

    // Check if the DashboardCardRow is rendered
    expect(screen.getByText("DashboardCardRow")).toBeInTheDocument();

    // Check if the LineChartDemo is rendered
    expect(screen.getByText("LineChartDemo")).toBeInTheDocument();

    // Check if the DoughnutChartDemo is rendered
    expect(screen.getByText("DoughnutChartDemo")).toBeInTheDocument();

    // Check if the Stock Report header is displayed
    expect(screen.getByText("Stock Report")).toBeInTheDocument();

    // Check if the BaseTable is rendered
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
