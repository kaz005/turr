'use client'

import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

export function ReservationPage() {
  const router = useRouter();
  const { tourId } = router.query; // URLからツアーIDを取得
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで予約処理を行う
    console.log(`予約: ${name}, ${email}, ツアーID: ${tourId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">予約ページ</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">名前</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <div>
          <label className="block mb-1">メールアドレス</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded w-full p-2"
            required
          />
        </div>
        <Button type="submit">予約する</Button>
      </form>
    </div>
  );
}