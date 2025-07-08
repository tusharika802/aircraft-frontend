import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent implements OnInit {
   contracts: Contract[] = [];
   constructor(private service:DashboardService) {}
   ngOnInit(): void {
     this.service.getAllContracts().subscribe(res => this.contracts = res);

}
}
