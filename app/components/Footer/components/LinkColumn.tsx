type LinkColumnProps = {
  title: string;
  links: readonly { label: string; href: string }[];
};

function LinkColumn({ title, links }: LinkColumnProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-lg font-black">{title}</div>
      {links.map((link, index) => (
        <a
          key={`${link.href}-${index}`}
          href={link.href}
          className="text-sm font-normal hover:underline"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default LinkColumn;
