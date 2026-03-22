import {
  isRouteErrorResponse,
  Links,
  Link,
  Meta,
  Outlet,
  useLocation,
} from "react-router";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function HydrateFallback() {
  return <>...</>;
}

export function Layout({ children }) {
  let location = useLocation()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
      <fieldset>
        <legend>react: {location.pathname}</legend>

        <Link to={{ pathname: "/" }}>home</Link> &nbsp;|&nbsp;
        <Link to={{ pathname: "/react-foo" }}>foo</Link>&nbsp;|&nbsp;
        <Link to={{ pathname: "/react-bar" }}>bar</Link>
        <br />


        {children}

      </fieldset>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

