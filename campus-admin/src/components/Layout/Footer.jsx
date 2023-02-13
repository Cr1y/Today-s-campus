import { Vue, Component } from "vue-property-decorator";
@Component
class Footer extends Vue {
  name = "Footer";
  render() {
    return (
      <div>
        <h1>Footer</h1>
      </div>
    );
  }
}

export default Footer;
