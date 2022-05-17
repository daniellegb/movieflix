import ButtonIcon from "core/components/ButtonIcon";
import { saveSessionData } from "core/utils/auth";
import { makeLogin } from "core/utils/request";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./styles.scss";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);
  const history = useHistory();

  const onSubmit = (data: FormData) => {
    makeLogin(data)
      .then((response) => {
        setHasError(false);
        saveSessionData(response.data);
        history.push("/movies");
      })
      .catch(() => {
        setHasError(true);
      });
  };

  return (
    <div className="login-container">
      <h1 className="login-style">LOGIN</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="text-form"
          placeholder="e-mail"
          {...register("username", { required: true })}
        />
        <input
          type="password"
          className="text-form"
          placeholder="password"
          {...register("password", { required: true })}
        />
        <ButtonIcon button="login" />
      </form>
      {hasError ? (
        <div className="alert alert-warning mt-4">
          Usuário ou senha inválidos!
        </div>
      ) : (
        <div className="alert alert-warning mt-4">
          O backend no Heroku está dormente... zZzZ... O login pode demorar
          alguns segundos a mais para ser finalizado: tempo necessário para que
          o servidor acorde! =D
        </div>
      )}
    </div>
  );
};

export default Login;
