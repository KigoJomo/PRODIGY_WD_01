import Button from "../components/Button";

export default function Projects() {
  return (
    <section className="h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-center">Project Showcase</h1>
      <p className="text-center">Explore practical web development projects to sharpen your skills.</p>
      <Button text={'view projects'} />
    </section>
  );
}
