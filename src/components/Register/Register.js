import Form from '../Form/Form';

const Register = () => {
    return (
        <Form 
        title="Добро пожаловать!"
        submit="Зарегистрироваться"
        text="Уже зарегистрированы?"
        link="Войти"
        path="/signin">

      <label className="form__item">
        <p className="form__item-text">Имя</p>
        <input type="text" className="form__input" defaultValue="Василий" required />
        <p className="form__error">Что-то пошло не так...</p>
      </label>

      <label className="form__item">
        <p className="form__item-text">E-mail</p>
        <input  className="form__input form__input_border-error" type="email" defaultValue="pochta@yandex.ru" required />
        <p className="form__error">Что-то пошло не так...</p>
      </label>

      <label className="form__item">
        <p className="form__item-text">Пароль</p>
        <input  className="form__input form__input_color-error" type="password" defaultValue="••••••••••••" required />
        <p className="form__error form__error-text">Что-то пошло не так...</p>
      </label>

    </Form>
  );
    };
export default Register;