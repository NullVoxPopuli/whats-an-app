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
    this.route("nested-foo");
    this.route("nested-bar");
  });

  class App extends EmberApp {
    modules = {
      "./router": Router,
      "./templates/application": class extends Component {
        @service router;

        get url() {
          return this.router.rootURL + this.router.currentURL;
        }

        <template>
          <fieldset>
            <legend>ember: {{this.url}}</legend>

            <nav>
              <LinkTo @route="index">home</LinkTo>
              <LinkTo @route="nested-foo">foo</LinkTo>
              <LinkTo @route="nested-bar">bar</LinkTo>
            </nav>
            <main>
              {{outlet}}
            </main>
          </fieldset>
        </template>
      },
      "./templates/index": <template>home</template>,
      "./templates/nested-foo": <template>foo</template>,
      "./templates/nested-bar": <template>bar</template>,
    };
  }

  return App.create({
    rootElement: element,
  });
}
