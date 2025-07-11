import { Component, OnInit } from '@angular/core';
import { Contract } from '../contract';
import { DashboardService } from '../dashboard.service';
import { Partner } from '../partner';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {
  partners: Partner[] = [];
  contracts: Contract[] = [];

  constructor(private service: DashboardService) {}

  ngOnInit(): void {
    this.loadContracts();
    this.loadPartners();
  }

  loadPartners() {
    this.service.getAllPartners().subscribe(res => {
      this.partners = res;
    });
  }

  loadContracts() {
    this.service.getAllContracts().subscribe(res => {
      this.contracts = res;
    });
  }

  getPartnerNames(contract: Contract): string {
    if (!contract.contractPartner || contract.contractPartner.length === 0) {
      return '-';
    }
    return contract.contractPartner.map(p => p.name).join(', ');
  }

  onAdd(e: any) {
    const selectedIds = e.data.contractPartner;
    e.data.contractPartner = this.partners.filter(p => selectedIds.includes(p.id));
    this.service.addContract(e.data).subscribe(() => {
      this.loadContracts();
    });
  }

  onEdit(e: any) {
    const selectedIds = e.newData.contractPartner || e.oldData.contractPartner.map((p: Partner) => p.id);
    const updatedContract: Contract = {
      ...e.oldData,
      ...e.newData,
      contractPartner: this.partners.filter(p => selectedIds.includes(p.id))
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
