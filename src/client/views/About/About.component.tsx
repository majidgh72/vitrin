import { Link } from "wouter-preact";

export default function About({ data }: { data: any }) {
  return (
    <div>
      <h1>
        About Page:
        {data.rendered}
      </h1>
      <Link to="/">Home</Link>
    </div>
  );
}
