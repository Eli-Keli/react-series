// react-router-dom
import { Link, useNavigate, useRouteError } from "react-router-dom"

// Library
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid"

function Error() {
  const error = useRouteError()
  const navigate = useNavigate()

  return (
    <div className="error">
      <h1>Uh oh! We got a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button
          className="btn"
          onClick={() => navigate(-1)}
        >
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link
          to="/"
          className="btn btn--dark"
        >
          <HomeIcon width={20} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Error