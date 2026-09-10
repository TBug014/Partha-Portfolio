import HomeSections from "@/components/pages/HomeSections";
import { getDictionary } from "@/content";

export default function HomeJa() {
  return <HomeSections d={getDictionary("ja")} />;
}
