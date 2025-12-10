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


export interface ProjectPreview extends Pick<Project, 
  '_id' | 'title' | 'description' | 'category' | 'tags' | 'image' | 'slug'
> {}
