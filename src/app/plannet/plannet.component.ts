import { Component } from '@angular/core';
import { PlannetService } from './plannet.service';

@Component({
  selector: 'app-plannet',
  templateUrl: './plannet.component.html',
  styleUrls: ['./plannet.component.scss']
})
export class PlannetComponent {

  responseData: { id: number, name: string }[] = [];
  isEndpointCalled : boolean = false;


  constructor(private planetService: PlannetService) {

  } 
  

  getPlannets(){
    this.planetService.savePlanetData().subscribe(response => {
      console.log('Planet data saved:', response);
      this.responseData = response
      console.log('responsedata:', this.responseData);
      this.isEndpointCalled =true;
    }, error => {
      console.error('Error saving planet data:', error);
    });
    

  }

}
