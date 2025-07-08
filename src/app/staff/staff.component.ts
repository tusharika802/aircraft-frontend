import { Component, OnInit } from '@angular/core';
import { Staff } from '../staff';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent implements OnInit{
    staffList: Staff[] = [];
      constructor(private service: DashboardService) {}
    
  ngOnInit(): void {
    this.service.getAllStaff().subscribe(res => this.staffList = res);
  }

}
