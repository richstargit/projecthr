'use client'
import ItemCard from "@/component/ItemCard"
export default function Home() {
  const item = [
  {
    name: 'item1',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    price: 45
  },
  {
    name: 'item2',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    price: 40
  },
  {
    name: 'item3',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    price: 50
  },
  {
    name: 'item1',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    price: 45
  },
  {
    name: 'item2',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    price: 40
  },
  {
    name: 'item3',
    image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    price: 50
  }
]
  return (
    <div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {item.map((item,index)=>(
        <ItemCard key={index} itemName={item.name} price={item.price}></ItemCard>
      ))}
      </div>
    </div>
  )
}
