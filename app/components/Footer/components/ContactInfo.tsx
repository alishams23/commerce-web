import { Call } from "iconsax-reactjs";

type ContactInfoProps = {
  phoneNumbers: readonly {
    label: string;
    href: string;
  }[];
};

function ContactInfo({ phoneNumbers }: ContactInfoProps) {
  return (
    <div className="col-span-2 flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <Call variant="Bold" />
        <div>شماره تماس پشتیبانی</div>
      </div>
      {phoneNumbers.map((phone) => (
        <a
          key={phone.href}
          href={phone.href}
          className="self-end text-sm hover:underline"
        >
          {phone.label}
        </a>
      ))}
    </div>
  );
}

export default ContactInfo;
