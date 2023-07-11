import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const MenuItemWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 25px;
    list-style: none;
    height: 50px;
    cursor: pointer;
`
const MenuItemLink= styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    width: 100%;
    color: #e1e9fc;

    &:hover {
        color: #9CFCD8;
    }

    &.active {
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
        <MenuItemWrapper onClick={props.setSelected(props.item.title)}>
            <MenuItemLink to={props.item.path}>
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