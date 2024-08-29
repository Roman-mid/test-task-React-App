import React, { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  useGetPostsByNameQuery,
  // useGetUserByNameQuery,
} from "./redux/services/getApi";
import Loading from "./components/Loading/Loading";

const App: React.FC = () => {
  const Layout = lazy(() => import("./components/Layout/Layout"));
  const Home = lazy(() => import("./pages/Home/Home"));
  const SignIn = lazy(() => import("./pages/SignIn/SignIn"));
  const PostPage = lazy(() => import("./pages/Post/PostPage"));
  const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

  useGetPostsByNameQuery("posts");

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signIn" element={<SignIn />} />
          <Route path="post/:id" element={<PostPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
