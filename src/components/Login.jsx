import { React } from "react";
import { useState } from "react";

export const Login = () => {
  // 入力フォームの初期化
  const initialValues = {
    username: "",
    mailAddress: "",
    password: "",
    birthday: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ログイン情報を送信する
    // バリデーションチェックをする
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    if (!values.username) {
      errors.username = "ユーザ名を入力してください";
    }
    if (!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください";
    } else if (!regex.test(values.mailsAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください";
    } else if (values.password.length < 4) {
      errors.password = "44文字以上15文字以下のパスワードを入力してください";
    } else if (values.password.length > 15) {
      errors.password = "44文字以上15文字以下のパスワードを入力してください";
    }
    if (!values.birthday) {
      errors.birthday = "生年月日を入力してください";
    }
    return errors;
  };

  return (
    <div className="formContainer">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>ログインフォーム</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>ユーザー名</label>
            <input
              type="text"
              placeholder="ユーザー名"
              name="username"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="errorMessage">{formErrors.username}</p>
          <div className="formField">
            <label>メールアドレス</label>
            <input
              type="text"
              placeholder="メールアドレス"
              name="mailAddress"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="errorMessage">{formErrors.mailAddress}</p>
          <div className="formField">
            <label>パスワード</label>
            <input
              type="text"
              plaveholder="パスワード"
              name="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="errorMessage">{formErrors.password}</p>
          <div className="formField">
            <label>生年月日</label>
            <input
              type="text"
              placeholder="YYYY/MM/DD"
              name="birthday"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <p className="errorMessage">{formErrors.birthday}</p>
          <button className="submitButton">ログイン</button>
          {Object.keys(formErrors).length === 0 && isSubmit && (
            <div className="messageOK">ログインに成功しました</div>
          )}
        </div>
      </form>
    </div>
  );
};
