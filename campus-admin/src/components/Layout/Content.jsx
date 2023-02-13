import { Vue, Component } from "vue-property-decorator";
@Component
class Content extends Vue {
  name = "Content";
  render() {
    return (
      <div>
        <h1>content</h1>
      </div>
    );
  }
}

export default Content;
