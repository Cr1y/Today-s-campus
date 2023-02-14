import { Vue, Component } from "vue-property-decorator";
import S from "./Layout.module.scss";
// import router from "../../router/index";
@Component
class Sider extends Vue {
  name = "Sider";
  titleClick(e) {
    console.log(1111);
    console.log(e.key);
    this.$router.push(e.key);
  }
  render() {
    return (
      <div class={S.sider}>
        <div class={S.title}>今日校园</div>
        <a-menu style="width: 200px" mode="inline" onClick={this.titleClick}>
          <a-sub-menu title="签到">
            <a-menu-item key="/signIn">发布签到</a-menu-item>
            <a-menu-item key="3">签到详情</a-menu-item>
          </a-sub-menu>

          <a-menu-item key="2">问卷</a-menu-item>
        </a-menu>
      </div>
    );
  }
}

export default Sider;
