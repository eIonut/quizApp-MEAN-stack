import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CategoryButtonComponent } from '../category-button/category-button.component';
import {AppModule} from "../app.module";
import {RedirectPopupComponent} from "../redirect-popup/redirect-popup.component";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
    declarations: [
        HomeComponent,
        CategoryButtonComponent,
        RedirectPopupComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatIconModule,
    ],
    exports: [
        CategoryButtonComponent
    ],

})
export class HomeModule { }
