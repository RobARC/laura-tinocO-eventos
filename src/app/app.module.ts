import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildsPacksComponent } from './childs-packs/childs-packs.component';
import { EventosSocialesComponent } from './eventos-sociales/eventos-sociales.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FooterComponent } from './footer/footer.component';
import { QuienesComponent } from './quienes/quienes.component';
import { routes } from '../app//app-routing.module'
import { RouterModule } from '@angular/router';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { environment } from 'src/environments/environment.development';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ChildsPacksComponent,
    EventosSocialesComponent,
    GaleriaComponent,
    FooterComponent,
    QuienesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
