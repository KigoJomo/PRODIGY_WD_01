import Button from "./components/Button";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-center">Welcome to <strong className="lowercase">.dot</strong></h1>
      <p className="text-center">This is where you can learn all things web development.</p>
      <Button text={'get started'} />
    </section>
  );
}
