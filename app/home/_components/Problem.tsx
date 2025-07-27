'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useRef } from "react";

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
      detail: 'ผู้สมัครต้องเดินทางไปสัมภาษณ์ เสียเวลาและค่าใช้จ่าย',
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
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
        <h2 className="text-4xl font-bold text-slate-900">ปัญหาที่เราพบ</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          เราเน้นค้นหาและแก้ปัญหาหลักในการสรรหาและสัมภาษณ์งาน
        </p>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="bg-white shadow-lg rounded-full flex w-12 h-12 items-center justify-center cursor-pointer"
        >
          <GoArrowLeft size={24} />
        </button>
        <div className="slider-container w-3/4">
          <Slider ref={sliderRef} {...settings}>
            {problemList.map((item, idx) => (
              <div key={idx} className='p-5'>
                <div className="card bg-base-100 shadow-lg my-8">
                  <figure className="h-60 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.subject} className="w-full h-full object-cover" />
                  </figure>
                  <div className="card-body h-80">
                    <h2 className="card-title">{item.subject}</h2>
                    <p>{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <button
        onClick={() => sliderRef.current?.slickNext()}
        className="bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
      >
        <GoArrowRight size={24} />
      </button>
        </div>
      </div>
    </section>
  )
}
