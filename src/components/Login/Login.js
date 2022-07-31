import Form from "../Form/Form";
import { useFormWithValidation } from "../../utils/useFormWithValidation";
const Login = ({ handleLogin, clearErrors, loginErr, setLoginErr }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({ email: '', password: '' });

   
  function handleClearErrors() {
    resetForm();
    clearErrors(); 
  }
  function handleChangeLogin(e) {
    e.preventDefault();
    handleLogin({
      email: values.email,
      password: values.password,
    });
    resetForm();
  }
  return (
    <Form
      title="Рады видеть!"
      submit="Войти"
      text="Еще не зарегистрированы?"
      link="Регистрация"
      path="/signup"
      films="movies"
      path_err="/movies"
      handleClearErrors={handleClearErrors}
      isValid={isValid}
      onSubmit={handleChangeLogin}
    >
      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input
          className="form__input {errors.email ? form__input_border-error : form__input_border-valid } "
          type="email" 
          name="email"
          value={values.email || ""}
          onChange={handleChange}
          required
        />
        <span className="form__error {errors.email ? form__error-text : null }">{errors.email}</span>
      </label>

      <label className="form__item">
        <p className="form__item-text">Пароль</p>
        <input
          className="form__input {errors.password ? form__input_border-error : form__input_border-valid }"
          type="password"
          name = "password"
          value={values.password || ""}
          onChange={handleChange}
          required
        />
        <span className="form__error {errors.password ? form__error-text : null }">{errors.password}</span>
      </label>
    </Form>
  );
};
export default Login;
