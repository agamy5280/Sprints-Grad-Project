import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserAssetsService } from 'src/app/services/assets/user-assets.service';

@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss'],
})
export class AddAssetsComponent {
  constructor(private service: UserAssetsService) {}
  assetOthername: string = '';
  assetOtherdescription: string = '';
  assetOtherdocument: any;
  assetRealEstateLocation: string = '';
  assetRealEstateArea: string = '';
  assetRealEstateApartment_No: string = '';
  assetRealEstateFloor_No: string = '';
  assetRealEstateBedrooms: string = '';
  assetRealEstateDocument: any;
  assetVehicleBrand: string = '';
  assetVehicleModel: string = '';
  assetVehicleYear: string = '';
  assetVehicleMillage: string = '';
  assetVehicleColor: string = '';
  assetVehicleTransmission_type: string = '';
  assetVehicleCondition: string = '';
  assetVehicleCC: string = '';
  assetVehicleDocument: any;

  getOtherName(name: string) {
    this.assetOthername = name;
  }
  getOtherDescription(description: string) {
    this.assetOtherdescription = description;
  }
  getFile(event: any) {
    this.assetOtherdocument = event.target.files[0];
    console.log('file', this.assetOtherdocument);
  }
  onAssetOtherCreate() {
    let form = new FormData();
    form.set('name', this.assetOthername);
    form.set('description', this.assetOtherdescription);
    form.set('document', this.assetOtherdocument);
    this.service.addOtherAssetRequest(form).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log('error'),
      complete: () => {
        alert('Your request has been sent Successfully!');
        window.location.reload();
      },
    });
  }

  getLocation(location: string) {
    this.assetRealEstateLocation = location;
  }
  getArea(area: string) {
    this.assetRealEstateArea = area;
  }
  getApartment_No(apartment_No: string) {
    this.assetRealEstateApartment_No = apartment_No;
  }
  getFloor_No(floor_No: string) {
    this.assetRealEstateFloor_No = floor_No;
  }
  getBedrooms(bedrooms: string) {
    this.assetRealEstateBedrooms = bedrooms;
  }
  getRealEstateFile(event: any) {
    this.assetRealEstateDocument = event.target.files[0];
  }
  onRealEstateCreate() {
    let form = new FormData();
    form.set('location', this.assetRealEstateLocation);
    form.set('area', this.assetRealEstateArea);
    form.set('apartment_No', this.assetRealEstateApartment_No);
    form.set('floor_No', this.assetRealEstateFloor_No);
    form.set('bedrooms', this.assetRealEstateBedrooms);
    form.set('document', this.assetRealEstateDocument);
    this.service.addRealEstateAssetRequest(form).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log('error'),
      complete: () => {
        alert('Your request has been sent Successfully!');
        window.location.reload();
      },
    });
  }
  getBrand(brand: string) {
    this.assetVehicleBrand = brand;
  }
  getModel(model: string) {
    this.assetVehicleModel = model;
  }
  getYear(year: string) {
    this.assetVehicleYear = year;
  }
  getMillage(millage: string) {
    this.assetVehicleMillage = millage;
  }
  getColor(color: string) {
    this.assetVehicleColor = color;
  }

  getTransmission_Type(transmission_type: string) {
    this.assetVehicleTransmission_type = transmission_type;
  }
  getCondition(condition: string) {
    this.assetVehicleCondition = condition;
  }

  getCC(cc: string) {
    this.assetVehicleCC = cc;
  }
  getVehicleDocument(event: any) {
    this.assetVehicleDocument = event.target.files[0];
  }
  onvehicleCreate() {
    const form = new FormData();
    form.set('brand', this.assetVehicleBrand);
    form.set('model', this.assetVehicleModel);
    form.set('year', this.assetVehicleYear);
    form.set('millage', this.assetVehicleMillage);
    form.set('color', this.assetVehicleColor);
    form.set('transmission_type', this.assetVehicleColor);
    form.set('condition', this.assetVehicleCondition);
    form.set('cc', this.assetVehicleCC);
    form.set('document', this.assetVehicleDocument);
    this.service.addVehicleAssetRequest(form).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log('error'),
      complete: () => {
        alert('Your request has been sent Successfully!');
        window.location.reload();
      },
    });
  }
}
