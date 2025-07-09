// import { Component, OnInit } from '@angular/core';
// import { Contract } from '../contract';
// import { DashboardService } from '../dashboard.service';

// @Component({
//   selector: 'app-contract',
//   templateUrl: './contract.component.html',
//   styleUrl: './contract.component.scss'
// })
// export class ContractComponent implements OnInit {
//    contracts: Contract[] = [];
//    constructor(private service:DashboardService) {}
//    ngOnInit(): void {
//      this.service.getAllContracts().subscribe(res => this.contracts = res);

// }
// }
import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.loadContracts();
  }

  loadContracts() {
    this.service.getAllContracts().subscribe(res => this.contracts = res);
  }

  onAdd(e: any) {
    const newContract: Contract = e.data;
    this.service.addContract(newContract).subscribe(() => {
      this.loadContracts();
    });
  }

  onEdit(e: any) {
    const updatedContract: Contract = {
      ...e.oldData,
      ...e.newData
    };
    this.service.editContract(updatedContract.id, updatedContract).subscribe(() => {
      this.loadContracts();
    });
  }

  onDelete(e: any) {
    const id = e.data.id;
    this.service.deleteContract(id).subscribe(() => {
      this.loadContracts();
    });
  }
}
