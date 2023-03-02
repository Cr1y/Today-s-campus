import { Vue, Component } from "vue-property-decorator";
import S from "./Layout.module.scss";

@Component
class Header extends Vue {
  name = "Header";
  date() {
    var nowDate = new Date();
    var year = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1;
    var date = nowDate.getDate();
    var day = nowDate.getUTCDay();
    var days;
    switch (day) {
      case 1:
        days = "星期一";
        break;
      case 2:
        days = "星期二";
        break;
      case 3:
        days = "星期三";
        break;
      case 4:
        days = "星期四";
        break;
      case 5:
        days = "星期五";
        break;
      case 6:
        days = "星期六";
        break;
      case 7:
        days = "星期日";
        break;
    }
    var dateStr = year + "年" + month + "月" + date + "日 " + days;
    return dateStr;
  }
  render() {
    return (
      <div class={S.header}>
        <div class={S.date}>
          <img src={require("/src/assets/icon/calendar.png")} alt="" />
          <span>{this.date()}</span>
        </div>
        <div class={S.user}>
          <div class={S.userAction}>
            <img src={require("/src/assets/icon/password.png")} alt="" />
            <span>修改密码</span>
          </div>
          <div class={S.userAction}>
            <img src={require("/src/assets/icon/signout.png")} alt="" />
            <span>退出登录</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
