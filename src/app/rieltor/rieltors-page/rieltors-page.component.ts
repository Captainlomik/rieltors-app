import { Component } from '@angular/core';
import { Rieltor } from '../../shared/interface';
import { Observable } from 'rxjs';
import { RieltorService } from '../../shared/services/rieltor.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatePopupComponent } from '../create-popup/create-popup.component';

@Component({
  selector: 'app-rieltors-page',
  templateUrl: './rieltors-page.component.html',
  styleUrls: ['./rieltors-page.component.scss']
})
export class RieltorsPageComponent {
  title = 'Риелторы'
  search = '';
  rieltors$: Observable<Rieltor[]> | undefined

  constructor(private rieltorService: RieltorService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getRieltors()
  }

  openPopup() {
    this.dialog.open(CreatePopupComponent, {
    })
  }

  getRieltors() {
    this.rieltors$ = this.rieltorService.get()
  }

}
