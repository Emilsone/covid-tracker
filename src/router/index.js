import Vue from "vue";
import Router from "vue-router";
import Overview from "@/components/Overview.vue";

Vue.use(Router);

export default new Router({
  base: "/",
  mode: "history",
  routes: [
    {
      path: "/overview",
      name: "Overview",
      component: Overview,
    },
    // {
    //   path: "/links/:id",
    //   component: LinkDetails,
    //   children: [
    //     {
    //       path: "edit",
    //       component: EditLink,
    //     },
    //   ],
    // },
    
  ],
});
