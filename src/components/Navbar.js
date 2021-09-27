import React,{ } from 'react'



import Form from './pages/Form'


function Navbar(){

    // const  [click, setClick] =useState (false);
    // const handleClick = () => setClick (!click);

    return(
        <>
        {/* <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
            FORM
        </Link>

        <div className='menu-icon' onClick={handleClick}>
            <i className= {click ? 'fas fa-times' : 'fas fa-bars' }/>

        </div>
        </nav> */}


<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>N T I T A S</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="container">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Banking Solutions</a></li>
            <li><a class="dropdown-item" href="#">ERP</a></li>
            <li><a class="dropdown-item" href="#">E-commerce Solutions</a></li>
            <li><a class="dropdown-item" href="#">Mobile App Development</a></li>
            <li><a class="dropdown-item" href="#">Artificial Inteligence</a></li>
            <li><hr class="dropdown-divider"/></li>
            
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="./pages/Form">Contact Us</a>
        </li>
        


      </ul>
      </div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit" >Search</button>
        <button type="button" class="btn btn-primary" style ={{marginLeft:"10px"}} >LOGIN</button>
        <button type="button" class="btn btn-success" style ={{marginLeft:"10px"}}>RGISTER</button>
      </form>
    </div>


   


  </div>
</nav>

        </>

    );

}

export default Navbar;
