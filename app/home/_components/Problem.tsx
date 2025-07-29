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
      subject: 'Problem 1',
      detail: 'ผู้สมัครต้องยื่น Resume และรอ HR เรียกโดยไม่มีกำหนดเวลา',
      img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    },
    {
      subject: 'Problem 2',
      detail: 'HR ต้องคัดกรองใบสมัครจำนวนมาก ทำให้ทำงานเดิมซ้ำ ๆ',
      img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    },
    {
      subject: 'Problem 3',
      detail: 'ผู้สมัครต้องเดินทางไปสัมภาษณ์ เสียเวลาและค่าใช้จ่ายผู้สมัครต้องเดินทางไปสัมภาษณ์ เสียเวลาและค่าใช้จ่ายผู้สมัครต้องเดินทางไปสัมภาษณ์ เสียเวลาและค่าใช้จ่ายผู้สมัครต้องเดินทางไปสัมภาษณ์ เสียเวลาและค่าใช้จ่ายผู้สมัครต้องเดินทางไปสัมภาษณ์ เสียเวลาและค่าใช้จ่ายผู้สมัครต้องเดินทางไปสัมภาษณ์ เสียเวลาและค่าใช้จ่ายผู้สมัครต้องเดินทางไปสัมภาษณ์ เสียเวลาและค่าใช้จ่าย',
      img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    },
    {
      subject: 'Problem 4',
      detail: 'ผู้สมัครต้องยื่น Resume และรอ HR เรียกโดยไม่มีกำหนดเวลา',
      img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    },
    {
      subject: 'Problem 5',
      detail: 'HR ต้องคัดกรองใบสมัครจำนวนมาก ทำให้ทำงานเดิมซ้ำ ๆ',
      img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    },
    {
      subject: 'Problem 6',
      detail: 'ผู้สมัครต้องเดินทางไปสัมภาษณ์ เสียเวลาและค่าใช้จ่าย',
      img: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp',
    },
  ]

  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
      breakpoint: 1280, // Desktop ขึ้นไป
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
      {
        breakpoint: 768, // จอ <= 768px (iPad แนวตั้ง และ tablet อื่น ๆ)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640, // มือถือทั่วไป
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="problem" className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900">Problem</h2>
        <p className="mt-4 text-slate-900 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sequi dolore doloremque laboriosam incidunt dignissimos nisi aspernatur eos fugiat commodi possimus, voluptas, earum animi totam debitis, officiis fugit inventore voluptatum?
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
          <CarouselItem key={idx} className="md:basis-1/2 xl:basis-1/3">
            <div key={idx} className='p-5'>
                <div className="card bg-base-100 shadow-lg my-8">
                  <figure className="h-60 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.subject} className="w-full h-full object-cover" />
                  </figure>
                  <div className="card-body h-60 lg:h-80">
                    <h2 className="card-title">{item.subject}</h2>
                    <p>{item.detail}</p>
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
