import { useState } from "react";
import { Link } from "react-router-dom";

import { menu } from "./components/menu";
import { GiInkSwirl } from "react-icons/gi";

const SideBar = () => {
    return (
        <aside className="bg-slate-950 w-14 lg:w-60 space-y-10 h-screen text-white">
            <div className="text-center p-3 lg:p-0 lg:py-2">
                <p className="text-white hidden lg:block lg:text-6xl">ArTH</p>
                <GiInkSwirl className="lg:hidden" size={30} />
            </div>
            <div className="">
                {menu.map((el, i) => {
                    return (
                        <Link to={el.to} key={i}>
                            <div className="flex hover:bg-white hover:text-black gap-5 p-5 justify-start items-center">
                                <el.icon size={25} />
                                <div className="hidden lg:block">
                                    {el.title}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </aside>
    );
};

export default SideBar;
