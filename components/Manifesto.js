// import imagetest from '../public/assets/test.gif'
// import Image from 'next/image'

export const Manifesto = ({ information }) => {
  const description = information[0].fields.description.content[0].content

  return (
      <div className='border page-content'>
         {/* <img src={require('../public/assets/test.gif')} /> */}
        {/* <Image width={200} height={200} src={imagetest} unoptimized={imageSource.endsWith('.gif')}  /> */}
        <h2>{information[0].fields.title}</h2>
        {description.map((item) => <p key={item.value}>{item.value}</p>)}
      </div>
  )
}