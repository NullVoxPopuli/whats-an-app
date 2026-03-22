import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/react-foo')({
  component: Foo,
})

function Foo() {
  return <div>
    foo in react
    <Outlet />
  </div>
}
