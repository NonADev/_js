import {BaseElement} from './base-element.js';

export class DataTable extends BaseElement{
      constructor(headers, data){
            super();
            this.data = data;
            this.headers = headers;
      }

      getElementString(){
            let thTags = '';
            let trTags='';
            for(let header of this.headers)
                  thTags+=`
                        <th class="mdl-data-table__cell--non-numeric">${header}</th>
                  `;
            //NAO E MEU
            for(let car of this.data){
                  trTags+= `<tr>`;
                  let tdTags = '';
                  for(let property of this.headers){
                        let field = car[property.toLowerCase()];
                        trTags+= `<td class="md1-data-table_cell--non-numeric">
                                    ${field}
                                  </td>
                        `;
                  }
                  trTags += '</tr>';
            }
            //NAO E MEU
            let elString = `
            <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
              <thead>
                <tr>
                  ${thTags}
                </tr>
              </thead>
              <tbody>
                  ${trTags}
              </tbody>
            </table>
            `;
            return elString;
      }
}
