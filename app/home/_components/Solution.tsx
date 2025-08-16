'use client'
import Cardpicture from "@/component/Cardpicture"
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from "react"
import { ChevronDown, MoveDown } from "lucide-react"
import Cardvideo from "@/component/Cardvideo"

export default function Soultion() {
    useEffect(() => {
        AOS.init({ duration: 1500 })
    })

    const SolutationData = [
        {
            title: "Smart Profile Matching",
            image: "/image/C_match.png",
            detail: "The AI system accurately matches candidates' resumes with the job requirements by instantly assessing their suitability. Users can easily upload their resumes for evaluation. This enables faster and more efficient candidate screening, reducing the workload of HR personnel in manually reviewing resumes."
        },
        {
            title: "Interview Scheduling",
            image: "/image/C_interview.png",
            detail: "Candidates can quickly book an interview slot that fits their schedule."
        },
        {
            title: "AI Virtual Interviews",
            image: "/image/C_interviewai.png",
            video: "/video/interviewai.mp4",
            detail: "AI conducts personalized interviews with each candidate and analyzes their responses in real time to assess skills, thinking, and overall suitability, enabling more accurate decision-making."
        },
        {
            title: "Intelligence Dashboards",
            image: "/image/C_dashboard.png",
            detail: "The system provides summarized data and in-depth reports on candidates, enabling HR to make well-informed and accurate hiring decisions."
        },
    ]

    return (
        <section id="product" className="mt-32 mb-32">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-bold text-[#274254]">Hirenz</h1>
            </div>
            <h2 className="text-4xl font-bold text-[#274254] text-center">Smart Hiring Solution for recruitment</h2>
            <p
                className="mt-6 text-lg md:text-xl w-[60%] mx-auto text-center leading-loose tracking-normal text-gray-700"
            >
                Hirenz is an intelligent recruitment platform designed to elevate traditional hiring, which is
                often slow, manual, and inefficient, through automation and powerful AI agents.
            </p>

            <p
                className="mt-2 text-lg md:text-xl w-[60%] mx-auto text-center leading-loose tracking-normal text-gray-700"
            >
                Hirenz streamlines every stage of the hiring journey into a seamless and intuitive experience for
                both HR teams and candidates.
            </p>

            <p
                className="mt-2 text-lg md:text-xl w-[60%] mx-auto text-center leading-loose tracking-normal text-gray-700"
            >
                Hirenz not only delivers a next-gen hiring solution, but also significantly reduces recruitment
                costs and ensures organizations connect with the right people, boosting team productivity and
                accelerating growth.
            </p>
            <img className="w-[98%] lg:w-[60%] object-cover mx-auto mt-5 rounded-xl shadow-xl mb-15" src="/image/preview.gif" />
            <div className="flex justify-center mt-5 mb-5">
                <a href="#contact" className="bg-[#274254] text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition shadow-xl">
                    Request Demo
                </a>
            </div>
            <div className="overflow-x-hidden">
                {SolutationData.map((data, index) => {
                    return <div key={index}><div data-aos={index % 2 == 0 ? "fade-right" : "fade-left"} className={`w-[80%] xl:w-[55%] mx-auto relative mt-5 ${index % 2 == 0 ? "right-0 lg:right-25" : "left-0 lg:left-25"}`}>
                        {data.video?<Cardvideo title={data.title} video={data.video} detail={data.detail}></Cardvideo>: <Cardpicture
                            title={data.title}
                            image={data.image}
                            detail={data.detail}></Cardpicture>}
                    </div>
                    {index==SolutationData.length-1?<></>:<div data-aos="fade-up" data-aos-duration="250">
<ChevronDown
  className="w-15 h-15 text-[#274254] p-2 rounded-full shadow-lg mx-auto mt-15 mb-15 animate-bounce-smooth"
/>

                        </div>}
                    </div>
                })}
                <div className="mt-15"></div>
            </div>

        </section>
    )
}
