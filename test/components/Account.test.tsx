import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Account from "../../src/pages/Account";
import { MemoryRouter } from "react-router-dom";

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

describe("Account", () => {
  it("should render an account page with marchant details.", () => {
    render(
      <MemoryRouter>
        <Account />
      </MemoryRouter>
    );
    expect(screen.getByText("Welcome Raphael")).toBeInTheDocument();
  });
});
