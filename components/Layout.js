import { Nav } from "../components/Nav";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="dot-top"></div>
      <div className="dot-bottom"></div>
      <div className="dot-mid1"></div>
      <div className="dot-mid2"></div>
      <div className="dot-mid3"></div>
      <div className="dot-mid4"></div>
      <div className="dot-mid5"></div>
      <div className="dot-mid6"></div>
      <Nav />
      <div>{children}</div>
    </div>
  );
}
