import React from "react";
import Hotels from "../hotels/Hotels";
import Enquiries from "../admin/Enquiry";
import Contact from "../contact/Contact";

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <h1 className="[ text-center ]">Admin Page</h1>
          </div>
        </div>

        <div className="[ row ]">
          <div className="[ col-sm-12 ]">
            <h2 className="[ establishment__heading ]">Add Establishment</h2>
            <Hotels />
          </div>
        </div>

        <div className="[ row ] [ enquiries ]">
          <div className="[ col-sm-12 ]">
            <h2 className="[ enquiries__heading--left ]">
              Enquiries from Clients
            </h2>
            <Enquiries />
          </div>
        </div>

        <div className="[ row ] [ messages ]">
          <div className="[ col-sm-12 ]">
            <h2 className="[ messages__heading--left ]">
              Messages from Clients
            </h2>
            <Contact />
          </div>
        </div>
      </div>
    );
  }
}
