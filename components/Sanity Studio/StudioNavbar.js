import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "@/i18n/navigation";

function StudioNavbar(props) {
  return (
    <div>
      <div className="flex items-center justify-between p-5 ">
        <Link
          href="/"
          className="flex items-center textDominantcolor hover:text-yellow-600 duration-300 transition"
        >
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 " />
          Zurück zur Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
