import { Component, Input, OnInit } from '@angular/core';
import { PcpResult } from '../pcp-calc/pcp-calc.component';

@Component({
  selector: 'app-pcp-result',
  templateUrl: './pcp-result.component.html',
  styleUrls: ['./pcp-result.component.scss']
})
export class PcpResultComponent implements OnInit {

  @Input()
  result!: PcpResult;

  constructor() { }

  ngOnInit(): void {
  }

}
