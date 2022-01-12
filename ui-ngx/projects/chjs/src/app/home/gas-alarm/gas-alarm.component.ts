import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-gas-alarm",
  templateUrl: "./gas-alarm.component.html",
  styleUrls: ["./gas-alarm.component.scss"],
})
export class GasAlarmComponent implements OnInit {
  @Input() isLoggedIn: any;
  constructor() {}

  ngOnInit(): void {}
}
