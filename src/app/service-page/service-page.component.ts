import { Component } from '@angular/core';
// import serviceList from './../../assets/data/services.json';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent {
  serviceList = [
    {
      serviceName: "APPLICATION INSTALLATION",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/appliances.png",
      link: "https://vgprofessionals.com/"
    },
    {
      serviceName: "PLUMBING",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/plumbing.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "CARPENTRY",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/carpenter.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "ELECTRICAL",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/electrical.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "PAINTING",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/painting.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "REMODELING",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/remodeling.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "FLOORING",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/flooring.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "FURNITURE ASSEMBLY",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/furniture-assembly.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "KITCHEN",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/kitchen.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "BATHROOM",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/bathroom.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "FENCE REPAIR",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/fence-repair.png",
      link: "https://vgprofessionals.com/about-us/"
    },
    {
      serviceName: "GARDENING",
      img: "https://vgprofessionals.com/wp-content/uploads/2022/10/gardening.png",
      link: "https://vgprofessionals.com/about-us/"
    }
  ]
}
