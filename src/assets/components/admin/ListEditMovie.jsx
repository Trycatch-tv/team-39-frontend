
const ListEditMovie = () => {
  return (
    <>
      <div className="listMovies">
          <h2 className="listMovies__title">LISTADO DE PELICULAS</h2>
          <ul className="listMovies__ul">
            <li className="listMovies__li">
              <div className="listMovies__conteinerList">
                <h3 className="listMovies__titleItem">Avatar</h3>
                <div className="listMovies__ItemButtonContainer">
                  <button className="listMovies__deleteItemButton">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        fill="currentColor" 
                        d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
                      />
                    </svg>
                  </button>
                  <button className="listMovies__editItemButton">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        fill="currentColor" 
                        d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          </ul>
      </div>
    </>
  )
}

export default ListEditMovie