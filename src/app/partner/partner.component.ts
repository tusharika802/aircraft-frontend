import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Partner } from '../partner';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss'
})
export class PartnerComponent implements OnInit 
{
  partners: Partner[] = [];
  constructor(private service: DashboardService) {}
  ngOnInit(): void {
    this.service.getAllPartners().subscribe(res => this.partners = res);

}
}
