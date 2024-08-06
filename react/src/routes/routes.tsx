
import Signin from "@/pages/signin";

export type TRoute = {
  path: string;
  Component: () => JSX.Element;
};

const routes: TRoute[] = [
  {
    path: '/',
    Component: Signin,
  },

];

export default routes;
