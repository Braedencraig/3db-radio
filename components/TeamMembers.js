import { TeamMember } from '../components/TeamMember'

export const TeamMembers = ({ teamMembers }) => {
  const newArr = [...teamMembers, ...teamMembers]
  return (
    <div className='team-members page-content'>
      {newArr.map((member, i) => (
        <TeamMember key={`${member.sys.id}${i}`} member={member} />
      ))}
    </div>
  )
}
