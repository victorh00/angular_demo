import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Anotacao } from '../anotacao';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-excluir',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './excluir.component.html',
  styleUrl: './excluir.component.css',
})
export class ExcluirComponent implements OnInit {
  constructor(
    private dbDatabase: DatabaseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  anotacao!: Anotacao;
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dbDatabase.buscarPorID(parseInt(id!)).subscribe((anotacao) => {
      this.anotacao = anotacao;
      console.log(anotacao);
    });
  }
  excluirAnotacao(anotacao: Anotacao): void {
    this.dbDatabase.deletar(anotacao.id!).subscribe(() => {
      alert(`anotação ${anotacao.id} excluída!`);
      this.router.navigate(['/memoteca']);
    });
  }
}
