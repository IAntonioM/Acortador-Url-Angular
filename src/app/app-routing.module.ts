import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListShortUrlComponent } from './shortUrl/list-short-url/list-short-url.component';
import { CreateShortUrlComponent } from './shortUrl/create-short-url/create-short-url.component';
const routes: Routes = [
  {path:'',component:CreateShortUrlComponent},
  {path:'inicio',component:CreateShortUrlComponent},
  {path:'listar',component:ListShortUrlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
