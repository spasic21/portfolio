const ProjectImage = ({imageSrc, projectTitle, className}) => {
    const isVideo = path => path.toLowerCase().endsWith('.mp4');

    return isVideo(imageSrc) ? (
        <video
            className={className}
            style={{borderRadius: '20px'}}
            autoPlay
            loop
            muted
            playsInline
            key={projectTitle}
        >
            <source src={imageSrc} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    ) : (
        <img
            src={imageSrc}
            alt={projectTitle}
            className={className}
            style={{borderRadius: '20px'}}
        />
    );
}

export default ProjectImage;