import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { MainPageComponent } from './main-page.component';  // Import your component

@NgModule({
  declarations: [
    MainPageComponent,  // Declare your component
  ],
  imports: [
    CommonModule,  // Add CommonModule here for ngIf and ngFor
  ],
  exports: [MainPageComponent]  // Export the component if you need it in other modules
})
export class MainPageModule { }
