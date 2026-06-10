import { Skills } from '../utils/data'
import SkillCard from './SkillCard'

function SkillsSection() {
  return (
    <div className="skills-section">
      
      <h1 className="skill">Skills </h1>

      <div className="flex-baba"> 
        {
          Skills.map((skill) => {
            return (
              <div className="skill-wrapper" key={skill.id}>
                <SkillCard 
                  name={skill.name} 
                  desc={skill.desc} 
                  icon={skill.icon}
                />
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default SkillsSection