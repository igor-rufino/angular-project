import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cursos: Curso[] = []

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.pesquisar().subscribe(cs => this.cursos = cs)
  }

}
