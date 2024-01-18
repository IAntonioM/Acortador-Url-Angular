import { Component, OnInit } from '@angular/core';
import { ShortUrlModel } from '../model/short-url-model';
import { ShortUrlService } from '../short-url-service/short-url.service';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { CreateShortUrlPayload } from '../model/create-short-url.payload';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-short-url',
  templateUrl: './list-short-url.component.html',
  styleUrls: ['./list-short-url.component.css']
})
export class ListShortUrlComponent implements OnInit {
  urls: ShortUrlModel[] = [];
  editShortUrlForm: FormGroup = new FormGroup({});
  constructor(private shortUrlService:ShortUrlService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.editShortUrlForm = new FormGroup({
      url: new FormControl('', [Validators.required, Validators.pattern('(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+([^\s]*)')]),
    });
    this.getUrls();
  }
  getUrls(){
    this.shortUrlService.getAllShortUrls()
      .subscribe(res=>{
        this.urls=res;
      })
  }
  guardarCambios(url: ShortUrlModel, form: NgForm): void {
    const urlControl = form.controls['url'];

    if (urlControl && urlControl.valid) {
        const urlPayload: CreateShortUrlPayload = {
            url: urlControl.value,
        };

        this.shortUrlService.updateShortUrl(url.id!, urlPayload).subscribe(() => {
            console.log('Cambios guardados con éxito');
            this.getUrls();
            this.mostrarMensaje('Cambios guardados con éxito');
        }, error => {
            console.error('Error al guardar cambios', error);
        });
    }
}

  eliminarUrl(id: number | undefined) {
    if (id !== undefined) {
      this.shortUrlService.deleteShortUrl(id).subscribe(() => {
        this.getUrls();
        this.mostrarMensaje('Se elimino correctamente');
      });
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
