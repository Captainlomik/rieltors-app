import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Rieltor } from 'src/app/shared/interface';
import { RieltorService } from 'src/app/shared/services/rieltor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rieltor-detail-page',
  templateUrl: './rieltor-detail-page.component.html',
  styleUrls: ['./rieltor-detail-page.component.scss']
})
export class RieltorDetailPageComponent implements OnInit {
  rieltor$!: Observable<Rieltor>
  param!: number


  constructor(private reiltorService: RieltorService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {

    this.rieltor$ = this.route.params.pipe(switchMap((params: Params) => {
      this.param = params['id']
      return this.reiltorService.get_byId(params['id'])
    }))
  }
  goBack(): void {
    this.location.back();
  }

}
