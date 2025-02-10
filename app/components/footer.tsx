import { COMPANY_LEGAL_NAME, COPYRIGHT_YEAR } from "@/config/constants"

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 w-full border-t bg-background/80 backdrop-blur-sm">
      <div className="flex h-14 items-center px-4">
        <div className="flex flex-1 items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold">Status: Operational</span>
          </div>
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold">
              © {COPYRIGHT_YEAR} {COMPANY_LEGAL_NAME}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

