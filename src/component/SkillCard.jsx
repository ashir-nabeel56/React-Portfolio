
function SkillCard({name, desc, icon }) {
      //  const { } =data
    // console.log("skill=>", data);
    
  return (
    <div className="skill-card">
      
      <div className="skill-icon">
        {/* <img src={require("./assist/icon/logo.png")} alt={ name} /> */}
              <img className="skill-name" src={icon}/>

      </div>

      <h3 className="skill-name">{name}</h3>
      <p className="skill-desc">{desc}</p>
    </div>
  );
}

export default SkillCard;