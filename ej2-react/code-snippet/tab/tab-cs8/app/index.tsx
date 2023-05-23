import { useRef } from 'react';
import * as ReactDOM from 'react-dom';
import { TabComponent, TabItemDirective, TabItemsDirective, SelectingEventArgs, SelectEventArgs } from '@syncfusion/ej2-react-navigations';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

const App = () => {
  const tabInstance = useRef<TabComponent>(null);
  const eventLogRef = useRef(null)
  let dropdownData: { [key: string]: Object; }[] = [
    { text: 'HTML', Id: 0 },
    { text: 'C-Sharp(C#)', Id: 1 },
    { text: 'Java', Id: 2 },
    { text: 'VB.NET', Id: 3 },
    { text: 'Xamarin', Id: 4 },
    { text: 'ASP.NET', Id: 5 },
    { text: 'ASP.NET MVC', Id: 6 },
    { text: 'JavaScript', Id: 7 }
  ];
  let fields: Object = { text: 'text', value: 'Id' };

  const htmlContent = () => {
    return (<div>
      HyperText Markup Language, commonly referred to as HTML, is the standard markup
      language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone
      technology, used by most websites to create visually engaging web pages, user interfaces
      for web applications, and user interfaces for many mobile applications. Web browsers
      can read HTML files and render them into visible or audible web pages. HTML describes
      the structure of a website semantically along with cues for presentation, making it a
      markup language, rather than a programming language.
    </div>
    );
  }
  const csharpContent = () => {
    return (<div> C# is intended to be a simple, modern, general-purpose, object-oriented
      programming language. Its development team is led by Anders Hejlsberg. The most recent
      version is C# 5.0, which was released on August 15, 2012</div>
    );
  }
  const javaContent = () => {
    return (<div> Java is a set of computer software and specifications developed by Sun Microsystems,
      later acquired by Oracle Corporation, that provides a system for developing application
      software and deploying it in a cross-mobile phones to platform computing environment. Java
      is used in a wide variety of computing platforms from embedded devices and enterprise servers
      and supercomputers. While less common, Java applets run in secure, sandboxed environments to
      provide many features of native applications and can be embedded in HTML pages.</div>
    );
  }
  const vbnetContent = () => {
    return (<div> The command-line compiler, VBC.EXE, is installed as part of the freeware .NET
      Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version
      is VB 2012, which was released on August 15, 2012.
    </div>
    );
  }
  const xamarinContent = () => {
    return (<div>Xamarin is a San Francisco, California based software company created in May
      2011 by the engineers that created Mono, Mono for Android and MonoTouch that are
      cross-platform implementations of the Common Language Infrastructure (CLI) and Common
      Language Specifications (often called Microsoft .NET). With a C#-shared codebase,developers
      can use Xamarin tools to write native Android, iOS, and Windows apps with native user interfaces
      and share code across multiple platforms. Xamarin has over 1 million developers in more
      than 120 countries around the World as of May 2015.</div>
    );
  }
  const aspContent = () => {
    return (<div>
      ASP.NET is an open-source server-side web application framework designed for web
      development to produce dynamic web pages. It was developed by Microsoft to allow programmers
      to build dynamic web sites, web applications and web services. It was first released in January
      2002 with version 1.0 of the .NET Framework, and is the successor to Microsoft's Active Server
      Pages (ASP) technology. ASP.NET is built on the Common Language Runtime (CLR), allowing
      programmers to write ASP.NET code using any supported .NET language. The ASP.NET SOAP extension
      framework allows ASP.NET components to process SOAP messages.'
    </div>
    );
  }
  const mvcContent = () => {
    return (<div>The ASP.NET MVC is a web application framework developed by Microsoft, which implements
      the model–view–controller (MVC) pattern. It is open-source software, apart from the ASP.NET Web
      Forms component which is proprietary. In the later versions of ASP.NET, ASP.NET MVC, ASP.NET Web
      API, and ASP.NET Web Pages (a platform using only Razor pages) will merge into a unified MVC 6.
      The project is called ASP.NET vNext.</div>
    );
  }
  const jsContent = () => {
    return (<div>
      JavaScript (JS) is an interpreted computer programming language. It was originally
      implemented as part of web browsers so that client-side scripts could interact with the
      user, control the browser, communicate asynchronously, and alter the document content that
      was displayed. More recently, however, it has become common in both game development
      and the creation of desktop applications.
    </div>);
  }
  const dropdownChange = (args: ChangeEventArgs): void => {
    tabInstance.current.select(args.value as number)
  }
  const selecting = (args: SelectingEventArgs) => {
    getInteractionDetail(args.isInteracted as boolean);
  }
  const selected = (args: SelectEventArgs) => {
    getInteractionDetail(args.isInteracted as boolean);
  }
  const getInteractionDetail = (interact: boolean): void => {
    let eventlog = interact
      ? 'Tab Item selected by user interaction'
      : 'Tab Item selected by programmatically';
    eventLogRef.current.innerHTML = eventLogRef.current.innerHTML = '<b>' + eventlog + '</b></span>';
  }
  let headertext: any = [
    { text: 'HTML' },
    { text: 'C-Sharp(C#)' },
    { text: 'Java' },
    { text: 'VB.NET' },
    { text: 'Xamarin' },
    { text: 'ASP.NET' },
    { text: 'ASP.NET MVC' },
    { text: 'JavaScript' }
  ];
  return (
    <div>
      <div className="EventLog" ref={eventLogRef} ></div>
      <DropDownListComponent index={0} change={dropdownChange} dataSource={dropdownData} fields={fields} floatLabelType="Always" placeholder="Select Tab Item using dropdown" />
      <TabComponent heightAdjustMode='Auto' selecting={selecting}
        ref={tabInstance} selected={selected} >
        <TabItemsDirective>
          <TabItemDirective header={headertext[0]} content={htmlContent} />
          <TabItemDirective header={headertext[1]} content={csharpContent} />
          <TabItemDirective header={headertext[2]} content={javaContent} />
          <TabItemDirective header={headertext[3]} content={vbnetContent} />
          <TabItemDirective header={headertext[4]} content={xamarinContent} />
          <TabItemDirective header={headertext[5]} content={aspContent} />
          <TabItemDirective header={headertext[6]} content={mvcContent} />
          <TabItemDirective header={headertext[7]} content={jsContent} />
        </TabItemsDirective>
      </TabComponent>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<App />);