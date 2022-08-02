import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  Redirect,
  withRouter
} from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";

import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import PageNotFound from "../PageNotFound/PageNotFound";

import { CurrentUserContext } from "../../context/CurrentUserContext";

import * as MovieApi from "../../utils/MovieApi";
import * as MainApi from "../../utils/MainApi";

function App() {
  const history = useHistory();
  //ошибки и логирование а также данные пользователя
  const [currentUser, setCurrentUser] = useState({});
  const [registeredErr, setRegisteredErr] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const [profileError, setProfileError] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [serverError, setServerError] = React.useState(false);
  //начальные фильмы
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  //фильтрованные фильмы по состоянию экране
  const [filterMovies, setFilterMovies] = React.useState([]);
  const [filterSavedMovies, setFilterSavedMovies] = React.useState([]);
  //по времени отфильтрованные
  const [filterTimeMovies, setFilterTimeMovies] = React.useState([]);
  const [filterTimeSavedMovies, setFilterTimeSavedMovies] = React.useState([]);
  //состояния обычный - короткометражка
  const [isFilter, setIsFilter] = React.useState(false);
  //preloader
  const [isLoading, setIsLoading] = React.useState(false);
  //поиск фильмов
   
  const pathname = useLocation();
  // код по общей работе страницы: регистрация - логирование - изменение данных пользователя - выход со страницы
  function checkToken() {
    const movies = localStorage.getItem("movies");
    const savedMovies = localStorage.getItem("savedMovies");
    const jwt = localStorage.getItem("jwt");
    const filterMovies = localStorage.getItem("filterMovies");
    const filterTimeMovies =  localStorage.getItem("filterTimeMovies");
    if (jwt) {
      MovieApi.getUser(jwt)
        .then((userInfo) => {
          if (userInfo) {
            setCurrentUser(userInfo);
            setIsLogged(true);
            history.push(pathname.pathname);
          }
        })

        .catch((err) => {
          console.log(err);
          setServerError(true);
        });
      if (movies) {
        const result = JSON.parse(movies);
        setMovies(result);     
        
      }
      if (filterMovies) {
        const result = JSON.parse(filterMovies);             
        setFilterMovies(result);
      }
      if (filterTimeMovies) {
        const result = JSON.parse(filterTimeMovies);             
        setFilterTimeMovies(result);
      }

      if (savedMovies) {
        const resultSave = JSON.parse(savedMovies);
        setSavedMovies(resultSave);
        setFilterSavedMovies(resultSave);
      }
    } else {
      setIsLogged(false);
    }
  }

  useEffect(() => {
    checkToken();
  }, [isLogged]);

  function handleRegister({ email, password, name }) {
    MovieApi.register({ email, password, name })
      .then((res) => { 
       
          handleLogin({ email, password }) 

                
      })
      .catch((err) => {
        setRegisteredErr("Что-то пошло не так!");
        if (err === 400) return setRegisteredErr("некорректно заполнены поля");
      });
  }

  function handleLogin(email, password) {
    MovieApi.login(email, password)
      .then((data) => {
        
        if (data) {
          localStorage.setItem("jwt", data.token);
          setIsLogged(true);
          history.push("/movies");
          checkToken();
        }
      })
      .catch((err) => console.log(err));
  }

  

  function handleLogout() {
    history.push("/");
    setIsLogged(false);
    localStorage.removeItem("jwt");
    localStorage.removeItem("movies");
    localStorage.removeItem("savedMovies");
    localStorage.removeItem("filterMovies");
    localStorage.removeItem("textSave");
    localStorage.removeItem("text");
    localStorage.removeItem("filterTimeMovies");
    
    setCurrentUser({});

    setMovies([]);
    setSavedMovies([]);
    
    setFilterMovies([]);
    setFilterSavedMovies([]);  

    setFilterTimeMovies([]);
    setFilterTimeSavedMovies([]); 

     
    clearAllErrors();
  }

  function updateUser(name, email) {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MovieApi.updateUser(name, email, jwt)
        .then((data) => {
          setCurrentUser(data);
          setProfileError("Данные обновлены!")
          alert("Данные обновлены!");
        })
        .catch((err) => {
          console.log(err);
          setProfileError("Ошибка при обновлении!");
          alert(profileError);
        });
    }
  }
  function clearAllErrors() {
    setLoginErr("");
    setRegisteredErr("");
    setProfileError("");
  }
  // код по фильмам загрузка фильмов - сохр фильмы - удаление - короткометраж -
  function changeFilter() {
    setIsFilter(!isFilter);
  }
  //поиск фильма по названию
  function findFilms(films, text) {
    let result = [];
    films.forEach((movie) => {
      if (movie.nameRU.toLowerCase().indexOf(text.toLowerCase()) > -1) {
        result.push(movie);
      }
    });
    return result;
  }
  function findSavesFilms(films, text) {
    let result = [];
    films.forEach((movie) => {
      if (movie.movie.nameRU.toLowerCase().indexOf(text.toLowerCase()) > -1) {
        result.push(movie);
      }
    });
    return result;
  }
  //поиск короткомертажек
  function findMiniFilms(films) {
    let result = [];
    films.forEach((movie) => {
      if (movie.duration <= 45) {
        result.push(movie);
      }
    });
    return result;
  }
  
  function findMiniFilmsSaves(films) {
    let result = [];
    films.forEach((movie) => {
      if (movie.movie.duration <= 60) {
        result.push(movie);
      }
    });
    return result;
  }
  //для удаления карточки
  function filterMoviesById(films, id) {
     
     
    return films.filter((item) => {
       
      return  item.movie._id !== id 
    });
  }
  //сохранение фильма
  function saveMovie(movie) {
    setIsLoading(true);
    const jwt = localStorage.getItem("jwt");
    MovieApi.saveMovie({ jwt, movie })
      .then((res) => {
        const movies = [...savedMovies, res];
        localStorage.setItem("savedMovies", JSON.stringify(movies));
        setSavedMovies((i) => [...i, res]);
        console.log(res.movie.duration)
        if (res.movie.duration < 45) {
          setFilterTimeSavedMovies((i) => [...i, res]);
          setFilterSavedMovies((i) => [...i, res]);
        } else {
          setFilterSavedMovies((i) => [...i, res]);
        }
      })
      .catch((err) => {
        setServerError(true);
        console.log(err);
      });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
  //удаление фильма
  function deleteMovie(id) {
    setIsLoading(true);
    const jwt = localStorage.getItem("jwt");
    
    MovieApi.deleteSavedMovie({ jwt, id })
      .then(() => {
        const result = filterMoviesById(savedMovies, id);         
        setSavedMovies(result);
        localStorage.setItem("savedMovies", JSON.stringify(result));
        setFilterSavedMovies(filterMoviesById(filterSavedMovies, id));
        setFilterTimeSavedMovies(filterMoviesById(filterTimeMovies, id));
      })
      .catch((err) => setServerError(true));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
  //поиск фильма в зависимости от состояния
  function findMoviesMain(text) {
    setIsLoading(true);
    if(localStorage.getItem("text")){localStorage.removeItem("text");}
    if (movies.length > 0) {
      const result = findFilms(movies, text);
      setFilterMovies(result);
      localStorage.setItem("filterMovies", JSON.stringify(result));
      localStorage.setItem("text", JSON.stringify(text));
       
    } else {
      MainApi.getInitialMovies()
        .then((res) => {
          setMovies(res);
          localStorage.setItem("movies", JSON.stringify(res));
          const result = findFilms(res, text);
          localStorage.setItem("filterMovies", JSON.stringify(result));
          setFilterMovies(result);
          localStorage.setItem("text", JSON.stringify(text));
           

          if (isFilter) {
            const resultTimeFilter = findMiniFilms(result);
            localStorage.setItem("filterTimeMovies", JSON.stringify(resultTimeFilter));
            setFilterTimeMovies(resultTimeFilter);
            localStorage.setItem("text", JSON.stringify(text));
             
          }
        })
        .catch((err) => console.log(err));
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
  //поиск сохраненных фильмов
  function findMoviesMainSaved(text) {
    if(localStorage.getItem("textSave")){localStorage.removeItem("textSave");}
    if (savedMovies.length > 0) {
      setFilterSavedMovies(findSavesFilms(savedMovies, text));
      localStorage.setItem("textSave", JSON.stringify(text));
    } else {
      setIsLoading(true);
      MovieApi.getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
          setFilterSavedMovies(findSavesFilms(savedMovies, text));
          localStorage.setItem("textSave", JSON.stringify(text));
        })
        .catch((err) => console.log(err));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }
  useEffect(() => {
    clearAllErrors();
    setIsFilter(false)
    if (pathname.pathname === "/saved-movies") {
      setFilterSavedMovies(savedMovies);
    }
  }, [pathname]);
//работа чекбокса в зависимости от состояния
 useEffect(() => {
     
    if (isFilter) {
        if (pathname.pathname === "/movies") {
            if (movies.length > 0) {
                const result = findMiniFilms(filterMovies);
                               
                setFilterTimeMovies(result);
            }
        }
        else if (pathname.pathname === "/saved-movies") {
            const result = findMiniFilmsSaves(filterSavedMovies);   
                  
            setFilterTimeSavedMovies(result);
        }

    }
}, [isFilter])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
        
        <Route exact path="/" isLogged={isLogged}>
            <Header loggedIn={false} />
            <Main />
            <Footer />
          </Route>

          <Route exact path="/signin">
             {isLogged ? <Redirect to="/movies" /> : <Login
              handleLogin={handleLogin}
              clearErrors={clearAllErrors}
              loginErr={loginErr}
              setLoginErr={setLoginErr}
            />} 
            
          </Route>

          <Route exact path="/signup">
           {isLogged ? <Redirect to="/movies" /> : <Register
              handleRegister={handleRegister}
              clearErrors={clearAllErrors}
              registeredErr={registeredErr}
              setRegisteredErr={setRegisteredErr}
            />} 
            
          </Route>

          <ProtectedRoute exact path="/profile" isLogged={isLogged}>
            <Header loggedIn={true} />
            <Profile
              handleLogout={handleLogout}
              changeProfile={updateUser}
              setProfileError={setProfileError}
              profileError={profileError}
            />
          </ProtectedRoute> 

          <ProtectedRoute exact path="/movies" isLogged={isLogged}>
            <Header loggedIn={true} />
            <Movies
              isFilter={isFilter}
              setFilter={changeFilter}              
              movies={isFilter ? filterTimeMovies : filterMovies}
              savedMovies={savedMovies}
              saveMovie={saveMovie}
              findMoviesMain={findMoviesMain}
              findMoviesMainSaved={findMoviesMainSaved}
              isLoading={isLoading}              
              deleteMovie={deleteMovie}
              clearAllErrors={clearAllErrors}
              setIsLoading={setIsLoading}
            />
            <Footer />
          </ProtectedRoute>

          <ProtectedRoute exact path="/saved-movies" isLogged={isLogged}>
            <Header loggedIn={true} />
            <SavedMovies 
            isFilter={isFilter}
            setFilter={changeFilter}
            saveMovie={saveMovie}
            movies={isFilter ? filterTimeSavedMovies : filterSavedMovies}
            savedMovies={savedMovies}
            findMoviesMain={findMoviesMain}
            findMoviesMainSaved={findMoviesMainSaved}
            isLoading={isLoading}            
            deleteMovie={deleteMovie}
            clearAllErrors={clearAllErrors}/>
            <Footer />
          </ProtectedRoute>
          
          <Route path="*">
          <PageNotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
