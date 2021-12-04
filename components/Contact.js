export const Contact = ({ contactInfo }) => {
  return (
    <div className='contact'>
      Get in touch {' '}
      <a href='mailto:'>{contactInfo[0].fields.email}</a>
    </div>
  )
}
