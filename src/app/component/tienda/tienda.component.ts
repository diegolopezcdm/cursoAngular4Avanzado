import { Component, OnInit } from '@angular/core';
declare var jQuery:any;
declare var $:any;

@Component({
	selector: 'tienda',
	templateUrl: './tienda.component.html',
	styleUrls: ['tienda.component.css']
})
export class TiendaComponent implements OnInit{
	public titulo;
	public nombreDelParque: string;
	public miParque;
	public dataModel;

	constructor(){
		this.titulo = 'Esta es la tienda';
	}

	mostrarNombre(){
		console.log(this.nombreDelParque);
	}

	verDatosParque(event){
		console.log(event);
		this.miParque=event;
	}

	ngOnInit(){
		$('#textojq').hide();
		$('#botonjq').click(function(){
			$('#textojq').slideToggle();
			});

		$('#caja').dotdotdot();
		
	}

	leerDatos(event){
		console.log(event);
		//console.log(this.dataModel);
	}
}