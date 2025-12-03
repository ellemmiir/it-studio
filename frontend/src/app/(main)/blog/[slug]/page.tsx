// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import BlogPostPage from "@/features/blog/ui/BlogPostPage/BlogPostPage";
// import { blogApi } from "@/features/blog/api";

// interface Props {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params;

//   try {
//     const post = await blogApi.getPostBySlug(slug);
//     return {
//       title: post.metaTitle || post.title,
//       description: post.metaDescription || post.description,
//       openGraph: {
//         title: post.title,
//         description: post.description,
//         images: [post.imageUrl],
//         type: "article",
//         publishedTime: post.publishedAt,
//         authors: [post.author],
//       },
//     };
//   } catch (error) {
//     return {
//       title: "Статья не найдена",
//     };
//   }
// }

// export default async function BlogPost({ params }: Props) {
//   const { slug } = await params;

//   try {
//     const post = await blogApi.getPostBySlug(slug);
//     return <BlogPostPage post={post} />;
//   } catch (error) {
//     if (error instanceof Error && error.message === "NOT_FOUND") {
//       notFound();
//     }
//     throw error;
//   }
// }

import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostPage from "@/features/blog/ui/BlogPostPage/BlogPostPage";
import { blogApi } from "@/features/blog/api";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await blogApi.getPostBySlug(slug);
    return {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        images: [post.imageUrl],
        type: "article",
        publishedTime: post.publishedAt,
        authors: [post.author],
      },
    };
  } catch (error) {
    return {
      title: "Статья не найдена",
    };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  try {
    const post = await blogApi.getPostBySlug(slug);
    return <BlogPostPage post={post} />;
  } catch (error) {
    if (error instanceof Error && error.message === "NOT_FOUND") {
      notFound();
    }

    // Если ошибка не 404, все равно показываем страницу с mock данными
    console.warn("Error fetching post, using fallback:", error);

    // Fallback на mock пост
    const mockPost = {
      id: 1,
      slug,
      title: "Пример статьи",
      description: "Это демонстрационная статья",
      content: "Полный текст статьи появится позже",
      readTime: "5 мин чтения",
      author: "Автор",
      category: "Общее",
      imageUrl:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      publishedAt: new Date().toISOString(),
      tags: ["пример"],
    };

    return <BlogPostPage post={mockPost as any} />;
  }
}
