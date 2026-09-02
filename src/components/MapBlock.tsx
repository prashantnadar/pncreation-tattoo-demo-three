import { site } from "../data/site";
import { BtnAnchor } from "./Btn";
import { ArrowIcon } from "./Icons";

export function MapBlock({ title = "Find the studio" }: { title?: string }) {
  return (
    <div className="edge">
      <iframe
        title={`Map showing ${site.legalName} at ${site.studioAddress}`}
        src={site.googleMapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[280px] w-full border-0 sm:h-[380px]"
      />
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border p-4 sm:p-6">
        <p className="text-sm text-muted-foreground">
          <span className="sr-only">{title}. </span>
          {site.studioAddress}
        </p>
        <BtnAnchor href={site.googleMapsDirectionsUrl} external variant="outline">
          Get Directions <ArrowIcon className="h-4 w-4" />
        </BtnAnchor>
      </div>
    </div>
  );
}
