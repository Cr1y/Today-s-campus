import { Vue, Component } from "vue-property-decorator";
@Component
class SignIn extends Vue {
  name = "SignIn";
  created() {}
  render() {
    return (
      <div>
        <h1>签到</h1>
      </div>
    );
  }
}

export default SignIn;
