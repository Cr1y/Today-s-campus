import { Vue, Component } from "vue-property-decorator";
import moment from "moment"
@Component
class SignIn extends Vue {
  name = "SignIn";
  form = {
    title: "",
    date: ""
  };
  created() {}
  dateChange() {}
  render() {
    return (
      <div>
        <a-form-modal>
          <a-form-modal-item label="签到名称">
            <a-input></a-input>
          </a-form-modal-item>
          <a-form-modal-item label="签到截止时间">
            <a-date-picker
              v-model={this.form.date}
              format="YYYY-MM-DD HH:mm:ss"
              show-time
              disabledDate={(current) => {
                return current > moment();
              }}
              on-change={this.dateChange}
              getPopupContainer={(triggerNode) => triggerNode.parentNode}
            />
          </a-form-modal-item>
          <a-form-modal-item label="是否开启位置签到">
            <a-input></a-input>
          </a-form-modal-item>
        </a-form-modal>
      </div>
    );
  }
}

export default SignIn;
