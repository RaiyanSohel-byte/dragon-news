import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto flex gap-5 justify-between">
      <Outlet />
    </div>
  );
};

export default Home;
