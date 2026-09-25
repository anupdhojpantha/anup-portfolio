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
  title: "Anup Pantha | QA Automation Engineer | Nepal",
  description: "Aspiring QA Automation Engineer specializing in Playwright, TypeScript, and API test automation. Experienced in building automated test suites, CI/CD pipelines, and data validation with a background in software development and data analysis. Check out my portfolio for projects, skills, and experience.",
  keywords: [
    "Anup Pantha",
"QA Automation Engineer",
"Junior QA Automation Engineer",
"Aspiring QA Automation Engineer",
"QA Automation Engineer USA",
"QA Automation Portfolio",
"SDET",
"Software Development Engineer in Test",
"Quality Engineer",
"Test Automation Engineer",
"Playwright",
"Playwright Automation",
"Selenium WebDriver",
"TypeScript QA",
"Python QA Automation",
"API Testing",
"Postman",
"REST API Testing",
"Page Object Model",
"Test Automation Framework",
"CI/CD Testing",
"GitHub Actions",
"Manual Testing",
"Exploratory Testing",
"Regression Testing",
"Bug Reporting",
"Test Case Design",
"SQL for QA",
"Data Validation",
"ETL Testing",
"PostgreSQL",
"MySQL",
"Git",
"Agile Testing",
"Remote QA Engineer",
"US QA Engineer",
"Entry Level QA Automation Engineer",
"QA Automation Projects",
"Software Testing Portfolio"
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
    title: 'Anup Pantha | Portfolio',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.anuppantha.com.np',
    siteName: 'Anup Pantha | Portfolio',
    title: 'Anup Pantha | QA Automation Engineer',
    description: 'QA Automation Engineer specializing in Playwright, TypeScript, API testing, and CI/CD-integrated test suites.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Anup Pantha - QA Automation Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anup Pantha | QA Automation Engineer',
    description: 'QA Automation Engineer focused on Playwright test automation, API testing, and building reliable CI/CD-integrated test suites.',
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
    jobTitle: 'QA Automation Engineer',
    description: 'Aspiring QA Automation Engineer specializing in building automated test suites with Playwright and TypeScript, validating APIs, and integrating tests into CI/CD pipelines.',
    knowsAbout: [
  'Playwright',
  'Selenium WebDriver',
  'TypeScript',
  'Python',
  'API Testing',
  'Test Automation',
  'CI/CD',
  'GitHub Actions',
  'SQL',
  'Page Object Model',
  'Manual Testing',
  'Exploratory Testing',
  'Postman',
  'Data Validation',
  'ETL Testing',
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
