import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetPostsByNameQuery } from "../../redux/services/getApi";
import Post from "../../components/Post/Post";
import style from "./PostPage.module.css";
import Button from "../../components/UI/Button/Button";
import ErrorComponent from "../../components/Error/ErrorComponent";

const PostPage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { error, data: posts } = useGetPostsByNameQuery("posts", {
    selectFromResult: ({ error, data }) => ({
      error,
      data: data?.find((post) => post.id === Number(params.id)),
    }),
  });

  const goBack = () => {
    navigate("..");
  };

  React.useEffect(() => {
    if (!posts && !error) {
      navigate("/not-found");
    }
  }, [posts, error, navigate]);

  if (error) {
    return <ErrorComponent />;
  }

  if (!posts) {
    return null;
  }

  return (
    <section className={style.section}>
      <div className="container">
        <Post
          className={style.post}
          title={posts?.title ?? ""}
          body={posts?.body ?? ""}
        />
        <Button varian="sm" onClick={goBack}>
          Back
        </Button>
      </div>
    </section>
  );
};

export default PostPage;
