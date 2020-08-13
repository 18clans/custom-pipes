import { NgModule } from "@angular/core";
import { ReverseString } from "./reverse-string.pipe";

@NgModule({
  declarations: [ReverseString],
  exports: [ReverseString],
})
export class ReverseStringModule {}
