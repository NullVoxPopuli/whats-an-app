import "./style.css";

import { bootApp } from "smol-app-embedded";

document.querySelector("#app").innerHTML = `
  A normal HTML page

  <div id="sub-app-here"></div>

  content after
`;

bootApp(document.querySelector("#sub-app-here"));
