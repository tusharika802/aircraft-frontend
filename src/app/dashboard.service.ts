import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from './contract';
import { Part } from './part';
import { ServiceCentre } from './servicecentre';
import { Partner } from './partner';
import { Staff } from './staff';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl = 'https://localhost:7227/api'; // Update if port differs

  constructor(private http: HttpClient) {}

  // Contracts
  getAllContracts(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${this.baseUrl}/contracts`);
  }
  getActiveContractsCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/Contracts/count`);
  }

  // Parts
  getAllParts(): Observable<Part[]> {
    return this.http.get<Part[]>(`${this.baseUrl}/parts`);
  }
  getInProgressPartsCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/parts/in-progress-count`);
  }

  // Service Centres
  getAllServiceCentres(): Observable<ServiceCentre[]> {
    return this.http.get<ServiceCentre[]>(`${this.baseUrl}/servicecentre`);
  }
  getServiceCentreCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/servicecentre/count`);
  }

  // Partners
  getAllPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(`${this.baseUrl}/partner`);
  }
  getPartnerCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/partner/count`);
  }

  // Staff
  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.baseUrl}/staff`);
  }
  getActiveStaffCount(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/staff/active-count`);
  }
}
