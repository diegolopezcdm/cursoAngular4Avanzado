import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
	selector: 'parques',
	templateUrl: './parques.component.html'	
})

export class ParquesComponent implements OnChanges, OnInit, OnDestroy{
	@Input() nombre: string;
	@Input('metros_cuadrados') metros: number;
	public vegetacion: string;
	public abierto: boolean;

	@Output() pasameLosDatos = new EventEmitter();

	constructor(){
		this.nombre = 'nombre del parque';
		this.metros = 450;
		this.vegetacion = 'Alta';
		this.abierto = false;
	}

	ngOnChanges(changes: SimpleChanges){
		//console.log(changes)
		console.log("Existen cambios en las propiedades");
	}

	ngOnInit(){
		console.log("Metodo on init lanzado");
	}

	ngOnDestroy(){
		console.log("Metodo on destroy lanzado");
	}

	emitirEvento(){
		this.pasameLosDatos.emit({
			'nombre' : this.nombre,
			'metros' : this.metros,
			'vegetacion' : this.vegetacion,
			'abierto' : this.abierto
		});
	}
}