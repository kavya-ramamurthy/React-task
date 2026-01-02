import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { UserPage } from "./UserPage";
import { mockUsers } from "../_mock_/users";

const mockRefetchUsers = vi.fn();

vi.mock("../hooks/useUsers", () => ({
  useUsers: () => ({
    users: mockUsers,
    loading: false,
    error: null,
    refetchUsers: mockRefetchUsers,
  }),
}));

describe("UserPage", () => {
  test("refresh button triggers refetchUsers", async () => {
    render(<UserPage />);

    const button = screen.getByRole("button", { name: /refresh/i });
    await userEvent.click(button);

    expect(mockRefetchUsers).toHaveBeenCalledTimes(1);
  });

  test("loads users from API", () => {
    render(<UserPage />);

    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/Jane/i)).toBeInTheDocument();
  });
});
