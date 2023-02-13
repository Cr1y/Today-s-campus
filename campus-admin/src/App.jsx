import { Vue, Component } from "vue-property-decorator";
// import Content from "./components/Layout/Content";
import S from "./App.module.scss";

@Component({
  components: {}
})
class Home extends Vue {
  name = "Home";
  render() {
    return (
      <div class={S.app}>
        <router-view></router-view>
      </div>
    );
  }
}

export default Home;
