import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../components/Layout/Layout.jsx";

Vue.use(VueRouter);

const routes = [
  {
    path: "/layout",
    name:"首页",
    component: Layout,
    children: [
      {
        path: "/signIn",
        name: "签到",
        component: () => import("../views/SignIn/index")
      }
    ]
  },
  {
    path: "/",
    // name:"
    component: () => import("../views/Login")
  }
  // {
  //   path: "*",
  //   name: "404",
  //   component: () => import("../components/errorPage/404")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

/**
 * 路由拦截
 * 权限验证
 */
// router.beforeEach(async (to, from, next) => {});
export default router;
