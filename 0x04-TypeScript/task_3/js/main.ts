// task_3/js/main.ts

/// <reference path="crud.d.ts" />

import { RowID, RowElement } from './interface';
// Import from the JavaScript file; TypeScript will use crud.d.ts for types
import * as CRUD from './crud.js'; 

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = { 
  ...row, 
  age: 23 
};

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);