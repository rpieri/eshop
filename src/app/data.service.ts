import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

const BASEURL = environment.apiEndpoint;

@Injectable({
   providedIn: 'root'
})
export class DataService {

   constructor(private http: HttpClient){}

   public authenticate(data: any){
      return this.http.post(`${BASEURL}/v1/login`, data);
   }

   public getMonthlySalesChartData(){
      return this.http.get(`${BASEURL}/v1/reports/ms`);
   }

   public getOrders() {
      return this.http.get(`${BASEURL}/v1/orders`);
   }

   public getOrder(order: string){
      return this.http.get(`${BASEURL}/v1/orders/${order}`);
   }
}