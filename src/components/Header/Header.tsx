import { useEffect, useState } from "react"
import "./header.css"
import "remixicon/fonts/remixicon.css"
const Header = () => {
  {
    /*Hozz létre egy állapotváltozót boolean típussal, amely azt figyeli, hogy kell-e árnyékot állítani a headernek. */
  }
  const [hasShadow, setHasShadow] = useState(false)

  {
    /* Ha 50 px-rel lejjebb görgetünk (window.scrollY >= 50), akkor a header osztályú elemhez adjuk hozzá a shadow-header osztályt. */
  }

  {
    /*
     Használd hozzá ezt a kódot
     */
  }
  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY >= 50)
    }
    window.addEventListener("scroll", handleScroll)
  }, [])

  {
    /*Generáld le a HOME, POPULAR, ABOUT US, PRODUCTS, CONTACT listaelemeket. Mindegyik a megfelelő helyre mutasson az oldalon*/
  }
  const navItems = [
    { text: "HOME" },
    { text: "POPULAR" },
    { text: "ABOUT US" },
    { text: "PRODUCTS" },
    { text: "CONTACT" },
  ]

  {
    /*A szükséges css osztályokat megtalálod a header.css - ben.*/
  }

  {
    /*Mobil nézetben jobb felső sarokban legyen egy toggle aminek hatására legördül a menu.*/
  }

  {
    /*Mobil nézetben a legördült menüben legyen egy X amivel visszagördül a menü*/
  }

  {
    /*Hozz létre egy boolean állapotváltozót. Értéke alapján hozzáadja a nav_menu osztállyal ellátott elemhez a show-menu osztályt.*/
  }

  {
    /*importáld a remixicont: import "remixicon/fonts/remixicon.css"; */
  }

  {
    /*close ikon osztálya: ri-close-large-line */
  }

  {
    /*toggle ikon osztálya: ri-apps-2-fill */
  }

  return (
    <div className="header">
      <nav>
        <a href="" className="nav__logo">
          STARCOFFE
        </a>
        <div className={`nav__menu ${hasShadow ? "shadow-header" : ""}`}>
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.text} className="nav__link">
                {item.text}
              </li>
            ))}
          </ul>
          <div className="nav__close">
            <i className="ri-close-large-line"></i>
          </div>
        </div>
        <div className="nav__toggle">
          <i className="ri-apps-2-fill"></i>
        </div>
      </nav>
    </div>
  )
}

export default Header
