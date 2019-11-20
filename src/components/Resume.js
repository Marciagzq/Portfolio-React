import React, { Component } from 'react';
import './Resume.css';

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('test').className = 'slideDown';
  }, 2000);
}, false);
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('test1').className = 'slideDown';
  }, 2000);
}, false);
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('test2').className = 'slideDown';
  }, 2000);
}, false);
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('test3').className = 'slideDown';
  }, 2000);
}, false);
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('test4').className = 'slideDown';
  }, 2000);
}, false);
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.getElementById('test5').className = 'slideDown';
  }, 2000);
}, false);


export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.work && resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>


        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <div id="test">CSS3</div> <div id="test1">JavaScript</div> <div id="test2">NodeJS</div>



          </div>

          <div className="nine columns">

            <div id="test3">HTML5</div> <div id="test4">JQuery</div> 
            
            <div id="test3">Express</div> <div id="test4">Bootstrap</div> <div id="test5">ReactJS</div>
            
            <div id="test3">MySQL</div> <div id="test4">Materialize</div>  <div id="test3">API's</div> <div id="test4">MongoDB</div> <div id="test5">CssAnimation</div>
            
            <div id="test3">JSON</div> <div id="test4">GitHub</div>        <div id="test3">WebFlow</div> <div id="test4">XML</div><div id="test4">Heroku</div>


          </div>
          

        </div>

      </section>
    );
  }
}