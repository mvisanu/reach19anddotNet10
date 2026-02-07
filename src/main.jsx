import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

const pageStyle = {
  textAlign: "center",
  backgroundColor: "lightgray",
  padding: "10px",
};

export function HomePage() {
  return (
    <div>
      <Header />
      <p className="customerHeading">We are excited to learn react</p>
      <Footer />
    </div>
  );
}
export function Header() {
  return (
    <div>
      <h1 style={pageStyle} className="text-success">Welcome to React Course</h1>
    </div>
  );
}

export function Footer() {
  return (
    <div>
      <p>Made with love by DotNetMastery</p>
    </div>
  );
}
root.render(
  <div>
    <HomePage />
  </div>,
);
