export default function Header() {
  return (
    <header>
      <button className="side-left-in">☰</button>
        <h1 id="title"></h1>
        <div className="select-menu">
            <button className="btEdit select-menu-garbage" type="button">&#128465;</button>
            <button className="btEdit select-menu-cancel" type="button">⨉</button>
        </div>
    </header>
  )
}