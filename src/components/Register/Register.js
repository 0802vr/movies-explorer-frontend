import Form from "../Form/Form";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

const Register = ({ handleRegister, clearErrors, registeredErr, setRegisteredErr }) => {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation({ name: '', email: '', password: '' });
  function handleChangeInput(e) {
    handleChange(e);
    if (registeredErr.length > 0) {
      setRegisteredErr("");
    }
  }
  function handleClearErrors() {
    resetForm();
    clearErrors();
  }
  function handleRegisterForm(e) {
    e.preventDefault();
    handleRegister({
      email: values.email,
      name: values.name,
      password: values.password,
    });
    resetForm();
  }
  return (
    <Form
      title="Добро пожаловать!"
      submit="Зарегистрироваться"
      text="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
      handleClearErrors={handleClearErrors}
      isValid={isValid}
      onSubmit={handleRegisterForm}
    >
      <label className="form__item">
        <p className="form__item-text">Имя</p>
        <input
          type="text"
          name="name"
          className="form__input {errors.name ? form__input_border-error : form__input_border-valid }"
          value={values.name || ""}
          onChange={handleChangeInput}
          pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
          autoComplete="no"
          required
        />
        <p className="form__error {errors.name ? form__error-text : null }">{errors.name}</p>
      </label>

      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input
          className="form__input {errors.email ? form__input_border-error : form__input_border-valid } "
          type="email"
          name="email"
          value={values.email || ""}
          onChange={handleChangeInput}
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          autoComplete="no"
          required
        />
        <p className="form__error {errors.email ? form__error-text : null }">{errors.email}</p>
      </label>

      <label className="form__item">
        <p className="form__item-text">Пароль</p>
        <input
          className="form__input {errors.password ? form__input_border-error : form__input_border-valid }"
          type="password"
          name="password"
          value={values.password || ""}
          onChange={handleChangeInput}
          minLength="8"
          maxLength="35"
          autoComplete="no"           
          required
        />
        <p className="form__error {errors.password ? form__error-text : null } ">{errors.password}</p>
      </label>
    </Form>
  );
};
export default Register;
