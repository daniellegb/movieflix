import ButtonIcon from 'core/components/ButtonIcon';
import { useForm } from 'react-hook-form';
import './styles.scss';

type FormData = {
    email: string;
    password: string;
}

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();
    const onSubmit = (data: FormData) => console.log(data);

    return (
        <div className="login-container">
            <h1 className="login-style">LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    className="text-form"
                    placeholder="e-mail"
                    {...register('email')}
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