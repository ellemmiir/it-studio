// frontend/src/features/portfolio/ui/ProjectDetailed/ProjectDetailed.tsx
import Link from "next/link";
import { Project } from "../../model/types";

interface Props {
  project: Project;
}

export const ProjectDetailed = ({ project }: Props) => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Хлебные крошки */}
        <nav className="mb-8">
          <Link href="/" className="text-purple-600 hover:text-purple-800">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link
            href="/portfolio"
            className="text-purple-600 hover:text-purple-800"
          >
            Projects
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{project.title}</span>
        </nav>

        {/* Заголовок проекта */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {project.title}
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Основной контент */}
          <div className="lg:col-span-2">
            {/* Изображение проекта */}
            <div className="mb-8 flex h-96 items-center justify-center rounded-lg bg-gray-200">
              <span className="text-gray-500">
                Project Image: {project.title}
              </span>
            </div>

            {/* Полное описание */}
            <div className="prose mb-8 max-w-none">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Project Overview
              </h2>
              <p className="leading-relaxed text-gray-700">
                {project.fullDescription}
              </p>
            </div>

            {/* Детали проекта */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Вызовы */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Challenges
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              {/* Решения */}
              <div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Solutions
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  {project.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-lg bg-gray-50 p-6">
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                Project Details
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Client</h4>
                  <p className="text-gray-700">{project.client}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Duration</h4>
                  <p className="text-gray-700">{project.duration}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Category</h4>
                  <p className="text-gray-700 capitalize">
                    {project.category.replace("-", " ")}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900">Technologies</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Результаты */}
              <div className="mt-8">
                <h4 className="mb-4 font-semibold text-gray-900">Results</h4>
                <ul className="space-y-3">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-purple-600" />
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Теги */}
              <div className="mt-8">
                <h4 className="mb-4 font-semibold text-gray-900">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
