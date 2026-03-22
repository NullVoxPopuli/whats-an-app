import "./style.css";

import "smolest-as-custom-element";

document.querySelector("#app").innerHTML = `
  A normal HTML page

  <embeddable-app></embeddable-app>

  content after
`;
