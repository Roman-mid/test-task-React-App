import React from "react";
import style from "./Header.module.css";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../redux/services/getApi";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/slices/postsSlice";
import ToastComponent from "../Toast/Toast";
import { showToast } from "../Toast/toastSuccess";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = localStorage.getItem("user") ?? "";

  const user = useSelector(selectUser(userName));

  const invalidateUserCache = (userId: number) => {
    dispatch(getApi.util.invalidateTags([{ type: "User", id: userId }]));
  };

  const singIn = () => {
    if (user.data) {
      invalidateUserCache(user.data[0].id);
      showToast("info", "See you soon");
    } else {
      navigate("signIn");
    }
  };
  React.useEffect(() => {
    if ("data" in user) {
      showToast("success", "Welcome");
    }
  }, [user.data]);

  return (
    <header className={style.header}>
      <div className={`container ${style.headerContent}`}>
        <h1 className={style.logo}>Best Appliatin</h1>
        <Button varian="sm" onClick={singIn}>
          {user.data ? "Sign Out" : "Sign In"}
        </Button>
      </div>
      <ToastComponent />
    </header>
  );
};

export default Header;
