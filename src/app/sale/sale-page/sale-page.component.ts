import { Component } from '@angular/core';


@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent {
  title = 'Продажа'

  tabs = ['Пользователь', 'Объект недвижимости', 'Предложение'];
  select = 0
  typeOfHousing: string = 'flat'


  next(index: number) {
    this.select = index + 1
  }

  previous(index: number) {
    this.select = index - 1

  }
}
