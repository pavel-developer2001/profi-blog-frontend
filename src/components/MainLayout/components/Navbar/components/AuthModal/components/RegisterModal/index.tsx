import React from "react";
import { TextField } from "@mui/material";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";

const RegisterFormSchema = yup.object().shape({
  name: yup.string().min(4, "Минимальная длина имени 4 символа").required(),
  email: yup.string().email("Неверная почта").required("Введите почту"),
  password: yup
    .string()
    .min(6, "​Минимальная длина пароля 6 символов")
    .required(),
  password2: yup
    .string()
    .min(6, "​Минимальная длина пароля 6 символов")
    .required(),
});
const RegisterModal = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterFormSchema),
  });
  const onSubmit = async (data: any) => {
    if (data.password === data.password2) {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      console.log("payload", payload);
      // dispatch(fetchSignIn(data));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label='UserName'
              error={!!errors?.name}
              id='outlined-error-helper-text'
              helperText={errors?.name?.message}
            />
          )}
          name='name'
          control={control}
          defaultValue=''
        />
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
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label='Повторить пароль'
              error={!!errors?.password2}
              helperText={errors?.password2?.message}
            />
          )}
          name='password2'
          control={control}
          defaultValue=''
        />
        <div>
          <Button variant='contained' type='submit'>
            Зарегистрироваться
          </Button>
        </div>
      </form>
      {/* <TextField id='outlined-basic' label='Email' variant='outlined' />
      <TextField id='outlined-basic' label='UserName' variant='outlined' />
      <TextField id='outlined-basic' label='Пароль' variant='outlined' />
      <TextField
        id='outlined-basic'
        label='Повторить пароль'
        variant='outlined'
      />
      <div>
        <Button variant='contained'>Зарегистрироваться</Button>
      </div> */}
    </>
  );
};

export default RegisterModal;
