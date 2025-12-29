import { Location } from "iconsax-reactjs";

type AddressSectionProps = { addresses: readonly string[] };

function AddressSection({ addresses }: AddressSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1">
        <Location variant="Bold" />
        <div className="font-semibold">آدرس</div>
      </div>
      {addresses.map((address, index) => (
        <div key={index} className="pr-7.5 text-sm font-normal">
          {address}
        </div>
      ))}
    </div>
  );
}

export default AddressSection;
