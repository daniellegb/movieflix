import ButtonIcon from 'core/components/ButtonIcon';
import { makeLogin } from 'core/utils/request';
import { useForm } from 'react-hook-form';
import './styles.scss';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();
    const onSubmit = (data: FormData) => {
        console.log(data);
        makeLogin(data);
    };

    return (
        <div className="login-container">
            <h1 className="login-style">LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    className="text-form"
                    placeholder="e-mail"
                    {...register('username')}
                />
                <input
                    type="password"
                    className="text-form"
                    placeholder="password"
                    {...register('password')}
                />
                <ButtonIcon button="login" />
            </form>
        </div>
    )
    
}

export default Login;