import EmberRouter from "@ember/routing/router";
import EmberApp from "ember-strict-application-resolver";
import Component from "@glimmer/component";
import { service } from "@ember/service";
import { LinkTo } from "@ember/routing";

export function bootApp(element, { root = "/" }) {
  class Router extends EmberRouter {
    location = "history";
    rootURL = root;
  }

  Router.map(function () {
    this.route("foo");
    this.route("bar");
  });

  class App extends EmberApp {
    modules = {
      "./router": Router,
      "./templates/application": class extends Component {
        @service router;
        <template>
          <fieldset>
            <legend>ember: {{this.router.currentURL}}</legend>

            <nav>
              <LinkTo @route="index">home</LinkTo>
              <LinkTo @route="foo">foo</LinkTo>
              <LinkTo @route="bar">bar</LinkTo>
            </nav>
            <main>
              {{outlet}}
            </main>
          </fieldset>
        </template>
      },
      "./templates/index": <template>home</template>,
      "./templates/foo": <template>foo</template>,
      "./templates/bar": <template>bar</template>,
    };
  }

  return App.create({
    rootElement: element,
  });
}
