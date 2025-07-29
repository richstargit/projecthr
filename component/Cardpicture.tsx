export default function Cardpicture() {
  return (
    <div className="flex flex-col lg:flex-row w-full border-2 shadow-lg rounded-xl lg:min-h-120 min-h-50">
      <div className="md:basis-[40%] w-full">
        <img src="/image/C_mainpage.png" alt="" className="object-cover h-full p-2" />
      </div>

      <div className="md:basis-[60%] w-full p-4">
        <h1 className="text-4xl font-bold">hello</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta corrupti magnam ad
          itaque expedita, eum voluptatem ratione non molestias labore! Doloribus autem corrupti
          qui quos ipsam. Omnis pariatur perferendis fuga?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta corrupti magnam ad
          itaque expedita, eum voluptatem ratione non molestias labore! Doloribus autem corrupti
          qui quos ipsam. Omnis pariatur perferendis fuga?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta corrupti magnam ad
          itaque expedita, eum voluptatem ratione non molestias labore! Doloribus autem corrupti
          qui quos ipsam. Omnis pariatur perferendis fuga?
        </p>
      </div>
    </div>
  )
}
