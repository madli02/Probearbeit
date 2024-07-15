import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/probeliste.model";
import {ProductService} from "../services/product.service";
import {formatDate, NgFor} from "@angular/common";
import {PersonService} from "../services/person.service";
import {InfoService} from "../services/info.service";
import {Person} from "../model/person.model";
import {Information} from "../model/information.model";
import {Adresse} from "../model/adresse.model";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    NgFor,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  providers: [HttpClient]
})
export class DashboardComponent implements OnInit{
  product:Product[] = [];
  person!:Person;
  info!:Information;
  adresse!:Adresse;

  public constructor(private http: HttpClient, private productService: ProductService, private personService: PersonService, private infoService: InfoService) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.getPerson();
    this.getInfo();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data: any) => {
        this.product = data;
      }
    });
  }

  getPerson() {
    this.personService.getPerson().subscribe({
      next: (data: any) => {
        this.person = data;
      }
    });
  }

  getInfo() {
    this.infoService.getInfo().subscribe({
      next: (data: any) => {
        console.log(data);
        this.adresse = data.address;
        console.log(this.adresse);
        this.info = data;
      }
    });
  }
}
