const Credits = ({ production_company, directed_by, creative_direction }) => {
    return (
        <div className="main-project-viewer-credits">
            {production_company && <p>Production Company: {production_company}</p>}
            {directed_by && <p>Directed by: {directed_by}</p>}
            {creative_direction && <p>Creative Direction: {creative_direction}</p>}
        </div>
    );
}

export default Credits;