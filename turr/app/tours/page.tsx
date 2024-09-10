import Link from 'next/link';
import React from 'react';

const Tour = () => {
    return (
        <div>
            <h1>ツアー</h1>
            <p>ここにツアーの情報が入ります。</p>
            <Link href="/">ホームに戻る</Link>
        </div>
    );
};

export default Tour;