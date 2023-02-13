import { Vue, Component } from "vue-property-decorator";
import S from "./Layout.module.scss";

@Component
class Header extends Vue {
  name = "Header";
  render() {
    return (
      <div class={S.header}>
        <div class={S.user}>欢迎您:xxx</div>
      </div>
    );
  }
}

export default Header;
