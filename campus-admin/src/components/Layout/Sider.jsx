import { Vue, Component } from "vue-property-decorator";
import S from "./Layout.module.scss";
@Component
class Sider extends Vue {
  name = "Sider";
  render() {
    return (
      <div class={S.sider}>
        <div class={S.title}>今日校园</div>
      </div>
    );
  }
}

export default Sider;
