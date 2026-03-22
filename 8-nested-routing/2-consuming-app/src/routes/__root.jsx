import { Link, Outlet, createRootRoute, useLocation } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const location = useLocation()

  return (
    <fieldset>
      <legend>react: {location.pathname}</legend>

      <Link to="/">home</Link> &nbsp;|&nbsp;
      <Link to="/react-foo">foo</Link>&nbsp;|&nbsp;
      <Link to="/react-bar">bar</Link>
      <br />

      <Outlet />
    </fieldset>
  )
}
