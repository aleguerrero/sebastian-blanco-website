import './Main.css';
import ProjectsMenu from "../../Components/ProjectsMenu";

// if (process.env.REACT_APP_LA_MODE === "1") {
//     delete videos[3]; // quitar el de Debut
// }

const Main = () => {

    return (
        <div className="main-container">
            <ProjectsMenu />
        </div>

    );
}

export default Main;