import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

export function TourReserve() {
  const router = useRouter();
  const { id } = router.query;

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState('');

  const totalPrice = (adults * 5000) + (children * 3000); // 例: 大人5000円、子供3000円

  const handleReserve = () => {
    // 予約処理をここに実装
    console.log(`予約: ${adults}人の大人、${children}人の子供、日付: ${date}`);
  };

  return (
    <div>
      <h1>ツアー予約: {id}</h1>
      <div>
        <label>
          大人の人数:
          <input type="number" value={adults} onChange={(e) => setAdults(Number(e.target.value))} />
        </label>
        <label>
          子供の人数:
          <input type="number" value={children} onChange={(e) => setChildren(Number(e.target.value))} />
        </label>
        <label>
          予約日:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <p>合計金額: ¥{totalPrice}</p>
        <Button onClick={handleReserve}>予約する</Button>
      </div>
    </div>
  );
}