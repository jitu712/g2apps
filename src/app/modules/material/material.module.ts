import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';

import {
  MatChipsModule, MatTabsModule, MatInputModule, MatFormFieldModule, MatToolbarModule,
  MatButtonModule, MatDividerModule, MatSidenavModule, MatIconModule, MatListModule,
  MatCardModule, MatMenuModule, MatSpinner, MatProgressSpinnerModule, MatProgressBarModule,
  MatExpansionModule, MatSelectModule, MatButtonToggleModule, MatBottomSheetModule,
  MatDialogModule, MatRadioModule, MatAutocompleteModule, MatTableModule, MatBadgeModule,
  MatSlideToggleModule, MatCheckboxModule, MatSnackBarModule, MatNativeDateModule, MatDatepickerModule,
  MatGridListModule, MatRippleModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MatChipsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatRadioModule,
    MatExpansionModule,
    MatBottomSheetModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    MatTableModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatGridListModule,
    MatRippleModule,
    MatTooltipModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
