import { MdOutlineSportsRugby } from "react-icons/md";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="bg-neutral-950 flex justify-center items-center text-white h-screen w-screen transition duration-300">
      <MdOutlineSportsRugby className="w-24 h-24" />
    </div>
  );
}
