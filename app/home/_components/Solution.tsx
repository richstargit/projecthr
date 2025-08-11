'use client'
import Cardpicture from "@/component/Cardpicture"
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from "react"

export default function Soultion() {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    })

    const SolutationData = [
        {
            title:"AI Screening",
            image:"/image/C_match.png",
            detail:"The AI system accurately matches candidates' resumes with the job requirements by instantly assessing their suitability. Users can easily upload their resumes for evaluation. This enables faster and more efficient candidate screening, reducing the workload of HR personnel in manually reviewing resumes."
        },
        {
            title:"Auto-Scheduling",
            image:"/image/C_interview.png",
            detail:"The system automatically schedules virtual interviews for each candidate, eliminating the need for manual coordination and allowing HR teams to focus more on evaluating candidate quality."
        },
        {
            title:"AI Interviews",
            image:"/image/C_interviewai.png",
            detail:"AI conducts personalized interviews with each candidate and analyzes their responses in real time to assess skills, thinking, and overall suitability, enabling more accurate decision-making."
        },
        {
            title:"Dashboard & Insight Reports",
            image:"/image/C_dashboard.png",
            detail:"The system provides summarized data and in-depth reports on candidates, enabling HR to make well-informed and accurate hiring decisions."
        },
    ]

    return (
        <section id="product" className="mt-32 mb-32">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-slate-900">Product</h1>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 text-center">Hirenz</h2>
            <img className="w-[98%] lg:w-[60%] object-cover mx-auto mt-5 rounded-xl shadow-xl mb-15" src="/image/C_mainpage.png" />
            <div className="flex justify-center mt-5 mb-5">
                <a href="https://hire-sight-demo.vercel.app/" className="bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition shadow-xl">
            Try Demo
          </a>
            </div>
            <div className="overflow-x-hidden">
                {SolutationData.map((data,index)=>{
                    return <div key={index} data-aos={index%2==0? "fade-right":"fade-left"} className={`w-[80%] xl:w-[55%] mx-auto relative mt-5 ${index%2==0?"right-0 lg:right-25":"left-0 lg:left-25"}`}>
                    <Cardpicture 
                    title={data.title}
                    image={data.image}
                    detail={data.detail}></Cardpicture>
                    </div>
                })}
                <div className="mt-15"></div>
            </div>

        </section>
    )
}
