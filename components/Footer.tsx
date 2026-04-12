import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-amber-500/10 py-3 px-4 sm:px-6 md:px-0">
      <div className="container flex flex-col items-center justify-between gap-4  md:flex-row md:gap-0">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} Anup Pantha. All rights reserved.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 items-center">
          <Link href="#" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-amber-500">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-amber-500">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
} 