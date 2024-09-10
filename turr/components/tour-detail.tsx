import Link from 'next/link';
import { useState } from 'react';

// Tour型を定義
interface Tour {
  id: number;
  name: string;
  description: string;
  price: number;
}

const TourDetail = ({ tour }: { tour: Tour }) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState('');
  const totalPrice = (adults * 5000) + (children * 3000); // 例: 大人5000円、子供3000円

  const handleReservation = () => {
    console.log('予約情報:', {
      tourId: tour.id,
      date,
      adults,
      children,
      totalPrice
    });
    alert('予約が完了しました！');
  };

  return (
    <div>
      <h1>{tour.name || 'ツアー名がありません'}</h1>
      <p>価格: ¥{tour.price || '価格情報がありません'}</p>
      <Link href="/tours">ツアー一覧に戻る</Link>
      <h2>予約</h2>
      <label>
        大人:
        <input type="number" value={adults} onChange={(e) => setAdults(Number(e.target.value))} />
      </label>
      <label>
        子供:
        <input type="number" value={children} onChange={(e) => setChildren(Number(e.target.value))} />
      </label>
      <p>合計金額: ¥{totalPrice}</p>
      <label>
        日付:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button onClick={handleReservation}>予約する</button>
    </div>
  );
};

export default TourDetail;
