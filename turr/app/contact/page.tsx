import ContactForm from '@/components/ContactForm'
import React from 'react'

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
            <ContactForm />
        </div>
    );
}