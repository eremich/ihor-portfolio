type PlaceholderProps = {
  label?: string;
  ratio?: "wide" | "square" | "portrait";
};

const ratioClass: Record<NonNullable<PlaceholderProps["ratio"]>, string> = {
  wide: "aspect-[16/10]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export function Placeholder({ label = "Image", ratio = "wide" }: PlaceholderProps) {
  return (
    <figure className="my-10">
      <div
        className={`flex w-full items-center justify-center rounded-md border border-dashed border-line bg-paper-raised/60 ${ratioClass[ratio]}`}
      >
        <span className="text-[12px] tracking-[0.14em] text-ink-faint uppercase">
          {label}
        </span>
      </div>
    </figure>
  );
}
