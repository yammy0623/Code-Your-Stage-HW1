import { Link } from "react-router-dom";
import User01 from "../../images/qbur.png";
import User02 from "../../images/machima.png";
import User03 from "../../images/bao.jpeg";
import User04 from "../../images/pipi.jpeg";

function DashboardAvatars() {
  return (
    // Four circle img
    <ul className="flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px">
      {[User01, User02, User03, User04].map((imgUrl, index) => (
        // `map` is an important function. You should ask GPT what it is.
        <li key={imgUrl}>
          <Link className="block" to="#0">
            <img
              className="w-9 h-9 rounded-full"
              src={imgUrl}
              width="36"
              height="36"
              alt={`User ${index}`}
            />
          </Link>
        </li>
      ))}
      <li>
        <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500 shadow-sm transition duration-150 ml-2">
          {/* " + " button */}
          <span className="sr-only">Add new user</span>
          <svg className="w-4 h-4 fill-current text-school" viewBox="0 0 16 16">
            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
          </svg>
        </button>
      </li>
    </ul>
  );
}

export default DashboardAvatars;
