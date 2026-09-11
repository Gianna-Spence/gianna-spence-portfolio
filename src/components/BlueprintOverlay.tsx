import Image from "next/image";

type BlueprintOverlayProps = {
  variant?: "violet" | "cyan" | "amber";
};

const overlayStyles = {
  violet: { src: "/celestial-field/blueprint/blueprint-01.svg", className: "opacity-[0.12]" },
  cyan: { src: "/celestial-field/blueprint/blueprint-02.svg", className: "opacity-[0.1]" },
  amber: { src: "/celestial-field/blueprint/blueprint-01.svg", className: "opacity-[0.08]" },
};

export default function BlueprintOverlay({ variant = "violet" }: BlueprintOverlayProps) {
  const overlay = overlayStyles[variant];

  return (
    <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
      <Image
        src={overlay.src}
        alt=""
        draggable={false}
        width={1100}
        height={1430}
        className={`absolute left-1/2 top-1/2 w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 ${overlay.className}`}
      />
    </div>
  );
}
