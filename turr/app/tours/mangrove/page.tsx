import React from 'react';
import Link from 'next/link';

const MangroveTour = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">マングローブツアー</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-xl mb-4">美しいマングローブの森を探検する素晴らしい体験</p>
                <ul className="list-disc list-inside mb-4">
                    <li>料金: 大人 5,000円、子供 3,000円</li>
                    <li>所要時間: 約2時間</li>
                    <li>実施可能日: 毎日（天候により変更の可能性あり）</li>
                    <li>集合時間: 午前9時、午後2時</li>
                </ul>
                <p className="mb-4">
                    マングローブの生態系について学びながら、カヌーで静かな水路を進みます。
                    熟練ガイドが、この独特な環境に生息する動植物について詳しく説明します。
                </p>
                <Link href="/tour" className="text-blue-500 hover:underline">
                    ツアー一覧に戻る
                </Link>
            </div>
        </div>
    );
};

export default MangroveTour;
