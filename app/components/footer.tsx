import { COMPANY_LEGAL_NAME, COPYRIGHT_YEAR } from "@/config/constants"

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full border-t border-[#0048BA]/30 dark:border-[#1e2b63] bg-background/80 backdrop-blur-sm">
      <div className="flex h-14 items-center px-4">
        <div className="flex flex-1 items-center justify-between">
          <div className="text-sm text-[#0048BA] dark:text-white">
            <span className="font-semibold">Launching in Q2, 2025</span>
          </div>
          <div className="text-sm text-[#0048BA] dark:text-white">
            <span className="font-semibold">
              © {COMPANY_LEGAL_NAME}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

