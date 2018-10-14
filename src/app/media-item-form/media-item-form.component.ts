import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {

	form;

	constructor(private formBuilder: FormBuilder){}

	ngOnInit(){
		this.form = this.formBuilder.group({
			medium: this.formBuilder.control('Movies'),
			name: this.formBuilder.control('', Validators.compose([
				Validators.required,
				Validators.pattern('[\\w\\-\\s\\/]+')
				])),
			category: this.formBuilder.control(''),
			year: this.formBuilder.control('', this.yearValidator)
		});
	}

	yearValidator(control){
		if(control.value.trim().length === 0){
			return null;
		}
		let year = parseInt(control.value);
		let minYear = 1900;
		let maxYear = 2025;
		if(year >- minYear && year <= maxYear){
			return null;
		} else {
			return {'year': {
				'min': minYear,
				'max': maxYear
			}};
		}
	}

	onSubmit(mediaItem){
		console.log(mediaItem)
	}



}
