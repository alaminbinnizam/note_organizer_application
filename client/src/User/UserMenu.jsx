import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
       <div className="text-center">
                <div className="list-group">
                    <h4>Main Menu</h4>
                    <NavLink to="/user/create-category" className="list-group-item list-group-item-action">Create Category</NavLink>
                    <NavLink to="/user/create-note" className="list-group-item list-group-item-action">Create Blog</NavLink>
                </div>
            </div>
    </>
  )
}

export default UserMenu
