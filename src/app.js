import {jQuery} from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-services.js';
import {ApplicationBase} from './framework/application-base.js';

export class App extends ApplicationBase{

      constructor(){
            super('Fleet Manager');
            this.dataService = new FleetDataService(fleet);

                        this.addRoute('Home', null, true);
                        this.addRoute('Cars', null, true);
                        this.addRoute('Drones', null, true);
                        this.addRoute('Map', null, true);
      }

}

export let application = new App();
application.show($('body'));
