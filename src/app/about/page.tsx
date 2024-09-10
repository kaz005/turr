"use client"
import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4 text-center">クーチョーとは？</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">歴史</h3>
          <p className="mb-4">
            クーチョーは17世紀頃に中国から伝来したとされる弓奏楽器です。
            琉球王国時代から継承され、沖縄の伝統音楽に欠かせない楽器となりました。
          </p>
          <h3 className="text-2xl font-semibold mb-2">音楽的特徴</h3>
          <p className="mb-4">
            クーチョーは独特の哀愁を帯びた音色が特徴で、
            沖縄の古典音楽や民謡で重要な役割を果たしています。
            その繊細な音色は、沖縄の風土や文化を表現するのに適しています。
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">楽器の構造</h3>
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="クーチョーの構造"
            width={400}
            height={300}
            className="mx-auto mb-4 rounded-lg shadow-lg"
          />
          <p className="mb-4">
            クーチョーは胴体、棹、弓から構成されています。
            胴体は椰子の実や木材で作られ、棹には2本の弦が張られています。
            弓は馬の尾の毛で作られ、独特の奏法で演奏されます。
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage