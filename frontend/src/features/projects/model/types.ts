// // types/project.ts - общие типы
// export interface ProjectBase {
//   id: string;
//   title: string;
//   description: string;
//   category: string;
//   tags: string[];
//   image: string;
//   slug: string;
// }

// export interface ProjectDetail extends ProjectBase {
//   fullDescription: string;
//   client: string;
//   duration: string;
//   technologies: string[];
//   challenges: string[];
//   solutions: string[];
//   results: string[];
// }

// export type Project = ProjectBase; // Для карточек портфолио



// frontend/src/features/portfolio/model/types.ts
export interface Project {
  _id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  tags: string[];
  image: string;
  slug: string;
  client: string;
  duration: string;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  createdAt: string;
  updatedAt: string;
}

// Для главной страницы (превью)
export interface ProjectPreview extends Pick<Project, 
  '_id' | 'title' | 'description' | 'category' | 'tags' | 'image' | 'slug'
> {}