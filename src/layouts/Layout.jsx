import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="center-data">
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
