import Button from "../components/Button";

export default function Resources() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-center">Web Development Resources</h1>
      <p className="text-center">A curated list of resources to help you grow as a web developer.</p>
      <Button text={'view resources'} />
    </section>
  );
}
