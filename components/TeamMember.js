export const TeamMember = ({ member }) => {
    const imageUrl = member.fields.thumbnail ? member.fields.thumbnail.fields.file.url : null;

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const rndInt = randomIntFromInterval(1, 4)

    return (
        <div className='border-info member'>
            <div className='flex-1'>
                <div className='relative'>
                    <div className={`border-image border-image${rndInt}`}></div>
                    <img loading='lazy' src={imageUrl} alt={member.fields.thumbnail.fields.description} />
                </div>
            </div>
            <div className='flex-2'>
                <h3>{member.fields.name}</h3>
                {member.fields.description.content.map(text => <p>{text.content[0].value}</p>)}
            </div>
        </div>
    )
}
