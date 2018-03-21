import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { AppComponent } from "./app.component";
import { BarGraphComponent } from "./bar-graph/bar-graph.component";
import { SectionHeaderComponent } from "./section-header/section-header.component";

@NgModule({
  declarations: [AppComponent, BarGraphComponent, SectionHeaderComponent],
  imports: [BrowserModule, NgxChartsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
