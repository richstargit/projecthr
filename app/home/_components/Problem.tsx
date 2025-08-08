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
      img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    },
    {
      subject: 'HR screening',
      detail: 'The more resumes HR has to review manually, the harder it becomes to stay focused and great candidates might never even get noticed.',
      img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    },
    {
      subject: 'Interviews',
      detail: 'Interviewing is not just about asking questions it’s about listening, analyzing, and making judgments on the spot. When HR teams are tired or overwhelmed, even the best candidates might not get a fair assessment.',
      img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    },
    {
      subject: 'Problem 4',
      detail: 'ผู้สมัครต้องยื่น Resume และรอ HR เรียกโดยไม่มีกำหนดเวลา',
      img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    },
  ]

  return (
    <section id="problem" className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900">Problem</h2>
        <p className="mt-4 text-slate-900 max-w-xl mx-auto">
          Today's hiring 
          <br />36% of candidates wait 1-2 months for HR response
          <br />75% of applicants never hear back after applying
          <br />Recruiters scan resumes in 6-8 seconds while handling 200+ applicants per job
        </p>
      </div>
      
      <Carousel
      opts={{
        align: "start",
        loop: true
      }}
      className="w-[80%] lg:w-[70%] m-auto"
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>

    </section>
  )
}
