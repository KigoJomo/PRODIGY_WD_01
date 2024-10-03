import Button from "../components/Button";

export default function Tutorials() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-center">Web Development Tutorials</h1>
      <p className="text-center">Master the foundations of web development, from HTML and CSS to JavaScript and React.</p>
      <Button text={'explore tutorials'} />
    </section>
  );
}
