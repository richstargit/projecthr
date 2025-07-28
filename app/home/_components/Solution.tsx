'use client'
import Cardpicture from "@/component/Cardpicture"

export default function Soultion() {

    return (
        <section id="product" className="mt-32 mb-32">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900">Product</h2>
                <p className="mt-4 text-slate-900 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi dolore doloremque laboriosam incidunt dignissimos nisi aspernatur eos fugiat commodi possimus, voluptas, earum animi totam debitis, officiis fugit inventore voluptatum?
                </p>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 text-center">Hirenz</h2>
            <img className="w-[60%] min-w-[400px] object-cover mx-auto mt-5 rounded-xl shadow-xl mb-15" src="/image/C_mainpage.png" />

            <Cardpicture></Cardpicture>


        </section>
    )
}
