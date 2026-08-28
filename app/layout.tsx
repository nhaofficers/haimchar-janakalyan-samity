import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'হাইমচর উপজেলা জনকল্যাণ সমিতি, ঢাকা',description:'মানব কল্যাণে নিবেদিত একটি অলাভজনক, অরাজনৈতিক ও দাতব্য সংগঠন।'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="bn"><body>{children}</body></html>}
