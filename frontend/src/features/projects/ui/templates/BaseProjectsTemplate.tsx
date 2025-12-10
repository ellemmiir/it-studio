import { Project } from "@/features/projects/model/types";
// import { RelatedProjects } from "@/features/projects/ui/components/RelatedProjects";

interface BaseProjectTemplateProps {
  project: Project;
  children?: React.ReactNode;
}

export const BaseProjectTemplate = ({
  project,
  children,
}: BaseProjectTemplateProps) => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
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
            {/* Можно передавать кастомный контент через children */}
            {children || (
              <>
                <div className="mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-96 w-full rounded-lg object-cover"
                  />
                </div>

                <div className="prose mb-8 max-w-none">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    Project Overview
                  </h2>
                  <p className="leading-relaxed text-gray-700">
                    {project.fullDescription}
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Боковая панель (общая для всех проектов) */}
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
            </div>
          </div>
        </div>

        {/* Связанные проекты */}
        <div className="mt-16">
          {/* <RelatedProjects slug={project.slug} /> */}
        </div>
      </div>
    </div>
  );
};
