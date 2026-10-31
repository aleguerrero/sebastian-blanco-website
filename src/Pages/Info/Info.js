import "./Info.css";
import info from "./info.json";

const Info = () => {
    return (
        <div className="info-container">
            <div className="info-container-block">
                <div className="info-block bio-block">
                    <div className="info-title-block">
                        Bio
                    </div>
                    <div className="info-items-block">
                        {info.bio}
                    </div>
                </div>
                <div className="photos-block">
                    {info.images.map((p, i) => (
                        <img className="info-photo-img" src={p} alt={i}></img>
                    ))}
                </div>
                <div className="info-block">
                    <div className="info-title-block">
                        Clients
                    </div>
                    <div className="info-items-block">
                        <ul>
                            {info.clients.map((c) => (
                                <li>{c}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="info-block">
                    <div className="info-title-block">
                        Directors
                    </div>
                    <div className="info-items-block">
                        <ul>
                            {info.directors.map((d) => (
                                <li>{d}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="info-block">
                    <div className="info-title-block">
                        Press
                    </div>
                    <div className="info-items-block">
                        <ul>
                            {info.press.map((p) => (
                                <li><a href={p.url} target="_blank" rel="noreferrer">{p.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="info-block">
                    <div className="info-title-block">
                        Email
                    </div>
                    <div className="info-items-block">
                        <a href={`mailto:${info.email}`}>{info.email}</a>
                    </div>
                    <div className="info-title-block socials-block">
                        Socials
                    </div>
                    <div className="info-items-block">
                        {info.socials.map((s) => (
                            <li><a href={s.url} target="_blank" rel="noreferrer">{s.name}</a></li>
                        ))}
                    </div>
                </div>
                <div className="info-block">
                    <div className="info-title-block">
                        Representation
                    </div>
                    <div className="info-items-block">
                        {info.representation.agency}
                        <br />
                        LATAM: <a href={`mailto:${info.representation.email}`}>{info.representation.latam_email}</a>
                        <br />
                        EU: <a href={`tel:${info.representation.phone_number}`}>{info.representation.eu_email}</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Info;