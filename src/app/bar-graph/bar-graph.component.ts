import { Component } from "@angular/core";
import * as recycledMaterialData from "../data/recycled-materials.json";

@Component({
  selector: "app-bar-graph",
  templateUrl: "bar-graph.component.html"
})
export class BarGraphComponent {
  recycledMaterial: any;

  constructor() {
    console.log(recycledMaterialData);
    this.recycledMaterial = recycledMaterialData;
  }
}
