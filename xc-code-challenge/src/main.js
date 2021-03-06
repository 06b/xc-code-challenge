import "@/css/_settings/xc-code-challenge.css";
import "@/css/base/normalize.css";
import "@/css/base/base.css";
import "@/css/base/typography.css";
import "@/css/objects/navigation.css";
import "@/css/theme/xc-code-challenge.css";
import "@/css/layout/layout.css";
import "@/css/components/skip-navigation.css";
import "@/css/components/main-navigation.css";
import "@/css/components/carousel.css";
import "@/css/components/buttons.css";
import Vue from 'vue'
import App from './App.vue'
import "@/css/utilities/overrides/text-alignment.css";
import "@/css/utilities/overrides/links.css";
import "@/css/utilities/overrides/visibility.css";
import "@/css/utilities/overrides/rotation.css";
import "@/css/utilities/overrides/font-sizes.css";
import "@/css/utilities/overrides/font-weight.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
