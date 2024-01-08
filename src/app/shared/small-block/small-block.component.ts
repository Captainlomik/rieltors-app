import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-block',
  templateUrl: './small-block.component.html',
  styleUrls: ['./small-block.component.scss']
})
export class SmallBlockComponent {
  @Input() FirstName: string| undefined = ''
  @Input() MiddleName: string | undefined = ''
  @Input() LastName: string | undefined = ''
  @Input() email: string | undefined = ''
  @Input() phone: string | undefined = ''


}
