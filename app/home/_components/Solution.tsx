'use client'
import Cardpicture from "@/component/Cardpicture"
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from "react"

export default function Soultion() {
    useEffect(()=>{
        AOS.init({ duration: 1500})
    })
    return (
        <section id="product" className="mt-32 mb-32">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-slate-900">Product</h1>
                <p className="mt-4 text-slate-900 max-w-xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi dolore doloremque laboriosam incidunt dignissimos nisi aspernatur eos fugiat commodi possimus, voluptas, earum animi totam debitis, officiis fugit inventore voluptatum?
                </p>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 text-center">Hirenz</h2>
            <img className="w-[60%] min-w-[400px] object-cover mx-auto mt-5 rounded-xl shadow-xl mb-15" src="/image/C_mainpage.png" />

            <div data-aos="fade-right" className="w-[55%] mx-auto relative mt-5 right-0 lg:right-25"><Cardpicture></Cardpicture></div>
            <div data-aos="fade-left" className="w-[55%] mx-auto mt-5 relative left-0 lg:left-25"><Cardpicture></Cardpicture></div>
            <div data-aos="fade-right" className="w-[55%] mx-auto relative mt-5 right-0 lg:right-25"><Cardpicture></Cardpicture></div>

        </section>
    )
}
