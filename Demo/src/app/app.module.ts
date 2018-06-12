import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { RepeatDirective } from './repeat.directive';
import { CustomAttributeDirectiveDirective } from './custom-attribute-directive.directive';
import { TitlePipe } from './title.pipe';
import { TempFormComponent } from './temp-form/temp-form.component';
import { PassValidDirective } from './pass-valid.directive';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    MyCompComponent,
    RepeatDirective,
    CustomAttributeDirectiveDirective,
    TitlePipe,
    TempFormComponent,
    PassValidDirective,
    ModelDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
