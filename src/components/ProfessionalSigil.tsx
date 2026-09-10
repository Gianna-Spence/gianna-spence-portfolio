import Image from "next/image";

type ProfessionalSigilProps = {
  activeNodeKey?: string;
  previewNodeKey?: string | null;
  travelFromKey?: string | null;
  travelToKey?: string | null;
  travelId?: string | null;
  className?: string;
};

export default function ProfessionalSigil({
  activeNodeKey = "home",
  previewNodeKey = null,
  travelFromKey = null,
  travelToKey = null,
  travelId = null,
  className = "",
}: ProfessionalSigilProps) {
  return (
    <div
      className={`professional-sigil ${className}`.trim()}
      data-active-node={activeNodeKey}
      data-preview-node={previewNodeKey ?? undefined}
      data-travel-from={travelFromKey ?? undefined}
      data-travel-to={travelToKey ?? undefined}
      data-travel-id={travelId ?? undefined}
    >
      <Image
        className="professional-sigil__art"
        src="/assets/professional-sigil-master.svg"
        alt=""
        aria-hidden="true"
        width={1100}
        height={1430}
        priority
        draggable={false}
      />
    </div>
  );
}