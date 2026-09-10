import HomeSections from "@/components/pages/HomeSections";
import { getDictionary } from "@/content";

export default function Home() {
  return <HomeSections d={getDictionary("en")} />;
}
