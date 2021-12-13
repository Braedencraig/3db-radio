import { Nav } from '../components/Nav'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Nav />
      <div>{children}</div>
    </div>
  )
}
