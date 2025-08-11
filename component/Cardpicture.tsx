
type CardpictureProps = {
  title: string;
  image: string;
  detail: string;
};

export default function Cardpicture({ title, image, detail } :CardpictureProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full border-2 shadow-lg rounded-xl">
      <div className="md:w-[60%] w-full">
        <img src={image} alt="" className="object-cover p-2" />
      </div>

      <div className="md:w-[60%] w-full p-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-5 text-xl">
          {detail}
        </p>
      </div>
    </div>
  )
}
