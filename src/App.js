import React, { Fragment } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ContentLayout } from "./layouts/ContentLayout";
import { Home } from "./pages/Home/Home";
import { HeaderLayout } from "./layouts/HeaderLayout";
import { FooterLayout } from "./layouts/FooterLayout";
import { Breadcrumb } from "./components/Breadcrumb";
import { Movies } from "./pages/Movies/Movies";
import { Series } from "./pages/Series/Series";
import { Error404 } from "./pages/Errors/404";

const routes = [
  {
    path: "/home",
    title: "Home",
    exact: true,
    layout: ContentLayout,
    component: Home,
  },
  {
    path: "/movies",
    title: "Movies",
    exact: true,
    layout: ContentLayout,
    component: Movies,
  },
  {
    path: "/series",
    title: "Series",
    exact: true,
    layout: ContentLayout,
    component: Series,
  },
];

function App() {
  const mappedRoutes = routes.map(({ path, component, layout }, key) => {
    return (
      <Wrapper path={path} component={component} layout={layout} key={key} />
    );
  });

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          {mappedRoutes}
          <Wrapper component={Error404} layout={ContentLayout}></Wrapper>
        </Switch>
      </Router>
    </Fragment>
  );

  function Wrapper({ layout: Layout, component: Component, ...attrs }) {
    return (
      <Route
        {...attrs}
        render={(props) => (
          <Fragment>
            <HeaderLayout />
            <Breadcrumb />
            <Layout {...props}>
              <Component {...props} />
            </Layout>
            <FooterLayout />
          </Fragment>
        )}
      />
    );
  }
}

export default App;
