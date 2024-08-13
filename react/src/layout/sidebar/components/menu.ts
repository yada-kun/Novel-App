import Signin from "@/pages/signin";
import { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";

type Tmenu = {
    title: string;
    to: string;
    icon: IconType;
};

export const menu: Tmenu[] = [
    {
        title: "Dashboard",
        to: "/",
        icon: MdDashboard,
    },
    {
        title: "MyBooks",
        to: "/",
        icon: ImBooks,
    },
    {
        title: "Users",
        to: "/",
        icon: FaUsers,
    },
    {
        title: "Announcements",
        to: "/",
        icon: TfiAnnouncement,
    },
];
