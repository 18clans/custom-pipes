import { NgModule } from "@angular/core";
import { ReverseStringModule } from "./reverse-string/reverse-string.module";

@NgModule({
  declarations: [],
  imports: [ReverseStringModule],
  exports: [ReverseStringModule],
})
export class PipesModule {}
