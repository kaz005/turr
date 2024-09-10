import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button } from 'components/ui/button'

const ReservePage = () => {
  const router = useRouter()
  const { id } = router.query

  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [date, setDate] = useState('')

  const pricePerAdult = 5000 // 大人1人あたりの料金
  const pricePerChild = 3000 // 子供1人あたりの料金

  const totalPrice = (adults * pricePerAdult) + (children * pricePerChild)

  const handleReserve = () => {
    // 予約処理をここに追加
    console.log(`予約: ${adults}人の大人、${children}人の子供、日付: ${date}`)
    alert('予約が完了しました！')
  }

  return (
    <div>
      <h1>予約ページ: {id}</h1>
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
      <Button onClick={handleReserve}>予約する</Button>
    </div>
  )
}

export default ReservePage
