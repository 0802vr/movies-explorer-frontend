import Form from '../Form/Form';

const Login = () => {
    return (
            <Form 
            title="Рады видеть!"
            submit="Войти"
            text="Еще не зарегистрированы?"
            link="Регистрация"
            path="/signup"
            films="movies"
            path_err="/movies"
            >
    
          
          <label className="form__item">
            <p className="form__item-text">E-mail</p>
            <input  className="form__input" type="email" defaultValue="pochta@yandex.ru" required />
            <p className="form__error">Что-то пошло не так...</p>
          </label>
    
          <label className="form__item">
            <p className="form__item-text">Пароль</p>
            <input  className="form__input" type="password" required />
            <p className="form__error">Что-то пошло не так...</p>
          </label>
    
        </Form>
      );
    };
export default Login;