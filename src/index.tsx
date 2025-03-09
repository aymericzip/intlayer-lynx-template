import { root } from "@lynx-js/react";

import { App } from "./App.js";
import { IntlayerProvider } from "react-intlayer";
import { intlayerPolyfill } from "lynx-intlayer";

intlayerPolyfill();

root.render(
  <IntlayerProvider>
    <App />
  </IntlayerProvider>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
