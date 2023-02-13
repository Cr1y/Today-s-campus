import { Vue, Component } from "vue-property-decorator";
import { Layout } from "ant-design-vue";
import Header from "./components/Layout/Header";
import Sider from "./components/Layout/Sider";
import Footer from "./components/Layout/Footer";
import Content from "./components/Layout/Content";
import S from "./App.module.scss";

Vue.component("d-Header", Header);
Vue.component("d-Sider", Sider);
Vue.component("d-Footer", Footer);
Vue.component("d-Content", Content);
Vue.use(Layout);

@Component({
  components: {}
})
class Home extends Vue {
  name = "Home";
  render() {
    return (
      <div class={S.app}>
        <a-layout>
          <a-layout-sider>
            <d-Sider></d-Sider>
          </a-layout-sider>
          <a-layout>
            <a-layout-header>
              <d-Header></d-Header>
            </a-layout-header>
            <a-layout-content>
              <d-Content></d-Content>
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
