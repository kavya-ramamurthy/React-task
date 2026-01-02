import { render, screen } from "@testing-library/react"

import { mockUsers } from "../_mock_/users"
import { UserList } from "./UserList"



//test1 - component rendering

test("renders list of users", ()=>{
    render (<UserList users= {mockUsers}/>)
    
  

const items = screen.getAllByRole("listitem")

  expect(items[0]).toHaveTextContent("John")
  expect(items[0]).toHaveTextContent("Doe")

  expect(items[1]).toHaveTextContent("Jane")
  expect(items[1]).toHaveTextContent("Smith")

    
})

// test2- component renders 

test("renders correct number of list items", () => {
  render(<UserList users={mockUsers} />)

  const items = screen.getAllByRole("listitem")
  expect(items).toHaveLength(mockUsers.length)
})
