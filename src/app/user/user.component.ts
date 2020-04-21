import {
  Component,
  OnInit,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { User } from '../models/rootobject';
import { EventEmitter } from 'events';

@Component({
  selector: 'my-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit(): void {}
}
