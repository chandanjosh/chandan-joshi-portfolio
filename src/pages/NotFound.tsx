import Button from "../components/ui/Button";
import Seo from "../components/ui/Seo";
import Eyebrow from "../components/ui/Eyebrow";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-6 py-32 text-center md:px-10">
      <Seo title="Page Not Found" description="This page doesn't exist." />
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-4 font-serif text-4xl italic text-ink md:text-6xl">That page doesn't exist.</h1>
      <div className="mt-10">
        <Button to="/">Back Home</Button>
      </div>
    </div>
  );
}
