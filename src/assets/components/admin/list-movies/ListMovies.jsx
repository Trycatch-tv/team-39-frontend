import FooterListAdmin from "../FooterListAdmin"
import ListEditMovie from "../ListEditMovie"
import NavBar from "../NavBar"
import SearchAdmin from "../SearchAdmin"
import '../Admin.css'

const ListMovies = () => {

    return (
        <>
            <div className="containerAdmin">
                <NavBar />
                <SearchAdmin />
                <h2 className="containerAdmin__title">LISTADO DE PELICULAS</h2>
                <ListEditMovie />
                <FooterListAdmin />
            </div>
        </>  
    )
}

export default ListMovies