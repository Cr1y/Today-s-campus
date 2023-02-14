import { Vue, Component } from "vue-property-decorator";
import { Layout } from "ant-design-vue";
import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";
// import Content from "./components/Layout/Content";
import S from "./Layout.module.scss";

Vue.component("d-Header", Header);
Vue.component("d-Sider", Sider);
Vue.component("d-Footer", Footer);
Vue.use(Layout);

@Component({
  components: {}
})
class Home extends Vue {
  name = "Home";
  render() {
    return (
      <div class={S.layout}>
        <a-layout>
          <a-layout-sider>
            <d-Sider></d-Sider>
          </a-layout-sider>
          <a-layout>
            <a-layout-header>
              <d-Header></d-Header>
            </a-layout-header>
            <a-layout-content>
              <router-view></router-view>
            </a-layout-content>
            <a-layout-footer>
              <d-Footer></d-Footer>
            </a-layout-footer>
          </a-layout>
        </a-layout>
      </div>
    );
  }
}

export default Home;
