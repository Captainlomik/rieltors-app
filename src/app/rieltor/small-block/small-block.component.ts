import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Rieltor } from 'src/app/shared/interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { RieltorService } from 'src/app/shared/services/rieltor.service';
import { CreatePopupComponent } from '../create-popup/create-popup.component';

@Component({
  selector: 'app-small-rieltor',
  templateUrl: './small-block.component.html',
  styleUrls: ['./small-block.component.scss']
})
export class SmallBlockRieltorComponent {
  @Input() rieltor: Rieltor | undefined

  constructor(private dialog: MatDialog,
     public rieltorService: RieltorService,
     public alert: AlertService ) { }

  ngOnInit() {
  } 

  openPopup() {
    this.dialog.open(CreatePopupComponent, {
      data: this.rieltor
    })
  }

  delPerson(rieltor: Rieltor) {
    this.rieltorService.delete(rieltor.id).subscribe(el => {
      this.alert.warning('Риелтор удален')
    })
  }
}
