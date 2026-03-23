import EmberRouter from "@ember/routing/router";
import EmberApp from "ember-strict-application-resolver";
import Component from "@glimmer/component";
import { destroy } from "@ember/destroyable";
import { service } from "@ember/service";
import { LinkTo } from "@ember/routing";
import { bootApp } from "smol-app-to-be-nested-in-ember";
import { modifier } from "ember-modifier";

class EmbeddedApp extends Component {
  mount = modifier((element) => {
    let app = bootApp(element, { root: this.args.root });

    return () => destroy(app);
  });

  <template>
    <div {{this.mount}}></div>
  </template>
}

class Router extends EmberRouter {
  location = "history";
  rootURL = "/";
}

Router.map(function () {
  this.route("outer-foo", function () {
    this.route("nested", { path: "*fullPath" });
  });
  this.route("outer-bar", function () {
    this.route("nested", { path: "*fullPath" });
  });
  this.route("nested", { path: "*fullPath" });
});

class App extends EmberApp {
  modules = {
    "./router": Router,
    "./templates/application": class extends Component {
      @service router;

      get url() {
        return this.router.currentURL;
      }

      <template>
        <fieldset>
          <legend>ember: {{this.url}}</legend>

          <nav>
            <LinkTo @route="index">home</LinkTo>
            <LinkTo @route="outer-foo">foo</LinkTo>
            <LinkTo @route="outer-bar">bar</LinkTo>
          </nav>
          <main>
            {{outlet}}
          </main>
        </fieldset>
      </template>
    },
    "./templates/index": <template>home</template>,
    "./templates/outer-foo": <template>
      foo <EmbeddedApp @root="/outer-foo" />
    </template>,
    "./templates/outer-bar": <template>
      bar <EmbeddedApp @root="/outer-bar" />
    </template>,
  };
}

App.create({
  rootElement: document.body,
});
