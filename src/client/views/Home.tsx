import { Link } from "preact-router";

export const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
      <Link href="/about">About</Link>
    </div>
  );
};
