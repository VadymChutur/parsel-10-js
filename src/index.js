import { showMesage } from './js/example';

import api from './js/exempleDefaultExport';

import * as info from './js/exempleExportAll';

console.table(info);
console.table(info.doHomeTasks);

api();

showMesage('Hello World!');
