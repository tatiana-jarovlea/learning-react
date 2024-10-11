import { Outlet } from "react-router-dom";
import { ResponsiveAppBar } from 'components/utils/responsiveAppBar'

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  )
};

export default Layout;