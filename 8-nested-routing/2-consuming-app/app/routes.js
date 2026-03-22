import { index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("react-foo", "routes/react-foo.jsx"),
  route("react-bar", "routes/react-bar.jsx"),
];
