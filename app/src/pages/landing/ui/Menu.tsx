export const Menu: React.FC = () => {
  return (
    <>
      <a href="#home">
        <li>Home</li>
      </a>
      <a href="#history">
        {/* onClick={()=> setModalisOpen(true)} */}
        <li>Mi historia</li>
      </a>
      <a href="#services">
        <li>Servicios</li>
      </a>
      <a href="#works">
        <li>Trabajos</li>
      </a>
      <a href="#contact">
        <li>Contacto</li>
      </a>
      {/* MODAL */}
      {/* <MyHistory modalIsOpen={modalIsOpen} closeModal={setModalisOpen} /> */}
    </>
  );
};
