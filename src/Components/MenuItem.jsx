import React from 'react'
import Sidebar from '../Pages/global/Sidebar'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const MenuItemWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 25px;
    list-style: none;
    height: 50px;
    width: 100%;
    cursor: pointer;
`
const MenuItemLink= styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    width: 100%;
    color: #e1e9fc;

    &:hover, &:active {
        background: #ffffff;
        color: #121B28;
        border-radius: 12px;
    }
`
const MenuItemLabel = styled.span`
    font-size: 18px;
    padding-left: 5px;
`

const MenuItem = (props) => {
  return (
    <>
        <MenuItemWrapper>
            <MenuItemLink to={props.item.path} activeStyle={{background: '#ffffff', color: '#121B28', borderRadius: '12px'}}>
                {props.item.icon}
                <MenuItemLabel>
                    {props.item.title}
                </MenuItemLabel>
            </MenuItemLink>
        </MenuItemWrapper>
    </>
  )
}

export default MenuItem