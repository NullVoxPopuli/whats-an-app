import { renderComponent } from "@ember/renderer";
import { trackedObject } from "@ember/reactive/collections";

const state = trackedObject({
  value: 0,
  inc: () => state.value++,
});

renderComponent(
  <template>
    <output>{{state.value}}</output>
    <br />
    <button onclick={{state.inc}}>increment</button>
  </template>,
  {
    into: document.body,
  },
);
