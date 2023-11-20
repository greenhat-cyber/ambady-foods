import Offcanvas from "react-bootstrap/Offcanvas";

const CustomDrawer = (props) => {

  return (
    <>
      <Offcanvas show={props.isOpen} onHide={props.setIsOpen} {...props} placement="end" style={{ width: "300px" }}>
        <Offcanvas.Header style={{backgroundColor:"#f0e5d1"}} closeButton >
          <Offcanvas.Title>Ambady Foods</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomDrawer;
