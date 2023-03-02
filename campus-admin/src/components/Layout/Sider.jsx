import { Vue, Component } from "vue-property-decorator";
import S from "./Layout.module.scss";
// import router from "../../router/index";
@Component
class Sider extends Vue {
  name = "Sider";
  a = 0;
  titleClick(e) {
    this.$router.push(e.key);
  }
  render() {
    return (
      <div class={S.sider}>
        <div class={S.title}>今日校园</div>
        {this.a == 1 && (
          <a-menu style="width: 200px" mode="inline" onClick={this.titleClick}>
            <a-menu-item key="7">首页</a-menu-item>
            <a-sub-menu title="签到">
              <a-menu-item key="/signIn">发布签到</a-menu-item>
              <a-menu-item key="3">签到详情</a-menu-item>
            </a-sub-menu>
            <a-sub-menu title="问卷">
              <a-menu-item key="2">发布问卷</a-menu-item>
              <a-menu-item key="4">问卷统计</a-menu-item>
            </a-sub-menu>
            <a-sub-menu title="假条">
              <a-menu-item key="5">假条审批</a-menu-item>
              <a-menu-item key="6">假条记录</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="7">个人信息</a-menu-item>
          </a-menu>
        )}
        {this.a == 0 && (
          <a-menu style="width: 200px" mode="inline" onClick={this.titleClick}>
            <a-menu-item key="7">首页</a-menu-item>
            <a-sub-menu title="消息">
              <a-menu-item key="/signIn">发布消息</a-menu-item>
              <a-menu-item key="3">消息记录</a-menu-item>
            </a-sub-menu>
            <a-sub-menu title="问卷">
              <a-menu-item key="2">发布问卷</a-menu-item>
              <a-menu-item key="4">问卷统计</a-menu-item>
            </a-sub-menu>
            <a-menu-item key="5">辅导员信息录入</a-menu-item>
            <a-menu-item key="7">个人信息</a-menu-item>
          </a-menu>
        )}
      </div>
    );
  }
}

export default Sider;
