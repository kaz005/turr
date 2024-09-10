"use client"
import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'

const HomePage = () => {
  return (
    <Layout>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">沖縄の伝統楽器『クーチョー（胡弓）』</h2>
        <Image
          src="/placeholder.svg?height=300&width=400"
          alt="クーチョー（胡弓）"
          width={400}
          height={300}
          className="mx-auto mb-4 rounded-lg shadow-lg"
        />
        <p className="mb-4">
          クーチョーは沖縄の伝統的な弓奏楽器で、その独特な音色は沖縄の文化的遺産の重要な一部です。
          私たちの会は、この貴重な楽器の研究と保存に取り組んでいます。
        </p>
        <p className="mb-4">
          沖縄の豊かな文化を象徴するクーチョーの音楽を次世代に継承し、
          その魅力を広く世界に発信することが私たちの使命です。
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          活動内容を見る
        </button>
      </div>
    </Layout>
  )
}

export default HomePage