import { ColDef } from 'ag-grid-community';

import { TransposedRow } from '../app.types';
import { DataService } from '../data.service';

import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
//import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
//import {Grid} from "@ag-grid-community/core";
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

//import {ColumnApi, GridApi} from "@ag-grid-enterprise/all-modules";
//import {Module, AllModules } from "@ag-grid-enterprise/all-modules";
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';




@Component({
  selector: 'app-transposed-dry',
  templateUrl: './transposed-dry.component.html',
  styleUrls: ['./transposed-dry.component.scss']
})
export class TransposedDryComponent {
  rowData: TransposedRow[];
  columnDefs: ColDef[];

  constructor(dataSvc: DataService) {
    const nameTranslations = dataSvc.getNameTranslations();

    this.rowData = dataSvc.getLanguages()
      .filter((_, index) => index > 0) // we don't show english - it's the header
      .map(language => {
        const lowerLang = language.name.toLowerCase();
        // add a special column for the language name
        const langValues = {
          language: language.name,
        };
        // use forEach to populate the row from the root data
        nameTranslations.forEach(translation => {
          langValues[translation.english.toLowerCase()] = translation[lowerLang];
        });
        return langValues;
      });

    // add a special column for the language name
    this.columnDefs = [
      {
        headerName: '',
        field: 'language',
        cellStyle: { 'font-size': 'large' },
        pinned: 'left',
        editable : true,
        floatingFilterComponentParams: {suppressFilterButton: true},
      }
    ];


    // use map, spread, and push to populate the rest of the columns
    this.columnDefs.push(...nameTranslations.map(translation => {
      return {
        headerName: translation.english,
        field: translation.english.toLowerCase(),
      };
    }));
  }
  defaultColDef = {
    filter: 'agTextColumnFilter',
    floatingFilterComponentParams: {suppressFilterButton: true},
    sortable: true,
    resizable: true,
    editable : true,
    minWidth: 200,
    flex: 2
  };

}
