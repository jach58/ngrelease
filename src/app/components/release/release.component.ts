import { Component, OnInit } from '@angular/core';
import { ReleaseService } from '../../services/release.service';

@Component({
  selector: 'app-release',
  templateUrl: './release.component.html',
  styleUrls: ['./release.component.css']
})

export class ReleaseComponent implements OnInit {
  releases = [];

  constructor(private _releaseService: ReleaseService) {}

  ngOnInit() {
    this.cargarReleases();
  }

  cargarReleases() {
    this._releaseService.getAllReleases()
      .subscribe(releases => {
        this.releases = releases;
      });
  }



}
