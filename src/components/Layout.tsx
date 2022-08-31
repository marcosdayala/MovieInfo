import { PropsWithChildren } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import '../styles_sheets/Nav_Footer.css'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Nav />
      { children }
      <Footer />
    </div>
  );
}

export default Layout