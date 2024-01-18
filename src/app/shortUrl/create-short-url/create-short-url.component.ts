import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { CreateShortUrlPayload } from '../model/create-short-url.payload';
import { Router } from '@angular/router';
import { ShortUrlService } from '../short-url-service/short-url.service';
import { ShortUrlModel } from '../model/short-url-model';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-short-url',
  templateUrl: './create-short-url.component.html',
  styleUrls: ['./create-short-url.component.css']
})
export class CreateShortUrlComponent implements OnInit {

  createShortUrlForm: FormGroup = new FormGroup({});
  shortUrlPayload: CreateShortUrlPayload = { url: '' };
  shortUrl: ShortUrlModel=new ShortUrlModel;
  

  constructor(private router:Router,private shortUrlService: ShortUrlService, private clipboard: Clipboard,private snackBar: MatSnackBar){
  }
  
  ngOnInit(): void {
    this.createShortUrlForm = new FormGroup({
      url: new FormControl('', [Validators.required, Validators.pattern('(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+([^\s]*)')]),
    });
  }
  createShortUrl() {
    this.shortUrlPayload.url = this.createShortUrlForm.get('url')?.value;
    this.shortUrlService.createShortUrl(this.shortUrlPayload).subscribe(
      (data) => {
        this.shortUrl=data;
        this.router.navigateByUrl('/inicio');
        this.mostrarMensaje("Short Url Creado correctamente");
      }
    );
  }
  copiarUrl(): void {
    const urlToCopy = this.shortUrl.shortUrl;
  
    if (urlToCopy) {
      this.clipboard.copy(urlToCopy);
      this.mostrarMensaje("Short Url copiado!!");
    }
  }
  mostrarMensaje(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000, // Duración en milisegundos
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }


}
