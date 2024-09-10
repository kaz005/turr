"use client"
import React from 'react'
import Layout from '../../components/Layout'

const SupportPage = () => {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-4 text-center">保存活動への支援方法</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-2">寄付</h3>
          <p className="mb-4">
            クーチョーの保存と研究活動を支援するための寄付を受け付けています。
            皆様のご支援は、楽器の修復、研究資料の収集、ワークショップの開催などに活用されます。
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            寄付をする
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">会員登録</h3>
          <p className="mb-4">
            会員になることで、定期的な活動報告や会報の受け取り、
            イベントへの優先参加などの特典があります。
            年会費：一般会員 5,000円、学生会員 2,000円
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
            会員登録
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-2">ボランティア参加</h3>
        <p className="mb-4">
          イベントの運営補助や広報活動など、様々な形でボランティアとして
          参加いただけます。クーチョーに興味のある方、沖縄の文化保存に
          貢献したい方のご参加をお待ちしています。
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          ボランティア登録
        </button>
      </div>
    </Layout>
  )
}

export default SupportPage