/**
 * Created by XRene on 16/9/11.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import AppComponent from './app.component';
import SynaxComponent from './components/synax/synax.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        SynaxComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
