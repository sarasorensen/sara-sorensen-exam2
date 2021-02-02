import { LogedIn } from "../../constants/icons";

export default function LogIn() {
  let loginInfo = localStorage.getItem("email");

  //This will be active, when development is finished.
  // if (loginInfo === null) {
  //   return (
  //    <Container className="admin">
  //      <Row>
  //       <Col className="admin__error">
  //        <div>
  //         <Access />
  //       <h2 className="main__title">You don't have access!</h2>
  //      <p>Sorry, you have to be logged in to view this page.</p>
  //      <Link to="/login" className="success__link">
  //      Log in Here
  //    </Link>
  //   </div>
  //  </Col>
  //  </Row>
  //   </Container>
  //   );
  //  //   }

  return (
    <div id="user" className="admin__logInfo">
      <LogedIn />
      <div>
        <p>You are logged in as:</p>
        <p>sarasorensen97@hotmail.com</p>
        <p>{loginInfo}</p>
      </div>
    </div>
  );
}
