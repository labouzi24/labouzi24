import { Link } from "react-router-dom";

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-white/50 sm:text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="flex items-center gap-x-2">
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "font-semibold text-white" : ""}>{item.label}</span>
            )}
            {!isLast && <span className="text-white/25">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
