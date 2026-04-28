const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_006e9fe6-7cc9-4d12-be84-af7ad4c21208/artifacts/4ta4xjyk_Screenshot%202026-04-28%20224222.png";

export default function Footer() {
  return (
    <footer
      className="border-t border-[hsl(215_50%_16%/0.2)] bg-[hsl(var(--secondary))]"
      data-testid="site-footer"
    >
      <div className="container-x py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Note În Demisol" className="h-10 w-10 object-contain" />
          <div>
            <div className="font-display text-xl">Note În Demisol</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-[hsl(215_30%_35%)] mt-1">
              Trupă Folk · Est. 2024
            </div>
          </div>
        </div>
        <div className="text-sm text-[hsl(215_30%_28%)] md:text-center max-w-sm md:mx-auto">
          „Coboară cu noi în demisol — acolo unde acordurile sunt mai sincere.”
        </div>
        <div className="text-xs uppercase tracking-[0.22em] text-[hsl(215_30%_35%)] md:text-right">
          © {new Date().getFullYear()} Note În Demisol
          <br />
          <span className="normal-case tracking-normal text-[hsl(215_30%_45%)]">
            Toate drepturile rezervate.
          </span>
        </div>
      </div>
    </footer>
  );
}
