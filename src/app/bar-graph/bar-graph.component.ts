import { Component, Input } from "@angular/core";
import { DataPoint } from "../model/data-point";

@Component({
  selector: "app-bar-graph",
  templateUrl: "bar-graph.component.html",
  styleUrls: ["bar-graph.component.scss"]
})
export class BarGraphComponent {
  yScaleMax: number = 1000;
  viewPortSize: number[] = [280, 400];
  pieSize: number[] = [120, 120];
  pieArcWidth = 0.2;
  doughnut = true;
  showPieLabels = false;
  showPieAnimations = false;

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
        value: this.recycledPercentage
      },
      {
        name: "F",
        value: 100 - this.recycledPercentage
      }
    ]
  };

  colorScheme = {
    domain: ['#ABCB59', '#EF7C11', '#009ED9', '#07A74C', '#ABCB59', '#EF7C11', '#009ED9', '#07A74C']
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
