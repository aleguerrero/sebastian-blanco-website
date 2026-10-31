import ProjectsMenu from '../../Components/ProjectsMenu';
import diary from './../../diary.json';
import './Diary.css'

const Diary = () => {
    return (
        <div className='diary-container'>
            <ProjectsMenu />
            <div className='diary-container-block'>
                <div className='diary-block'>
                    <div className='diary-inside-block'>
                        {diary.map((p) => (
                            <div key={p.photo}>
                                {(p.title || p.date) && (
                                    <div>
                                        {p.title && <span style={{ fontWeight: "bold" }}>{p.title}</span>}
                                        {p.title && p.date && " - "}
                                        {p.date}
                                    </div>
                                )}
                                {p.description && (
                                    <div style={{ fontWeight: 200, marginTop: "10px" }}>
                                        {p.description}
                                    </div>
                                )}
                                <div className='diary-picture-block'>
                                    <img className="diary-picture-img" alt={p.title || ""} src={`${process.env.PUBLIC_URL}/${p.photo}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Diary;
