type TCategoryDotsProps = {
  count: number;
};

function CategoryDots({ count }: TCategoryDotsProps) {
  return (
    <div className="flex gap-2 md:hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-2 w-2 bg-white" />
      ))}
    </div>
  );
}

export default CategoryDots;
