// type rafce for template

import React from 'react'
import "../styles/PreNavbar.css"

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" 
width="20"><path d="m480-560-56-56 63-64H320v-80h167l-64-64 57-56 160 160-160 160ZM280-80q-33 
0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 
0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-
80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H2
80q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>

const PreNavbar = () => {
  return (
    <div className="preNav">
        <div>
        <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ↓</a> <span></span>
        </div>
        <div>
            <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
            <a href="https://in.account.xiaomi.com/fe/service/register?_locale=en_IN
            &source=&region=IN&sid=i18n_in_pc_pro&qs=callback%3Dhttps%253A%252F%252F
            store.mi.com%252Fin%252Flogin%252Fcallback%253Ffollowup%253Dhttps%25253A%
            25252F%25252Fwww.mi.com%25252Fin%25252Fservice%25252Fauthorized_stores%
            25252F%2526sign%253DMzUxNDIzMjE0MWY1YjBiMDBmOTYyYjYzNjg1MzUxNTZhMTg3MWU1OQ%
            252C%252C%26sid%3Di18n_in_pc_pro%26_locale%3Den_IN&callback=https%3A%2F%2F
            store.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252F
            www.mi.com%252Fin%252Fservice%252Fauthorized_stores%252F%26sign%3DMzUxNDIzMjE0MW
            Y1YjBiMDBmOTYyYjYzNjg1MzUxNTZhMTg3MWU1OQ%2C%2C&_uRegion=IN">SIGN UP</a> <span>|</span>
            <a href="https://store.mi.com/in/site/login">{cartIcon}CART(0)</a> <span></span>

        </div>
    </div>
  )
}

export default PreNavbar