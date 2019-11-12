import {BaseElement} from './base-element.js';

export class Image extends BaseElement {
      constructor(fileName) {
            super();
            this.fileName = fileName;
      }

      getElementString(){
            var elString = `
            <img src="${this.fileName}" style="width: 100%;"/>
            `;
            return elString;
      }
}
