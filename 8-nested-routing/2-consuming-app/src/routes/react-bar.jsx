import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/react-bar')({
  component: Bar,
})

function Bar() {
  return <div>
    bar in react
    <Outlet />
  </div>
}
