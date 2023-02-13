import { Vue, Component } from "vue-property-decorator";
import S from "./Layout.module.scss";
@Component
class Footer extends Vue {
  name = "Footer";
  render() {
    return (
      <div class={S.footer}>
        <div>@欢迎来到今日校园|详情请联系email:2929699379@qq.com</div>
      </div>
    );
  }
}

export default Footer;
