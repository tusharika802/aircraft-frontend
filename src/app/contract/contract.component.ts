import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Partner } from '../partner';
import { Contract } from '../contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
    styleUrl: './contract.component.scss'

})
export class ContractComponent implements OnInit {
  partners: Partner[] = [];
  contracts: any[] = [];
  partnerIds : any[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadPartners(); 
    this.loadContracts();
  }

  loadPartners(): void {
    this.dashboardService.getAllPartners().subscribe((data: Partner[]) => {
      this.partners = data;
    });
  }

  loadContracts(): void {
    this.dashboardService.getAllContracts().subscribe((data: any[]) => {
      this.contracts = data.map(c => {
        const ids = c.partnerIds
          ? c.partnerIds.split(',').map((id: string) => +id)
          : [];
        return {
          ...c,
          partnerIds: ids
        };
      });
    });
  }

  getPartnerNames = (rowData: any): string => {
    const ids: number[] = rowData.partnerIds || [];
    return this.partners
      .filter(p => ids.includes(p.id))
      .map(p => p.name)
      .join(', ');
  };

  onPartnerChanged = (e: any) => {
  const form = e.component.option('form');
  if (form) {
    const formData = form.option('formData');
    formData.partnerIds = e.value;
    form.option('formData', formData);
    console.log('Partner Changed:', e.value);
  }
};

  onAdd(e: any, string: any) {
    const selectedPartnerIds: number[] = e.data.partnerIds || [];
    console.log('Selected Partner IDs:', selectedPartnerIds);
    const contract: any = {
      title: e.data.title,
      isActive: e.data.isActive ?? false,
      partnerIds: (selectedPartnerIds || []).join(',')
    };
    this.dashboardService.addContract(contract).subscribe(() => {
      this.loadContracts();
    });
  }
  
  onEdit(e: any) {
    const selectedPartnerIds =
      e.newData.partnerIds ?? e.oldData.partnerIds ?? [];

    const updatedContract: any = {
      title: e.newData.title ?? e.oldData.title,
      isActive: e.newData.isActive ?? e.oldData.isActive ?? false,
      partnerIds: (selectedPartnerIds || []).join(',') // string bana ke bhejein
    };

    const id = e.key;
    this.dashboardService.editContract(id, updatedContract).subscribe(() => {
      this.loadContracts();
    });
  }

  onDelete(e: any) {
    const id = e.data.id;
    this.dashboardService.deleteContract(id).subscribe(() => {
      this.loadContracts();
    });
  }
}
