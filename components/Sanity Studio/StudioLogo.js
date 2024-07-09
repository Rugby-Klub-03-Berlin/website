import Image from "next/image";

function StudioLogo(props) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center">
      <Image
        width={40}
        height={40}
        className="rounded-full object-cover p-2"
        src="/images/logo.png"
        alt="Logo"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default StudioLogo;
