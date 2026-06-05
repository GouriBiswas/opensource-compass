interface Props {
  title: string;
  url: string;
  labels: string[];
}

export default function IssueCard({
  title,
  url,
  labels,
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      className="block rounded-xl border p-5 hover:border-blue-500"
    >
      <h3 className="mb-3 text-lg font-semibold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {labels.map(
          (label) => (
            <span
              key={label}
              className="rounded-full border px-3 py-1 text-sm"
            >
              {label}
            </span>
          )
        )}
      </div>
    </a>
  );
}