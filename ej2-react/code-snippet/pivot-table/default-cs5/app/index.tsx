import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import { Uploader } from '@syncfusion/ej2-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  let pivotObj: PivotViewComponent;
  let input: HTMLInputElement
  let isInitial = true;

  function ondataBound(): void {
    if (isInitial) {
      // Step 1: Initiate the file uploader
      let uploadObj: Uploader = new Uploader();
      uploadObj.appendTo('#fileupload');
      input = document.querySelector('input[type="file"]') as HTMLInputElement;
      // Step 2: Add the event listener which fires when the *.CSV file is uploaded.
      input.addEventListener('change', loadCSV, false);
      isInitial = false;
    }
  }

  function loadCSV() {
    // Step 3: Initiate the file reader
    const reader: FileReader = new FileReader();
    reader.onload = function () {
      const Result: string[][] = [];
      // Step 4: Getting the string output which is to be converted as string[][].
      let readerResult: string[] = (reader.result as string).split(/\r?\n|\r/);
      (Result as string[][]).push(readerResult[0].split(',').map(function (e) { return e.replace(/ /g, '').replace(/^\"(.+)\"$/, "$1"); }));
      for (let i: number = 1; i < readerResult.length; i++) {
        if (readerResult[i as number] !== '') {
          (Result as string[][]).push(readerResult[i as number].split(','));
        }
      }
      pivotObj.dataSourceSettings = {
        // Step 5: The string[][] result to be bound as data source
        dataSource: Result,
        type: 'CSV',
        // Step 6: The appropriate report needs to be provided here.
      };
    }
    reader.readAsText(((input as HTMLInputElement).files as FileList)[0]);
    input.value = '';
    (document.querySelector('.e-upload-files') as HTMLElement).remove();
  }

  return (<div className='control-pane'><input type="file" id="fileupload" />
    <PivotViewComponent ref={d => pivotObj = d} id='PivotView' height={350} showFieldList={true} dataBound={ondataBound.bind(this)}>
      <Inject services={[FieldList]} />
    </PivotViewComponent></div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById('sample'));