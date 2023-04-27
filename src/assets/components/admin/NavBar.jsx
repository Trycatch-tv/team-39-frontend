
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__contProfile">
          <img src="/img/profile_img.jpg" alt="profile" />
        </div>
        <h1 className="navbar__title">FlickFinder</h1>
        <button className="navbar__hamburguer">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="50" 
            height="50" 
            viewBox="0 0 24 24"
          >
            <path 
              fill="#3c6e71" 
              d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm7-7a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-8Z"/></svg>
        </button>
      </div>
    </>
  )
}

export default NavBar