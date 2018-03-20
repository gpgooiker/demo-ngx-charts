import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppComponent } from "./app.component";
import { BarGraphComponent } from "./bar-graph/bar-graph.component";

@NgModule({
  declarations: [AppComponent, BarGraphComponent],
  imports: [BrowserModule, NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
