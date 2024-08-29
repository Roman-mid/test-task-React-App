import React from "react";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { useLazyGetUserByNameQuery } from "../../redux/services/getApi";
import { showToast } from "../Toast/toastSuccess";
import style from "./FormSignIn.module.css";
import Loading from "../Loading/Loading";
import Input from "../UI/Input/Input";

const FormSignIn: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>("");

  const userName =
    inputValue.trim().charAt(0).toUpperCase() + inputValue.trim().slice(1);

  const [trigger, { isError, isLoading }] = useLazyGetUserByNameQuery();
  const navigate = useNavigate();

  const getUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }

    if (isError) {
      showToast("error", "Error! Try again.");
      return;
    }

    const res = await trigger(userName);

    if (!res.data?.length) {
      showToast("error", "Name is not correct");
    } else {
      localStorage.setItem("user", userName);
      navigate("/");
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      <form className={style.form} onSubmit={getUser}>
        <h2 className={style.title}>Sing In</h2>
        <Input
          className={style.formInput}
          placeholder="User name"
          value={inputValue}
          setValue={setInputValue}
        />
        <Button className={style.formBtn} varian="lg" disabled={!inputValue}>
          Sign In
        </Button>
      </form>
    </>
  );
};

export default FormSignIn;
