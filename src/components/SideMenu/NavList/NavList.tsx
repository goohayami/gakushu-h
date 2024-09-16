import { FaTasks } from "react-icons/fa";
import NavItem from "./NavItem/NavItem";
interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: "コナンメインテーマ",
      link: "/",
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 2,
      label: "リコーダー",
      link: "/reco",
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 3,
      label: "けんばん",
      link: "/ken",
      icon: <FaTasks className="size-5" />,
    },
  ];
  return (
    <div className="mt-24">
      {navList.map((item) => (
        <NavItem
          key={item.id}
          label={item.label}
          link={item.link}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default NavList;
