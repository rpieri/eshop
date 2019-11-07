import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  public orders: Order[] = null;

  constructor(
    private navCtrl: NavController,
    private service: DataService
  ) { }

  ngOnInit() {
    this.service.getOrders().subscribe(
      (res: Order[]) => {
        this.orders = res;
      }
    );
  }

  goToOrder(order: string) {
    this.navCtrl.navigateRoot(`/orders/${order}`)
  }

}
