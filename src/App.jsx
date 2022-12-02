import { useState } from 'react'
import './App.css'
import Logo from './img/1.jpg';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function App() {
  const [active, setAcitve] = useState("");

  return (
    <div className="App">
      <div className="buttonsWrapper">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="buttons">
          <div className={`button ${
            active === "Edit Space" ? 'active' : ""
          }`} onClick={() => setAcitve("Edit Space")}>
            <EditOutlinedIcon />
            <span>
              Edit space</span>
          </div>
          <div className={`button ${
           active === "Add Items" ? 'active' : ""
          }`} onClick={() => setAcitve("Add Items")}>
            <AddOutlinedIcon/>
            <span>
              Add Items</span>
          </div>
          <div className={`button ${
           active === "Shop Space" ? 'active' : ""
          }`} onClick={() => setAcitve("Shop Space")}>
            <ShoppingBagOutlinedIcon/>
            <span>
              Shop space</span>
          </div>
          <div className={`button ${
        active === "My Space" ? 'active' : ""
          }`} onClick={() => setAcitve("My Space")}>
            <MoreHorizOutlinedIcon/>
            <span>
              My spaces</span>
          </div>
        </div>
      </div>
      
        {active && (
          <div className="title">
            <div className="titleWrapper">
            <h1>{active}</h1>
            <CloseOutlinedIcon onClick={() => setAcitve("")}/>
            </div>
          </div>
        )}
      
    </div>
  )
}

export default App
