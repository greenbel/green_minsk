// Support component names relative to this directory:
var componentRequireContext = require.context("components", true);
var ReactRailsUJS = require("react_ujs");
ReactRailsUJS.useContext(componentRequireContext);

import WelcomePage from 'components/welcome/index';

Turbolinks.start();
BindJqueryAjaxRedirect();

WebpackerReact.setup({
    WelcomePage
});
