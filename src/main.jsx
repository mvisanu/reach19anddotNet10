import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

export function HomePage() {
  return (
    <div>
      <Header />
      <h1>We are excited to learn react</h1>
      <Footer />
    </div>
  );
}
export function Header() {
  return (
    <div>
      <h1 style={{ "text-align": "center" }}>Welcome to React Course</h1>
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
  <di>
    <HomePage />
  </di>,
);
