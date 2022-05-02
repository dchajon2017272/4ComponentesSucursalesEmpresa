import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresasService } from 'src/app/services/empresas.service';


@Component({
  selector: 'app-ver-empresas',
  templateUrl: './ver-empresas.component.html',
  styleUrls: ['./ver-empresas.component.scss'],
  providers: [EmpresasService]
})
export class VerEmpresasComponent implements OnInit {

  constructor(
    public _activatedRoute: ActivatedRoute,
    public _empresasService: EmpresasService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta)=>{
      console.log(dataRuta.get('idEmpresa'));
      this.getEmpresaId(dataRuta.get('idEmpresa'));
    })
  }

  getEmpresaId(idEmpresa){
    this._empresasService.obtenerEmpresaId(idEmpresa).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{

      }
    )
  }

}
