import { ReactElement } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import routes from "./routes";

const Router = (): ReactElement => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, key) => {
                    const { path, Component } = route;
                    return (
                        <Route path={path} element={<Component />} key={key} />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
