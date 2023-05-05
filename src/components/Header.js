
import React , {useEffect, useState} from 'react';

const Header = () => {
  const [theme , setTheme] = useState(false)

  const handleClick = () =>{
    setTheme(!theme)
  }
  useEffect(() =>{
    if(theme === true){
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
    }
  })

  return(
  <header className='home-header'>
    <h1>
      <span>“</span> Blog <span>”</span>
    </h1>
    <p>
      An awesome space is where productivity meets play, <br /> 
      where learning meets leisure,and where daily updates keep us inspired and engaged.
   
    </p>
    <div>
      <button  className = 'ldbutton' onClick = {handleClick}>{theme?
      "Dark":"Light"}</button>
    </div>
  </header>
  )
  };
export default Header;

// awesome place to make oneself <br /> productive and entertained through
// daily updates.