import "./style.css";

import "smol-app-as-custom-element";

document.querySelector("#app").innerHTML = `
  A normal HTML page

  <embeddable-app></embeddable-app>

  content after
`;
