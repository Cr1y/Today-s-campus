import { Vue, Component } from "vue-property-decorator";
@Component
class Header extends Vue {
  name = "Header";
  render() {
    return (
      <div>
        <h1>header</h1>
      </div>
    );
  }
}

export default Header;
