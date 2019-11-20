import React, { Component } from 'react';
import './contactus.css';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead" style={{color: '#fff'}}>
              Feel free to contact me for any work or suggestions
              </p>
            <div className="tooltip">
            <a href="tel:7866599732"><i style={{ fontSize: "40px", color: "rgba(255, 49, 117)" }} className="fa contactfa">&#xf095;</i> </a>
            <a href="mailto:marcia.gzq@gmail.com?subject=(Your%20Subject%20Here)">  <i style={{ fontSize: "40px", color: "rgba(255, 49, 117)" }} className="fa contactfa">&#xf0e0;</i> </a>
            </div>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
          
             


           
          </aside>
        </div>
      </section>
    );
  }
}