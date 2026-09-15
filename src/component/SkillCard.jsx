
function SkillCard({ name, desc, icon }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <img
          className="skill-icon-img"
          src={icon}
          alt={name}
        />
      </div>

      <h3 className="skill-name">{name}</h3>
      <p className="skill-desc">{desc}</p>
    </div>
  );
}

export default SkillCard;