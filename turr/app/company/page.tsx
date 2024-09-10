import Link from 'next/link';
import React from 'react';

const Company = () => {
    return (
        <div>
            <h1>会社概要</h1>
            <p>ここに会社の情報が入ります。</p>
            <Link href="/">ホームに戻る</Link>
        </div>
    );
};

export default Company;