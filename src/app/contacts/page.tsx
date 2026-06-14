export default function Contacts() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        Контакты
      </h1>
      <p className="text-zinc-600 mb-10">
        Напишите мне — обсудим ваш проект, сроки и стоимость. Отвечаю в течение
        дня.
      </p>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 mb-8">
        <form
          action="https://formspree.io/f/ВАШ_КОД"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1"
            >
              Ваше имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium mb-1"
            >
              Telegram или email
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              required
              className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-1"
            >
              Описание задачи
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-xl border border-zinc-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            Отправить
          </button>
        </form>
        <p className="text-xs text-zinc-400 mt-3 text-center">
          * После отправки я свяжусь с вами в Telegram
        </p>
      </div>

      <div className="text-center text-sm text-zinc-600">
        <p>
          Или пишите напрямую:{" "}
          <a
            href="https://t.me/your_nickname"
            className="text-blue-600 font-medium hover:underline"
          >
            @your_nickname
          </a>
        </p>
      </div>
    </div>
  );
}
