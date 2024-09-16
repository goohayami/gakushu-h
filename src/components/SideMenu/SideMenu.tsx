import NavList from "./NavList/NavList";

const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-gray-800 text-white">
      <div>
        <h1 className="p-4 tx-4 text-3xl font-bold">学習発表会</h1>
        <NavList />
      </div>
    </div>
  );
};

export default SideMenu;
