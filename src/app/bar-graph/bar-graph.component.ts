import { Component } from "@angular/core";
import { recycledMaterialsData } from "../data/recycled-materials";
import { DataPoint } from "../model/data-point";

@Component({
  selector: "app-bar-graph",
  templateUrl: "bar-graph.component.html"
})
export class BarGraphComponent {
  recycledMaterial: DataPoint[] = [];
  yScaleMax: number = 1000;
  viewPortSize: number[] = [600, 600];

  constructor() {
    this.recycledMaterial = recycledMaterialsData;

    this.yScaleMax = this.determineHighestYValue(this.recycledMaterial);
  }

  determineHighestYValue(data: DataPoint[]): number {
    let result = 1;

    data.map(d => {
      if (d.value > result) {
        result = d.value;
      }
    })

    return result;
  }
}
