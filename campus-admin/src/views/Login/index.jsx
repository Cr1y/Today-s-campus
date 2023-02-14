import { Vue, Component } from "vue-property-decorator";
import S from "./index.module.scss";
import { Form, Input } from "ant-design-vue";
Vue.use(Form).use(Input);

@Component
class Login extends Vue {
  name = "Login";
  form = {
    username: "",
    password: ""
  };
  formProps = {
    props: {
      model: this.form,
      labelCol: { span: 7 },
      wrapperCol: { span: 14 }
    }
  };
  created() {}
  submit() {
    // console.log("111");
    this.$router.push("/Layout");
  }
  render() {
    return (
      <div class={S.login}>
        <div class={S.content}>
          <a-form-model {...this.formProps}>
            <a-form-model-item label="用户名">
              <a-input v-model={this.form.username}></a-input>
            </a-form-model-item>
            <a-form-model-item label="密码">
              <a-input v-model={this.form.password} type="password"></a-input>
            </a-form-model-item>
            <a-form-model-item>
              <a-button onClick={this.submit} type="primary">
                提交
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </div>
      </div>
    );
  }
}

export default Login;
