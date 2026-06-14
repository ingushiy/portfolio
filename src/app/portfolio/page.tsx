export default function Portfolio() {
  const projects = [
    {
      title: "Скоро",
      description:
        "Здесь появятся мои первые работы. Следите за обновлениями!",
      status: "soon",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Портфолио
      </h1>
      <p className="text-zinc-600 mb-10">
        Примеры моих работ. Каждый проект — это кейс, который решает конкретную
        задачу.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200"
          >
            <div className="w-full h-32 bg-zinc-100 rounded-xl mb-4 flex items-center justify-center text-zinc-400 text-sm">
              {project.status === "soon"
                ? "Скоро здесь будет проект"
                : "Превью"}
            </div>
            <h3 className="font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-zinc-600">{project.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">
          Хотите быть первым в портфолио?
        </h2>
        <p className="text-zinc-600 mb-4">
          Сделаю вам сайт или бота со скидкой в обмен на кейс
        </p>
        <a
          href="/contacts"
          className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 transition-colors"
        >
          Обсудить проект
        </a>
      </div>
    </div>
  );
}
