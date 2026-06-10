import defaultProjectImage from "../assist/logo.png";

function ProjectCard({ data }) {
  const videoUrl = data.video || "";
  const imageUrl = data.image || defaultProjectImage;
  const isVideoFile = /\.(mp4|webm|ogg|mov)$/i.test(videoUrl);
  const isYouTube = /(?:youtube\.com\/watch\?v=|youtu\.be\/)/i.test(videoUrl);
  const iframeSrc = isYouTube
    ? videoUrl.replace(/watch\?v=/, "embed/").replace(/youtu\.be\//, "youtu.be/embed/")
    : videoUrl;
  const useImagePreview = !data.image || (!isVideoFile && !isYouTube);

  return (
    <div className="project-card">
      <div className="project-video">
        {useImagePreview ? (
          <img src={imageUrl} alt={data.title || "Project preview"} className="project-image" />
        ) : isVideoFile ? (
          <video src={videoUrl} autoPlay loop muted playsInline controls />
        ) : (
          <iframe
            src={iframeSrc}
            title={data.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="project-video-frame"
          />
        )}
      </div>

      <div className="project-content">
        <h2>{data.title}</h2>
        <p>{data.desc}</p>

        <a href={videoUrl || "#"} target="_blank" rel="noopener noreferrer" className="project-btn">
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;