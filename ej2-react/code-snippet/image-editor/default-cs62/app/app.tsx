import { ImageEditorComponent, Dimension, ShapeSettings} from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    let imgObj: ImageEditorComponent;
    function imageEditorCreated(): void {
        if (Browser.isDevice) {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/flower.jpeg');
        } else {
            imgObj.open('https://ej2.syncfusion.com/react/documentation/image-editor/images/bridge.jpeg');
        }
    }

    function addText(): void {
        const dimension: Dimension = imgObj.getImageDimension();
        imgObj.drawText(dimension.x, dimension.y, 'Syncfusion');
        const textElement = document.getElementById('text');
        if (textElement) {
            textElement.setAttribute('disabled', 'true');
        }
    }

    function bold(): void {
        const shapes: ShapeSettings[] = imgObj.getShapeSettings();
        if (shapes && shapes[0].fontStyle) {
            if (shapes[0].fontStyle.includes('bold')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter((item: string) => item !== 'bold');
            } else {
                shapes[0].fontStyle.push('bold');
            }
            imgObj.updateShape(shapes[0]);
        }
    }

    function italic(): void {
        const shapes: ShapeSettings[] = imgObj.getShapeSettings();
        if (shapes && shapes[0].fontStyle) {
            if (shapes[0].fontStyle.includes('italic')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter((item: string) => item !== 'italic');
            } else {
                shapes[0].fontStyle.push('italic');
            }
            imgObj.updateShape(shapes[0]);
        }
    }

    function underline(): void {
        const shapes: ShapeSettings[] = imgObj.getShapeSettings();
        if (shapes && shapes[0].fontStyle) {
            if (shapes[0].fontStyle.includes('underline')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter((item: string) => item !== 'underline');
            } else {
                shapes[0].fontStyle.push('underline');
            }
            imgObj.updateShape(shapes[0]);
        }
    }

    function strikethrough(): void {
        const shapes: ShapeSettings[] = imgObj.getShapeSettings();
        if (shapes && shapes[0].fontStyle) {
            if (shapes[0].fontStyle.includes('strikethrough')) {
                shapes[0].fontStyle = shapes[0].fontStyle.filter((item: string) => item !== 'strikethrough');
            } else {
                shapes[0].fontStyle.push('strikethrough');
            }
            imgObj.updateShape(shapes[0]);
        }
    }

    return (
        <div className='e-img-editor-sample'>
            <ImageEditorComponent 
                ref={(img: ImageEditorComponent) => { imgObj = img; }} 
                height="350px" 
                width="550px" 
                showQuickAccessToolbar={false} 
                created={imageEditorCreated} 
                toolbar={[]} 
            />
            <div className="button-group" >
                <button 
                    id="text" 
                    className="e-btn e-primary" 
                    onClick={addText}
                >
                    Add Text
                </button>
                <div className="e-btn-group">
                    <input type="checkbox" id="bold" value="bold" onChange={bold} />
                    <label className="e-btn" htmlFor="bold">
                        <span className="e-icons e-bold"></span>Bold
                    </label>
                    <input type="checkbox" id="italic" value="italic" onChange={italic} />
                    <label className="e-btn" htmlFor="italic">
                        <span className="e-icons e-italic"></span>Italic
                    </label>
                    <input type="checkbox" id="underline" value="underline" onChange={underline} />
                    <label className="e-btn" htmlFor="underline">
                        <span className="e-icons e-underline"></span>Underline
                    </label>
                    <input type="checkbox" id="strikethrough" value="strikethrough" onChange={strikethrough} />
                    <label className="e-btn" htmlFor="strikethrough">
                        <span className="e-icons e-strikethrough"></span>Strikethrough
                    </label>
                </div>
            </div>
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('image-editor'));