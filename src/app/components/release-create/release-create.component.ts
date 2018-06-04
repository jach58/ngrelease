import { ReleaseService } from './../../services/release.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-release-create',
  templateUrl: './release-create.component.html',
  styleUrls: ['./release-create.component.css']
})

export class ReleaseCreateComponent implements OnInit {
  fileToUpload: any = '';

  constructor(private _releaseService: ReleaseService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
  }


  saveRelease(f, nombre, descripcion, file: File) {
    if (f.valid) {
      this._releaseService.saveRelease(nombre.value, descripcion.value, this.fileToUpload)
        .subscribe((resp) => {
          f.reset();
          file = null;
        });
    }
  }
}
