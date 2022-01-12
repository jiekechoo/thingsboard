import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-fault-alarm",
  templateUrl: "./fault-alarm.component.html",
  styleUrls: ["./fault-alarm.component.scss"],
})
export class FaultAlarmComponent implements OnInit {
  @Input() isLoggedIn: any;
  constructor() {}

  ngOnInit(): void {}
}
