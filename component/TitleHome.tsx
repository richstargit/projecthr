
export default function TitleHome() {
  return (
    <section className="h-120 flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
          Hirenz
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptates mollitia, ab officiis ea impedit maiores nostrum ducimus fugiat amet reprehenderit at pariatur. Sed quam harum illum similique incidunt nam!
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="https://hire-sight-demo.vercel.app/" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition">
            Try Now
          </a>
        </div>
      </div>
    </section>
  )
}
