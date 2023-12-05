{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  DocumentEditorComponent,
  Print,
  SfdtExport,
  WordExport,
  TextExport,
  Selection,
  Search,
  Editor,
  ImageResizer,
  EditorHistory,
  ContextMenu,
  OptionsPane,
  HyperlinkDialog,
  TableDialog,
  BookmarkDialog,
  TableOfContentsDialog,
  PageSetupDialog,
  StyleDialog,
  ListDialog,
  ParagraphDialog,
  BulletsAndNumberingDialog,
  FontDialog,
  TablePropertiesDialog,
  BordersAndShadingDialog,
  TableOptionsDialog,
  CellOptionsDialog,
  StylesDialog,
} from '@syncfusion/ej2-react-documenteditor';
import { DropDownButtonComponent, ItemModel } from '@syncfusion/ej2-react-splitbuttons';

function App() {
  let documenteditor: DocumentEditorComponent;
  let pageCount: any;
  let editablePageNumber: any;
  let editorPageCount: any;
  let pageNumberLabel: any;
  let startPage = 1;
  let zoom: any;
  let items: ItemModel[] = [
    { text: '200%' },
    { text: '175%' },
    { text: '150%' },
    { text: '125%' },
    { text: '100%' },
    { text: '75%' },
    { text: '50%' },
    { text: '25%' },
    { separator: true },
    { text: 'Fit one page' },
    { text: 'Fit page width' },
  ];

  React.useEffect(() => {
    let instance: any = this;

    instance.pageCount = document.getElementById('documenteditor_pagecount');
    instance.editablePageNumber = document.getElementById('editablePageNumber');
    instance.pageNumberLabel = document.getElementById('documenteditor_page_no');

    updatePageCount();
    updatePageNumber();

    documenteditor.viewChange = function (e) {
      updatePageNumberOnViewChange(e);
    };

    documenteditor.contentChange = function () {
      updatePageCount();
    };

    instance.editablePageNumber.onclick = function () {
      updateDocumentEditorPageNumber();
    };

    instance.editablePageNumber.onkeydown = function (e) {
      onKeyDown(e);
    };

    instance.editablePageNumber.onblur = function () {
      onBlur();
    };
  }, []);

  function updatePageNumberOnViewChange(args: any) {
    if (
      documenteditor.selection &&
      documenteditor.selection.startPage >= args.startPage &&
      documenteditor.selection.startPage <= args.endPage
    ) {
      startPage = documenteditor.selection.startPage;
    } else {
      startPage = args.startPage;
    }
    updatePageNumber();
  }

  function onBlur() {
    if (
      editablePageNumber.textContent === '' ||
      parseInt(editablePageNumber.textContent, 0) > editorPageCount
    ) {
      updatePageNumber();
    }
    editablePageNumber.contentEditable = 'false';
  }

  function onKeyDown(e: any) {
    if (e.which === 13) {
      e.preventDefault();
      var pageNumber = parseInt(editablePageNumber.textContent, 0);
      if (pageNumber > editorPageCount) {
        updatePageNumber();
      } else {
        if (documenteditor.selection) {
          documenteditor.selection.goToPage(parseInt(editablePageNumber.textContent, 0));
        } else {
          documenteditor.scrollToPage(parseInt(editablePageNumber.textContent, 0));
        }
      }
      editablePageNumber.contentEditable = 'false';
      if (editablePageNumber.textContent === '') {
        updatePageNumber();
      }
    }
    if (e.which > 64) {
      e.preventDefault();
    }
  }

  function onZoom(args: any) {
    setZoomValue(args.item.text);
    updateZoomContent();
  }

  function setZoomValue(text: string) {
    if (text.match('Fit one page')) {
      documenteditor.fitPage('FitOnePage');
    } else if (text.match('Fit page width')) {
      documenteditor.fitPage('FitPageWidth');
    } else {
      documenteditor.zoomFactor = parseInt(text, 0) / 100;
    }
  }

  function updateZoomContent() {
    zoom.content = Math.round(documenteditor.zoomFactor * 100) + '%';
  }

  function updatePageNumber() {
    pageNumberLabel.textContent = startPage.toString();
  }

  function updatePageCount() {
    editorPageCount = documenteditor.pageCount;
    pageCount.textContent = editorPageCount.toString();
  }

  function updateDocumentEditorPageNumber() {
    let editPageNumber = document.getElementById('editablePageNumber');
    editPageNumber.contentEditable = 'true';
    editPageNumber.focus();
    window.getSelection().selectAllChildren(editPageNumber);
  }

  return (
    <div>
      <DocumentEditorComponent
        id="container"
        height={'330px'}
        ref={(scope) => {
          documenteditor = scope;
        }}
        isReadOnly={false}
        enablePrint={true}
        enableSelection={true}
        enableEditor={true}
        enableEditorHistory={true}
        enableContextMenu={true}
        enableSearch={true}
        enableOptionsPane={true}
        enableBookmarkDialog={true}
        enableBordersAndShadingDialog={true}
        enableFontDialog={true}
        enableTableDialog={true}
        enableParagraphDialog={true}
        enableHyperlinkDialog={true}
        enableImageResizer={true}
        enableListDialog={true}
        enablePageSetupDialog={true}
        enableSfdtExport={true}
        enableStyleDialog={true}
        enableTableOfContentsDialog={true}
        enableTableOptionsDialog={true}
        enableTablePropertiesDialog={true}
        enableTextExport={true}
        enableWordExport={true}
      />
      <div id="page-fit-type-div">
        <label id="page"> Page </label>
        <div id="editablePageNumber">
          <label id="documenteditor_page_no" />
        </div>
        <label id="of">of</label>
        <label id="documenteditor_pagecount" />
        <DropDownButtonComponent
          ref={(scope) => {
            zoom = scope;
          }}
          items={items}
          cssClass="e-de-statusbar-zoom"
          select={onZoom}
        >
          100%
        </DropDownButtonComponent>
      </div>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('sample'));

{% endraw %}