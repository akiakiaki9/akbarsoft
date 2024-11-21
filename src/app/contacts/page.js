import React from 'react';
import ContactsComp from './ContactsComp';
import Footer from '../components/footer/footer';
import Head from 'next/head';
import Navbar from '../components/navbar/navbar';

export default function Contacts() {
    const metadata = {
        title: 'Contacts of Akbar Soft - Get in Touch Today',
        description: 'Contact Akbar Soft in Bukhara. Ask any questions about services.',
        keywords: 'Akbar Soft, contacts, Web, Web Site, website, Bukhara',
        robots: 'index, follow',
        canonical: 'https://akbarsoft.uz/contacts',
        ogTitle: 'Contacts of Akbar Soft',
        ogDescription: 'Get in touch for information about Akbar Soft. We are located in Bukhara.',
        ogUrl: 'https://akbarsoft.uz/contacts',
        ogType: 'website',
        ogLocale: 'en_US',
        twitterCard: 'summary_large_image',
        twitterTitle: 'Contacts Akbar Soft',
        twitterDescription: 'Contact Akbar Soft for information about web services. We are located in Bukhara.',
    };

    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content={metadata.keywords} />
                <meta name="robots" content={metadata.robots} />
                <link rel="canonical" href={metadata.canonical} />
                <meta property="og:title" content={metadata.ogTitle} />
                <meta property="og:description" content={metadata.ogDescription} />
                <meta property="og:url" content={metadata.ogUrl} />
                <meta property="og:type" content={metadata.ogType} />
                <meta property="og:locale" content={metadata.ogLocale} />
                <meta name="twitter:card" content={metadata.twitterCard} />
                <meta name="twitter:title" content={metadata.twitterTitle} />
                <meta name="twitter:description" content={metadata.twitterDescription} />
            </Head>
            <Navbar />
            <ContactsComp />
            <Footer />
        </div>
    );
};