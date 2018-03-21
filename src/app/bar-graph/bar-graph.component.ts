import { Component, Input } from "@angular/core";
import { DataPoint } from "../model/data-point";

@Component({
  selector: "app-bar-graph",
  templateUrl: "bar-graph.component.html",
  styleUrls: ["bar-graph.component.scss"]
})
export class BarGraphComponent {
  yScaleMax: number = 1000;
  viewPortSize: number[];
  pieSize: number[] = [300, 300];

  constructor() {
  }

  @Input() recycledPercentage: number;
  @Input() totalMaterials: number;
  @Input() recycledMaterials: number;
  @Input() recycledMaterialsData: DataPoint[];

  pieData = (): DataPoint[] => {
    return [
      {
        name: "recycled",
        value: this.recycledMaterials
      },
      {
        name: "rest",
        value:
        this.totalMaterials - this.recycledMaterials
      }
    ]
  };

  determineHighestYValue(data: DataPoint[]): number {
    let result = 1;

    data.map(d => {
      if (d.value > result) {
        result = d.value;
      }
    });

    return result;
  }
}
