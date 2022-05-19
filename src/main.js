import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEllipsisVertical,
  faGear,
  faCircleUser,
  faChartColumn,
  faCircleCheck,
  faCirclePlus,
  faCaretUp,
  faCaretDown,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faEllipsisVertical,
  faGear,
  faCircleUser,
  faChartColumn,
  faCircleCheck,
  faCirclePlus,
  faCaretUp,
  faCaretDown,
  faTrashCan
);

// Vue.config.productionTip = false;

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
