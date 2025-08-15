
type CardvideoProps = {
  title: string;
  video: string;
  detail: string;
};

export default function Cardvideo({ title, video, detail } :CardvideoProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full border-2 shadow-lg rounded-xl">
      <div className="md:w-[75%] w-full mx-auto">
        <video src={video} playsInline controls className="w-full h-auto p-2 rounded-xl" />
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
