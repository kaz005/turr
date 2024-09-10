"use client"

import React from 'react'
import Layout from '../../components/Layout'

const ActivitiesPage = () => {
  const events = [
    { date: '2023-07-15', title: 'クーチョーワークショップ', location: '那覇市民会館' },
    { date: '2023-08-20', title: '夏季演奏会', location: '沖縄県立博物館' },
    { date: '2023-09-10', title: 'クーチョー製作体験', location: '浦添市民センター' },
  ]

  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4 text-center">活動内容</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">研究活動</h3>
          <p className="mb-4">
            クーチョーの歴史、製作技法、演奏法について継続的な研究を行っています。
            また、古典楽譜の解読や新しい楽曲の創作にも取り組んでいます。
          </p>
          <h3 className="text-2xl font-semibold mb-2">ワークショップ</h3>
          <p className="mb-4">
            定期的にクーチョーの演奏ワークショップを開催し、
            伝統的な演奏技法の継承と普及に努めています。
            初心者から上級者まで、様々なレベルに対応したプログラムを提供しています。
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">演奏会</h3>
          <p className="mb-4">
            年に数回、クーチョーの魅力を広く伝えるための演奏会を開催しています。
            古典曲から現代曲まで、クーチョーの多様な表現力を紹介しています。
          </p>
          <h3 className="text-2xl font-semibold mb-2">イベントカレンダー</h3>
          <ul className="list-disc list-inside">
            {events.map((event, index) => (
              <li key={index} className="mb-2">
                {event.date}: {event.title} @ {event.location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default ActivitiesPage