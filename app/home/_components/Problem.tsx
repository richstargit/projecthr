'use client'
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export default function ProblemCarousel() {
  const sliderRef = useRef<any>(null);

  const problemList = [
    {
      subject: 'Submit Resume',
      detail: 'Candidates must submit their resumes and wait indefinitely for HR to respond.',
      img: '/image/submitProblem.png',
    },
    {
      subject: 'HR screening',
      detail: 'The more resumes HR has to review manually, the harder it becomes to stay focused and great candidates might never even get noticed.',
      img: '/image/HRProblem.png',
    },
    {
      subject: 'Interviews',
      detail: 'Interviewing is not just about asking questions. It’s about listening, analyzing, and making judgments on the spot. When HR teams are tired or overwhelmed, even the best candidates might not get a fair assessment.',
      img: '/image/InterviewProblem.png',
    },
    {
      subject: 'Submit Resume',
      detail: 'Candidates must submit their resumes and wait indefinitely for HR to respond.',
      img: '/image/submitProblem.png',
    },
    {
      subject: 'HR screening',
      detail: 'The more resumes HR has to review manually, the harder it becomes to stay focused and great candidates might never even get noticed.',
      img: '/image/HRProblem.png',
    },
    {
      subject: 'Interviews',
      detail: 'Interviewing is not just about asking questions. It’s about listening, analyzing, and making judgments on the spot. When HR teams are tired or overwhelmed, even the best candidates might not get a fair assessment.',
      img: '/image/InterviewProblem.png',
    },
  ]

  return (
    <section id="problem" className="py-16 bg-gray-100">
      <div className="text-center mb-12">
  <h2 className="text-4xl font-bold text-slate-900 mb-6">Problem</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
    <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col h-full">
      <p className="text-5xl font-bold">36%</p>
      <p className="mt-2 text-slate-700">of candidates wait 1–2 months just to hear from HR</p>
      <a
    href="https://www.jobscore.com/articles/candidate-experience-statistics"
    target="_blank"
    className="mt-auto block text-xs text-slate-400 hover:text-slate-600 underline"
  >
    Source: JobScore, “Candidate Experience Statistics You Must Know in 2025”
  </a>
    </div>
    <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col h-full">
      <p className="text-5xl font-bold">75%</p>
      <p className="mt-2 text-slate-700">never hear back after applying</p>
      <a
    href="https://www.prnewswire.com/news-releases/seventy-five-percent-of-workers-who-applied-to-jobs-through-various-venues-in-the-last-year-didnt-hear-back-from-employers-careerbuilder-survey-finds-191990281.html"
    target="_blank"
    className="mt-auto block text-xs text-slate-400 hover:text-slate-600 underline"
  >
    Source: CareerBuilder nationwide survey (PR Newswire), “Seventy-Five Percent of Workers… Didn’t Hear Back”
  </a>
    </div>
    <div className="p-6 bg-white shadow-lg rounded-2xl flex flex-col h-full">
  <p className="text-5xl font-bold">200+</p>
  <p className="mt-2 text-slate-700">
    applicants per job and recruiters spend only 6–8 seconds scanning each resume
  </p>
  <a
    href="https://www.bu.edu/com/files/2018/10/TheLadders-EyeTracking-StudyC2.pdf"
    target="_blank"
    className="mt-auto block text-xs text-slate-400 hover:text-slate-600 underline"
  >
    Source: Boston University
  </a>
  <a
    href="https://www.inc.com/peter-economy/19-interesting-hiring-statistics-you-should-know.html"
    target="_blank"
    className="mt-auto block text-xs text-slate-400 hover:text-slate-600 underline"
  >
    Source: Inc.com
  </a>
</div>
  </div>
</div>

      
      <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-[90%] lg:w-[70%] m-auto"
    >
      <CarouselContent>
        {problemList.map((item, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/2 xl:basis-1/3">
            <div key={idx} className='p-5'>
                <div className="card bg-white shadow-lg my-8">
                  <figure className="h-60 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.subject} className="w-full h-full object-cover" />
                  </figure>
                  <div className="card-body h-70 lg:h-80">
                    <h1 className="card-title text-2xl">{item.subject}</h1>
                    <p className=" text-base xl:text-xl">{item.detail}</p>
                  </div>
                </div>
              </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0 opacity-50 md:opacity-100 md:left-[-25]" />
      <CarouselNext className="right-0 opacity-50 md:opacity-100 md:right-[-25]" />
    </Carousel>

    </section>
  )
}
