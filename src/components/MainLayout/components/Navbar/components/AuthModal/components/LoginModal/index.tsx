import React from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { login } from "../../../../../../../../store/modules/user/user.slice";

interface LoginModalProps {
  setRegister: (arg: boolean) => void;
}
const LoginFormSchema = yup.object().shape({
  email: yup.string().email("Неверная почта").required("Введите почту"),
  password: yup
    .string()
    .min(6, "​Минимальная длина пароля 6 символов")
    .required(),
});
const LoginModal = ({ setRegister }: LoginModalProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
  });
  const dispatch = useDispatch();
  const onSubmit = async (data: any) => {
    dispatch(login(data));
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label='Email'
              id='outlined-error-helper-text'
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
          )}
          name='email'
          control={control}
          defaultValue=''
        />

        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label='Пароль'
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
          )}
          name='password'
          control={control}
          defaultValue=''
        />
        <div>
          <Button variant='contained' type='submit'>
            Войти
          </Button>
        </div>
      </form>

      <Typography id='modal-modal-description' sx={{ mt: 2 }}>
        Нет аккаунта?{" "}
        <strong onClick={() => setRegister(true)}>Зарегистрируйтесь</strong>
      </Typography>
    </>
  );
};

export default LoginModal;
