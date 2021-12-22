export const Manifesto = ({ information }) => {
  const description = information[0].fields.description.content[0].content

  return (
      <div className='border page-content'>
        <h2>{information[0].fields.title}</h2>
        {description.map((item) => <p key={item.value}>{item.value}</p>)}
      </div>
  )
}