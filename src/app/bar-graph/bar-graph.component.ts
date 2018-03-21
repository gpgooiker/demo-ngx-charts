import { Component, Input } from "@angular/core";
import { DataPoint } from "../model/data-point";

@Component({
  selector: "app-bar-graph",
  templateUrl: "bar-graph.component.html",
  styleUrls: ["bar-graph.component.scss"]
})
export class BarGraphComponent {
  yScaleMax: number = 1000;
  viewPortSize: number[] = [260, 400];
  pieSize: number[] = [290, 180];

  constructor() {
  }

  @Input() recycledPercentage: number;
  @Input() totalMaterials: number;
  @Input() recycledMaterials: number;
  @Input() recycledMaterialsData: DataPoint[];

  pieData = (): DataPoint[] => {
    return [
      {
        name: "Gerecycled",
        value: this.recycledMaterials
      },
      {
        name: "Rest",
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
