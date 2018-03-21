import { Component } from "@angular/core";
import { recycledMaterialsData } from "./data/recycled-materials";
import { altRecycledMaterialsData } from "./data/alt-recycled-materials";
import { DataPoint } from "./model/data-point";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  recycledMaterialsData: DataPoint[];
  recycledPercentage = 0;
  totalMaterials = 0;
  recycledMaterials = 0;
  private dataToggled = false;

  constructor() {
    this.recycledMaterialsData = recycledMaterialsData;
    this.determineRecycledPercentage();
  }

  tonnageBlurb = (): string => {
    return `Het verantwoord en zo duurzaam mogelijk afvoeren van reststromen is een belangrijk onderdeel van het recyclingproces. In het overzicht is te zien welke en hoeveel grondstoffen voor hergebruik geschikt zijn gemaakt. Uw organisatie heeft een recyclingspercentage van ${this.recycledPercentage.toPrecision(
      4
    )} % aangetoond dat afval een toekomst heeft.`;
  };

  private determineRecycledPercentage = (): void => {
    if (this.recycledMaterialsData) {
      this.recycledMaterialsData.map(d => {
        this.totalMaterials += d.value;

        if (d.name !== "Reststoffen") {
          this.recycledMaterials += d.value;
        }
      });

      if (this.totalMaterials > 0) {
        this.recycledPercentage =
          this.recycledMaterials / this.totalMaterials * 100;
      }
    }
  };

  updateData = (): void => {
    if (this.dataToggled) {
      this.recycledMaterialsData = recycledMaterialsData;
      this.dataToggled = false;

    } else {
      this.recycledMaterialsData = altRecycledMaterialsData;
      this.dataToggled = true;
    }

    this.determineRecycledPercentage();
  }
}
