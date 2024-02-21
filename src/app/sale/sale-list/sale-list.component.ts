import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Flat, House, Land } from 'src/app/shared/interface';
import { ObjectService } from 'src/app/shared/services/object.service';

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit {
title = 'Предложения на продажу'
object$:Observable<Flat[] | Land[] | House[]> | undefined

constructor(private saleObject:ObjectService){}

ngOnInit(): void {
  this.getObject()
}

getObject(){
  this.object$ = this.saleObject.get()
}

}
