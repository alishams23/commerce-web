import IconStart from "@/components/icons/IconStart";

function GalleryHeader() {
  return (
    <div className="mb-15 flex flex-col items-center justify-center gap-6">
      <div className="text-2xl font-bold lg:text-4xl">گالری تولیدی ما</div>
      <IconStart size={24} />
    </div>
  );
}
export default GalleryHeader;
