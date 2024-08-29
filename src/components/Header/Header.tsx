import React from "react";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getApi } from "../../redux/services/getApi";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/slices/postsSlice";
import ToastComponent from "../Toast/Toast";
import { TYPE_TOAST, showToast } from "../Toast/toastSuccess";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import style from "./Header.module.css";

const Header: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState<boolean>(false);
  const userName = localStorage.getItem("user") ?? "";
  const user = useSelector(selectUser(userName));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const invalidateUserCache = (userId: number) => {
    dispatch(getApi.util.invalidateTags([{ type: "User", id: userId }]));
  };

  const singOut = () => {
    if (user.data) {
      invalidateUserCache(user.data[0].id);
      setModalIsOpen(false);
      showToast(TYPE_TOAST.INFO, "You are logget out");
      localStorage.removeItem("user");
      document.body.classList.add("lock");
    }
  };
  const singIn = () => {
    if (user.data) {
      setModalIsOpen(true);
      document.body.classList.add("lock");
    } else {
      navigate("signIn");
    }
  };

  React.useEffect(() => {
    if ("data" in user) {
      showToast(TYPE_TOAST.SUCCESS, "Welcome");
    }
  }, [user.data]);

  return (
    <>
      <header className={style.header}>
        <div className={`container ${style.headerContent}`}>
          <h1 className={style.logo}>Best Appliatin</h1>
          <Button varian="sm" onClick={singIn}>
            {user.data ? "Log Out" : "Sign In"}
          </Button>
        </div>
        <ToastComponent />
      </header>
      {modalIsOpen && (
        <ModalTemplate
          text="Log out of account?"
          setOpenModal={setModalIsOpen}
          onClick={singOut}
        />
      )}
    </>
  );
};

export default Header;
