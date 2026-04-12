import type React from "react"
import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const viewport = {
  themeColor: '#3b82f6',
}

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

import type { Metadata } from 'next';

// This will be used for the browser tab title and other metadata
export const metadata: Metadata = {
  title: "Anup Pantha | Data Analyst | Nepal",
  description: "Fullstack Software Engineer from Nepal specializing in MERN Stack (MongoDB, Express.js, React, Node.js) and Golang development. Experienced in building scalable web applications, REST APIs, microservices, and cloud solutions. Check out my portfolio for projects, skills, and experience.",
  keywords: [
    "Anup Pantha",
"Data Analyst",
"Junior Data Analyst",
"Aspiring Data Analyst",
"Data Analyst USA",
"Data Analyst Portfolio",
"Business Data Analyst",
"Data Analytics",
"Data Analysis",
"Data Visualization",
"Data Cleaning",
"Data Wrangling",
"Exploratory Data Analysis",
"Statistical Analysis",
"Data-Driven Decision Making",
"Python Data Analyst",
"SQL Data Analyst",
"Excel Data Analyst",
"Power BI Developer",
"Tableau Developer",
"Pandas Developer",
"NumPy Developer",
"Matplotlib Developer",
"Seaborn Developer",
"Dashboard Developer",
"Business Intelligence Analyst",
"Reporting Analyst",
"KPI Dashboard Developer",
"Data Reporting",
"Database Analyst",
"PostgreSQL",
"MySQL",
"Data Querying",
"ETL Processes",
"Data Transformation",

"Cloud Data Analyst",
"AWS Data Analyst",
"Big Data Basics",
"Data Pipelines",

"Git",
"Agile",
"Remote Data Analyst",
"US Data Analyst",
"Entry Level Data Analyst",
"Data Analyst Projects",
"Data Analytics Portfolio"
  ],
  authors: [{ name: 'Anup Pantha' }],
  creator: 'Anup Pantha',
  publisher: 'Anup Pantha',
  metadataBase: new URL('https://www.anuppantha.com.np'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#3b82f6',
      },
    ],
  },
  manifest: '/site.webmanifest',
  // themeColor has been moved to viewport export
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sukraj Chaudhary | Portfolio',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.anuppantha.com.np',
    siteName: 'Anup Pantha | Portfolio',
    title: 'Anup Pantha | Data Analyst',
    description: 'Data Analyst specializing in building scalable data solutions, REST APIs, and microservices.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anup Pantha - Data Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anup Pantha | Data Analyst',
    description: 'Data Analyst focused on data cleaning, statistical analysis, and building interactive dashboards to support data-driven decision making and business insights."',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Anup Pantha',
    url: 'https://www.anuppantha.com.np',
    jobTitle: 'Cloud Engineer',
    description: 'Cloud Engineer specializing in building scalable cloud solutions, REST APIs, and microservices.',
    knowsAbout: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Golang',
      'JavaScript',
      'TypeScript',
      'Web Development',
      'Full Stack Development',
      'REST API',
      'Microservices',
    ],
    sameAs: [
      'https://github.com/anupdhojpantha',
      'https://www.linkedin.com/in/anup-pantha-587022324/',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
