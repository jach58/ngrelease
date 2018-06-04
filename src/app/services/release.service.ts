import { URL_SERVICIOS } from './../config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

@Injectable()
export class ReleaseService {

  constructor(private _http: HttpClient) { }

  getAllReleases() {
    const url = URL_SERVICIOS + '/releases';
    return this._http.get(url)
      .map((resp: any) => {
        return resp.releases;
      });
  }

  saveRelease(nombre: string, descripcion: string, fileToUpload: File): Observable<any> {
    const url = URL_SERVICIOS + '/releases';
    const formData: FormData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('file', fileToUpload, fileToUpload.name);
    return this._http.post(url, formData)
     .map((resp: any) => {
      swal('Liberación enviada', resp.release.nombre, 'success');
     });
  }

}
