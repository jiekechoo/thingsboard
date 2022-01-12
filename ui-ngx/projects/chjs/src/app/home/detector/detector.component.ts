import { Component, Input, OnInit } from "@angular/core";
export interface PeriodicElement1 {
  line: string;
  level: string;
  name: string;
  type: string;
  current: string;
}

const ELEMENT_DATA1: PeriodicElement1[] = [
  { line: "全部", level: "全部", name: "全部", type: "全部", current: "100台" },
];

@Component({
  selector: "app-detector",
  templateUrl: "./detector.component.html",
  styleUrls: ["./detector.component.scss"],
})
export class DetectorComponent implements OnInit {
  @Input() isLoggedIn: any;

  /** Based on the screen size, switch from standard to one column per row */
  displayedColumns1: string[] = ["line", "level", "name", "type", "current"];
  dataSource1 = ELEMENT_DATA1;

  constructor() {}

  ngOnInit(): void {}
}
