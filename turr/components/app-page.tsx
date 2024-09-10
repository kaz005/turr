'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image';

const tours = [
  { id: "mangrove-canoe", title: "マングローブカヌー体験", image: "/images/mangrove-canoe.jpg", price: "¥5,000~" },
  { id: "snorkeling", title: "シュノーケリングツアー", image: "/images/snorkeling.jpg", price: "¥7,000~" },
  { id: "stargazing", title: "星空観察ツアー", image: "/images/stargazing.jpg", price: "¥4,000~" },
]

export function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            石垣島ツアーズ
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="#tours" className="text-gray-600 hover:text-blue-600">
              ツアー
            </Link>
            <Link href="/company" className="text-gray-600 hover:text-blue-600">
              会社概要
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600">
              お問い合わせ
            </Link>
          </nav>
          <Button variant="outline" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">石垣島で最高の思い出を</h1>
        <section id="tours" className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">人気のツアー</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={tour.image} alt={tour.title} className="w-full h-48 object-cover" width={500} height={300} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                  <p className="text-gray-600">{tour.price}</p>
                  <Link href={`/tours/${tour.id}`} className="mt-4 w-full inline-block">
                    <Button>詳細を見る</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="about" className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">会社概要</h2>
          {/* 会社概要の内容 */}
        </section>
        <section id="contact" className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">お問い合わせ</h2>
          {/* お問い合わせの内容 */}
        </section>
      </main>
    </div>
  )
}