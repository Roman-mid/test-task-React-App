import React from "react";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/slices/postsSlice";
import ErrorComponent from "../../components/Error/ErrorComponent";
import Input from "../../components/UI/Input/Input";
import style from "./Home.module.css";

const Home: React.FC = () => {
  const { data: posts, isError } = useSelector(selectPosts);

  const [searchValue, setSearchValue] = React.useState<string>("");

  const sortedPosts = posts?.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const cardItems = sortedPosts?.map((post) => (
    <Card key={post.id} id={post.id} title={post.title} body={post.body} />
  ));

  if (isError) {
    return <ErrorComponent />;
  }

  return (
    <>
      <section className={style.section}>
        <div className="container">
          <Input
            className={style.input}
            placeholder="Search"
            value={searchValue}
            setValue={setSearchValue}
          />
          {cardItems?.length === 0 && <h1> We can't find anything</h1>}

          <div className={style.cardWrap}>{cardItems}</div>
        </div>
      </section>
    </>
  );
};

export default Home;
