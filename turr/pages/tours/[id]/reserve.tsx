import { useRouter } from 'next/router';

export default function TourReserve() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>ツアー予約: {id}</h1>
      {/* 予約フォームや詳細情報をここに追加 */}
    </div>
  );
}