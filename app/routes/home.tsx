import type { Route } from "./+types/home";
import { HomePageSection } from "../components/homepage/HomepageSection";
import PageLayout from "~/layouts/PageLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <PageLayout>
      <HomePageSection />
    </PageLayout>
  );
}
