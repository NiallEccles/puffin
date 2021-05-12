import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-items",
  templateUrl: "./list-items.component.html",
  styleUrls: ["./list-items.component.scss"],
})
export class ListItemsComponent implements OnInit {
  public activeItemId: number;

  constructor() {
    this.activeItemId = 0;
  }

  ngOnInit(): void {}

  public setActiveItemId(id: number) {
    this.activeItemId = id;
  }
}
