import { Component, OnInit } from '@angular/core';
import { Part } from '../part';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.scss'
})
export class PartsComponent implements OnInit{
    parts: Part[] = [];
    constructor(private service: DashboardService) {}
  ngOnInit(): void {
    this.service.getAllParts().subscribe(res => this.parts = res);
  }
  

}
