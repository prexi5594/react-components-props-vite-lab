function Header({ name = "", image }) {
  return (
    <header>
      {image && <img src={image} alt="blog logo" />}
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
