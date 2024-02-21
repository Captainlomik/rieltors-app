import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() getRieltors = new EventEmitter()

  constructor(private dialog: MatDialog,
    public rieltorService: RieltorService,
    public alert: AlertService) { }

  openPopup() {
    const ref = this.dialog.open(CreatePopupComponent, {
      data: this.rieltor
    })
    ref.afterClosed().subscribe(
      () => {
        this.getRieltors.emit()
      })
  }

  delPerson(rieltor: Rieltor) {
    this.rieltorService.delete(rieltor.id).subscribe(el => {
      this.getRieltors.emit()
      this.alert.warning('Риелтор удален')
    })
  }
}
