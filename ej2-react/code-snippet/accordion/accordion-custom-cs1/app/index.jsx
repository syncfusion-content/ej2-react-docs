import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function ReactApp() {
    let acrdnInstance;
    let expandInstance;
    let collapseInstance;
    const expandAni = ['SlideDown', 'SlideUp', 'FadeIn', 'FadeOut', 'FadeZoomIn', 'FadeZoomOut', 'ZoomIn', 'ZoomOut', 'None'];
    React.useEffect(() => {
        collapseAnimationChange = collapseAnimationChange;
        expandAnimationChange = expandAnimationChange;
    }, []);
    function content0() {
        return <div>
      Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface.
    </div>;
    }
    function content1() {
        return <div>
      The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages and membership-based authentication.
    </div>;
    }
    function content2() {
        return <div>
      JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.More recently, however, it has become common in both game development and the creation of desktop applications.
    </div>;
    }
    let collapseAnimationChange = (e) => {
        acrdnInstance.animation.collapse = { effect: collapseInstance.value };
    };
    let expandAnimationChange = (e) => {
        acrdnInstance.animation.expand = { effect: expandInstance.value };
    };
    const wrapStyle = { padding: '25px 0 0' };
    return (<div style={wrapStyle}>
      <div className='row'>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <label> Expand Animation </label>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <DropDownListComponent ref={expand => expandInstance = expand} index={0} change={expandAnimationChange} dataSource={expandAni} popupHeight="250px" placeholder="Select Expand animation"/>
        </div>
      </div>
      <div className='row'>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <label> Collapse Animation </label>
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
          <DropDownListComponent ref={collapse => collapseInstance = collapse} index={1} change={collapseAnimationChange} dataSource={expandAni} popupHeight="250px" placeholder="Select Collapse animation"/>
        </div>
      </div>

      <AccordionComponent ref={acrdn => acrdnInstance = acrdn}>
        <AccordionItemsDirective>
          <AccordionItemDirective header='ASP.NET' content={content0}/>
          <AccordionItemDirective header='ASP.NET MVC' content={content1}/>
          <AccordionItemDirective header='Javascript' content={content2}/>
        </AccordionItemsDirective>
      </AccordionComponent>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
