
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__contProfile">
          <img src="/img/profile_img.jpg" alt="profile" />
        </div>
        <h1 className="navbar__title">FlickFinder</h1>
        <button className="navbar__hamburguer">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </>
  )
}

export default NavBar