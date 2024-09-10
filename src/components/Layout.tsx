import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        {/* ヘッダーコンテンツ */}
      </header>
      <nav>
        {/* ナビゲーションコンテンツ */}
      </nav>
      <main className="flex-grow">
        {/* メインコンテンツ */}
        {children}
      </main>
      <footer>
        {/* フッターコンテンツ */}
      </footer>
    </div>
  )
}

export default Layout