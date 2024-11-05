

const Navbar = ({setCategory}) => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-link" onClick={()=>setCategory("technology")}>Technology</a>
      <a className="navbar-link" onClick={()=>setCategory("business")}>Business</a>
      <a className="navbar-link" onClick={()=>setCategory("health")}>Health</a>
      <a className="navbar-link" onClick={()=>setCategory("sports")}>Sports</a>
      <a className="navbar-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
    </div>
  </nav>
    )
  }
  
  export default Navbar