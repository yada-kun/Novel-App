import { PropsWithChildren } from "react";
import SideBar from "./sidebar";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <div className="lg:flex">
            <SideBar />
            {children}
        </div>
    );
};

export default Layout;
