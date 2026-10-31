const ProjectStills = ({ folder, images }) => {
    if (!images || images.length === 0) return null;

    return (
        <div className="project-stills-block">
            {images.map((name) => (
                <img
                    key={name}
                    src={`${process.env.PUBLIC_URL}/stills/projects/${folder}/${name}`}
                    alt={name}
                    className="project-still-image"
                    loading="lazy"
                />
            ))}
        </div>
    )
}

export default ProjectStills;
