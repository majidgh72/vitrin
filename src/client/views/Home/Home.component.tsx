import { Link } from "wouter-preact";

export default function Home({ data }) {
  return (
    <div>
      <h1>Home Page: ({data.title})</h1>
      <h2>Hiii</h2>
      <Link to="/about">About</Link>
    </div>
  );
}
