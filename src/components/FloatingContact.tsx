import { mailHref, telHref, whatsappHref } from "../data/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

const item =
  "inline-flex h-12 flex-1 items-center justify-center gap-2 border border-border bg-surface text-[11px] font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent sm:h-11 sm:w-11 sm:flex-none";

export function FloatingContact() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-px border-t border-border bg-background/95 p-2 backdrop-blur sm:inset-x-auto sm:top-1/2 sm:right-0 sm:bottom-auto sm:-translate-y-1/2 sm:flex-col sm:gap-2 sm:border-0 sm:border-y sm:border-l sm:bg-transparent sm:p-2"
      role="complementary"
      aria-label="Quick contact"
    >
      <a href={telHref} className={item} aria-label="Call the studio">
        <PhoneIcon className="h-5 w-5" />
        <span className="sm:hidden">Call</span>
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className={item}
        aria-label="Message the studio on WhatsApp"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="sm:hidden">WhatsApp</span>
      </a>
      <a href={mailHref} className={item} aria-label="Email the studio">
        <MailIcon className="h-5 w-5" />
        <span className="sm:hidden">Email</span>
      </a>
    </div>
  );
}
