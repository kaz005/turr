import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [language, setLanguage] = React.useState('ja')

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    // Here you would typically change the route to the localized version
    // For simplicity, we're just changing the state
  }

  return (
    <div className="min-h-screen bg-orange-50 text-gray-800">
      <header className="bg-orange-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">クーチョー研究・保存会</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:underline">ホーム</Link></li>
              <li><Link href="/about" className="hover:underline">クーチョーとは？</Link></li>
              <li><Link href="/activities" className="hover:underline">活動内容</Link></li>
              <li><Link href="/support" className="hover:underline">支援方法</Link></li>
              <li><Link href="/contact" className="hover:underline">お問い合わせ</Link></li>
            </ul>
          </nav>
          <div>
            <button onClick={() => changeLanguage('ja')} className={`mr-2 ${language === 'ja' ? 'font-bold' : ''}`}>日本語</button>
            <button onClick={() => changeLanguage('en')} className={`mr-2 ${language === 'en' ? 'font-bold' : ''}`}>English</button>
            <button onClick={() => changeLanguage('zh')} className={language === 'zh' ? 'font-bold' : ''}>中文</button>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-orange-600 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          &copy; 2023 クーチョー研究・保存会. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Layout