//No Props are needed as Headers are typically static
//While lowercase for file name like header.jsx or function is okay
// it is generally best practice to capitalize the first letter for readability sake

// To import photos and CSS, you must import them as modules 
// as projects get bigger, its important each component has its own css stylesheet as final production shoves it into one
// (in this case this small and the root or parent component has css already, so no need to repeat the import for every component for now)
// In modern JavaScript, external files are treated as modules when imported
import Globe from "../assets/global.svg"


//to make comments inside the html use {} followed by using \*comment*\, 
//anything inside the curly bracket can have javascript code
// but generally not reccomended unless its inside the html tags for props or mapping and other specific use cases
export default function Header(){
  return (
    <header className="header"> {/*This is a comment! but also inside the return, the parent must only have ONE parent, if none fits, use <></> */}
      <img className="header__img" src= {Globe} alt="logo"/>
      <h1 className="header__logo">my travel journal</h1>
    </header>
  )
}
