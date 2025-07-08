import { Component, OnInit } from '@angular/core';
import { ServiceCentre } from '../servicecentre';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-servicecentre',
  templateUrl: './servicecentre.component.html',
  styleUrl: './servicecentre.component.scss'
})
export class ServicecentreComponent implements OnInit {
    serviceCentres: ServiceCentre[] = [];
      constructor(private service: DashboardService) {}
    
    ngOnInit(): void {
    this.service.getAllServiceCentres().subscribe(res => this.serviceCentres = res);
    }
  

}
