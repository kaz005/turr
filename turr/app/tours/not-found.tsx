import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <h2>ページが見つかりません</h2>
            <p>リクエストされたリソースは見つかりませんでした。</p>
            <Link href="/">ホームに戻る</Link>
        </div>
    );
}