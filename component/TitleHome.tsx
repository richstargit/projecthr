
import { GoArrowDown } from "react-icons/go";

export default function TitleHome() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
          Hirenz
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-900">
          An AI-powered digital hiring platform, crafted for forward-thinking HR teams that value speed, accuracy, and smart decision-making.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="https://hire-sight-demo.vercel.app/" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition shadow-xl">
            Try Now
          </a>
        </div>
        <div className="mt-30 flex justify-center">
          <div className="flex items-center animate-bounce justify-center w-12 h-12 rounded-full shadow-xl">
            <a href="#problem"><GoArrowDown className="text-2xl" /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
