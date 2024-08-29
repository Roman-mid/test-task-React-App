import React from "react";
import style from "./NotFound.module.css";
import Button from "../../components/UI/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate("/");
  };

  return (
    <section className={style.section}>
      <div className="container">
        <div className={style.content}>
          <h1 className={style.title}>! 404</h1>
          <p className={style.text}>Page is not found</p>
          <Button varian="lg" onClick={goHomePage}>
            Home
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
