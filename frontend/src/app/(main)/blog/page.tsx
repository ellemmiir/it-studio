import { Metadata } from "next";
import BlogPage from "@/features/blog/ui/BlogPage/BlogPage";

export const metadata: Metadata = {
  title: "Блог | Название компании",
  description: "Статьи о дизайне, продукте и росте стартапов",
};

export default function Blog() {
  return <BlogPage />;
}
