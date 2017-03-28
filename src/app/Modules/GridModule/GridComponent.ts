import {Component} from '@angular/core';
import { Grid } from 'ag-grid/main';
 
@Component({
    selector: 'my-datatable',
    template: `
         <ag-grid-ng2 #agGrid style="height:100%;width:845px" class="ag-fresh"
            [gridOptions]="gridOptions">
         </ag-grid-ng2 >
     `,
     styles : [`.grid {
    position: relative;
}

.grid-item {
    position: absolute;
}

.grid-item.moving {
    z-index: z-index + 1;
}

.placeholder {
    position: absolute;
}`]
})
 
export class AppComponent { 
    myRowData = [
        {"name":"Ronald Bowman","country":"China","city":"Lutou","email":"rbowman0@spotify.com"},
        {"name":"Pamela Hill","country":"Russia","city":"Krylovskaya","email":"phill1@symantec.com"},
        {"name":"Robin Andrews","country":"Ukraine","city":"Korop","email":"randrews2@photobucket.com"},
        {"name":"Peter Kim","country":"Mexico","city":"San Jose","email":"pkim3@theatlantic.com"},
        {"name":"Carol Foster","country":"Mexico","city":"El Aguacate","email":"cfoster8@intel.com"},
        {"name":"Jimmy Burke","country":"Indonesia","city":"Banjarsari","email":"jburke9@over-blog.com"},
        {"name":"Jonathan Crawford","country":"Peru","city":"Alca","email":"jcrawforda@deliciousdays.com"},
        {"name":"Donald Montgomery","country":"Poland","city":"Działoszyce","email":"dmontgomeryb@google.com.br"},
        {"name":"Donna Shaw","country":"Japan","city":"Akune","email":"dshawc@chronoengine.com"},
        {"name":"Helen King","country":"United States","city":"Hollywood","email":"hkingd@devhub.com"},
        {"name":"Walter Myers","country":"China","city":"a ndaowa n", "email":"wmyerse@state.tx.us"},
        {"name":" Alice Collins","country":"Papua Nw  Guine a", "city":"Mendi","email":"acollinsf@npr.org"},
        {"name":"Anne Richards","country":"China","city":"Koramlik","email":"arichardsu@vinaora.com"},
        {"name":"Randy Miller","country":"Indonesia","city":"Trenggulunan","email":"rmillerv@oakley.com"},
        {"name":"Phillip Adams","country":"Bahamas","city":"Duncan Town","email":"padamsw@lycos.com"},
        {"name":"Nicholas Allen","country":"Philippines","city":"Bautista","email":"nallenx@aboutads.info"},
        {"name":"Lisa Willis","country":"Thailand","city":"Lat Yao","email":"lwillisy@istockphoto.com"},
        {"name":"Jeffrey Castillo","country":"Indonesia","city":"Karangsari","email":"jcastilloz@washington.edu"},
        {"name":"Michael Carpenter","country":"Colombia","city":"Cali","email":"mcarpenter13@prlog.org"}        
    ];
 
    columnDefs = [
        {headerName: 'Name', field: "name", width: 200 },
        {headerName: 'Country', field: "country" ,width:180},
        {headerName: 'City', field: "city" ,width:160},
        {headerName: 'e-mail', field: "email" ,width:300}
    ];
 
    gridOptions :any = [];
 
    constructor() {
        this.gridOptions = {
            rowData: this.myRowData,
            columnDefs: this.columnDefs,
            enableColResize: true,
            enableSorting: true,
            enableFilter: true
        }   
    }
}