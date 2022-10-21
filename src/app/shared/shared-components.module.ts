import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { AllEpisodesComponent } from './all-episodes/all-episodes.component';


@NgModule({
  declarations: [AllCharactersComponent],
  imports: [
    CommonModule
  ],
  exports: [AllCharactersComponent]
})

@NgModule({
  declarations: [AllEpisodesComponent],
  imports: [
    CommonModule
  ],
  exports: [AllEpisodesComponent]
})

export class SharedComponentsModule { }


//export class SharedComponentsModule { }
