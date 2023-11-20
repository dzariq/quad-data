"use client"

import Logo from '@/components/Header/Logo'
import Menu from '@/components/Header/Menu'

export default function Header(props) {
    return (
        <header>
          <Logo {...props} />
          <Menu />
          {props.name} ({props.age})
          <br/>
          {props.children}
        </header>
    )
}