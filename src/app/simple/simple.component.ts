import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { Translation } from '../app.types';
import { DataService } from '../data.service';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {
  rowData: Translation[];
  columnDefs: ColDef[];
  constructor(dataSvc: DataService) {
    this.rowData = dataSvc.getNameTranslations();
    this.columnDefs = [
      {
        headerName: 'Dummy Data',
        field: 'english',
        editable : true
      },
      {
        headerName: 'Basic Information',
        field: 'basicinfo',
        editable : true
      },

            {
        headerName: 'Product ID',
        field: 'productid',
        editable : true
      },
                  {
        headerName: 'SKU',
        field: 'sku',
        editable : true
      },

      {
        headerName: 'Product Name',
        field: 'productname',
        editable : true
      },
      {
        headerName: 'Category',
        field: 'category',
        editable : true
      },
      {
        headerName: 'Childsku',
        field: 'childsku',
        editable : true
      },
      {
        headerName: 'Price',
        field: 'price',
        editable : true
      },
      {
        headerName: 'Sales & Media',
        field: 'salesandmedia',
        editable : true
      },
      {
        headerName: 'Main Image',
        field: 'mainimage',
        editable : true
      },
      {
        headerName: 'Additional Image',
        field: 'additionalimage',
        editable : true
      },
      {
        headerName: 'Mandatory Attributes',
        field: 'mandatoryattributes',
        editable : true
      },
      {
        headerName: 'Model',
        field: 'model',
        editable : true
      },
      {
        headerName: 'OS',
        field: 'os',
        editable : true
      },  
      {
        headerName: 'Optional Information',
        field: 'optionalinformation',
        editable : true
      },  
      {
        headerName: 'Screen Size',
        field: 'screensize',
        editable : true
      },  
        {
        headerName: 'Condition',
        field: 'condition',
        editable : true
      }, 
    ];
  }

/*     this.columnDefs = [
      {
        headerName: 'Dummy Data',
        field: 'english',
        editable : true
      },
      {
        headerName: 'Basic Information',
        field: 'basicinfo',
        editable : true
      },

            {
        headerName: 'Product ID',
        field: 'productid',
        editable : true
      },
                  {
        headerName: 'SKU',
        field: 'sku',
        editable : true
      },

      {
        headerName: 'Product Name',
        field: 'productname',
        editable : true
      },
      {
        headerName: 'Category',
        field: 'category',
        editable : true
      },
      {
        headerName: 'Childsku',
        field: 'childsku',
        editable : true
      },
      {
        headerName: 'Price',
        field: 'price',
        editable : true
      },
      {
        headerName: 'Sales & Media',
        field: 'salesandmedia',
        editable : true
      },
      ,
      {
        headerName: 'Main Image',
        field: 'mainimage',
        editable : true
      },
      {
        headerName: 'Additional Image',
        field: 'additionalimage',
        editable : true
      },
      {
        headerName: 'Mandatory Attributes',
        field: 'mandatoryattributes',
        editable : true
      },
      {
        headerName: 'Model',
        field: 'model',
        editable : true
      },   
    ];
  }
 */
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
