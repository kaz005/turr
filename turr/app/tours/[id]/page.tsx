"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

type TourData = {
  title: string;
  image: string;
  price: string;
  duration: string;
  availableDays: string;
  meetingTimes: string;
  description: string;
};

const toursData: Record<string, TourData> = {
  "mangrove-canoe": {
    title: "マングローブカヌー体験",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
    price: "¥5,000~",
    duration: "約2時間",
    availableDays: "毎日（天候により変更の可能性あり）",
    meetingTimes: "午前9時、午後2時",
    description: "美しいマングローブの森を探検する素晴らしい体験。マングローブの生態系について学びながら、カヌーで静かな水路を進みます。熟練ガイドが、この独特な環境に生息する動植物について詳しく説明します。",
  },
  "snorkeling": {
    title: "シュノーケリングツアー",
    image: "https://images.unsplash.com/photo-1544551763-92ab472cad5f?w=500&h=300&fit=crop",
    price: "¥7,000~",
    duration: "約3時間",
    availableDays: "毎日（天候により変更の可能性あり）",
    meetingTimes: "午前10時、午後3時",
    description: "透き通る海でのシュノーケングを楽しみながら、美しい海洋生物を観察します。初心者から経験者まで、誰でも安全に楽しめるツアーです。",
  },
  "stargazing": {
    title: "星空観察ツアー",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=500&h=300&fit=crop",
    price: "¥4,000~",
    duration: "約2時間",
    availableDays: "金・土・日",
    meetingTimes: "午後7時",
    description: "澄んだ夜空の下で星空を観察しながら、天文学の基礎知識を学びます。専用の天体望遠鏡で詳細な観察も可能です。",
  },
};

type Props = {
  params: {
    id: string;
  };
};

const TourDetail: React.FC<Props> = ({ params }) => {
  const { id } = params;
  const tour = toursData[id];

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState('');

  const pricePerAdult = 5000;
  const pricePerChild = 3000;
  const totalPrice = (adults * pricePerAdult) + (children * pricePerChild);

  const handleReserve = () => {
    console.log(`予約: ${adults}人の大人、${children}人の子供、日付: ${date}`);
    alert('予約が完了しました！');
  };

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">ツアーが見つかりません</h1>
        <Link href="/tours" className="text-blue-500 hover:underline">
          ツアー一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{tour.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <Image src={tour.image} alt={tour.title} className="w-full h-48 object-cover mb-4" width={500} height={300} />
        <p className="text-xl mb-4">{tour.description}</p>
        <ul className="list-disc list-inside mb-4">
          <li>料金: {tour.price}</li>
          <li>所要時間: {tour.duration}</li>
          <li>実施可能日: {tour.availableDays}</li>
          <li>集合時間: {tour.meetingTimes}</li>
        </ul>
        <div>
          <h2 className="text-2xl font-bold mb-4">予約</h2>
          <div>
            <label>大人の人数:</label>
            <input type="number" value={adults} onChange={(e) => setAdults(Number(e.target.value))} min="1" />
          </div>
          <div>
            <label>子供の人数:</label>
            <input type="number" value={children} onChange={(e) => setChildren(Number(e.target.value))} min="0" />
          </div>
          <div>
            <label>日付:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <p>合計料金: ¥{totalPrice}</p>
          <button onClick={handleReserve} className="bg-blue-500 text-white px-4 py-2 rounded">予約する</button>
        </div>
        <Link href="/tours" className="text-blue-500 hover:underline">
          ツアー一覧に戻る
        </Link>
      </div>
    </div>
  );
};

export default TourDetail;
