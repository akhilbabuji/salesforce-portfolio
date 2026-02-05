import { Component } from '@angular/core';

interface PortfolioItem {
  title: string;
  description: string;
  link?: string;
  year?: string;
}

interface EducationItem {
  title: string;
  year: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Akhil K B.';
  title = 'Salesforce Developer';
  photo = 'assets/537A9670 copy.jpg';
  summary = `Experienced Salesforce Developer specialized in LWC and Apex development in Sales, Service, and Experience Cloud. Skilled at building scalable automations, integrations, and custom UI.`;
  portfolio: PortfolioItem[] = [
    { title: 'Sales Cloud Implementation', year: '2024', description: 'Designed and implemented Sales Cloud with custom lead-to-opportunity flows and automation.' },
    { title: 'Service Cloud Migration', year: '2023', description: 'Migrated legacy ticketing system into Service Cloud with omni-channel routing.' },
    { title: 'Apex Integration Layer', year: '2022', description: 'Built a robust Apex integration layer connecting Salesforce with external ERP via REST.' }
  ];
  education: EducationItem[] = [
    { title: 'Bachelor of Technology in ECE', year: '2013-2017' },
    { title: 'Master of Technology in Telecommunications', year: '20202022'}
  ];
}