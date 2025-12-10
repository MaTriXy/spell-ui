import { Hero1 } from "@/components/hero-1";
import SiteHeader from "@/components/site-header";
import { getDocSchema } from "@/lib/doc";

const docSchema = await getDocSchema();

export default function Home() {
  return (
    <div className="flex relative h-svh pt-14">
      <SiteHeader docSchema={docSchema} />
      <Hero1 />
    </div>
  );
}
