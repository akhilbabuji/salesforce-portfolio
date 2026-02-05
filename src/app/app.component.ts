import { Component } from '@angular/core';

interface PortfolioItem {
  title: string;
  description: string;
  link?: string;
  year?: string;
}

interface EducationItem {
  title: string;
  college: string;
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
    { title: 'Experience Cloud', year: '2024', description: 'Designed and implemented custom solutions using Lightning Web Components (LWC) and Apex in Experience Cloud.' },
    { title: 'Sales Cloud', year: '2023', description: 'Designed and implemented a custom Email Drafting tool which leverages AI to suggest relevant subject and body based on the call transcript for the Insurance Advisors to respond effectively' },
    { title: 'Service Cloud', year: '2022', description: 'Built a robust Apex integration layer connecting Salesforce with external ERP via REST.' }
  ];
  education: EducationItem[] = [
    { title: 'Bachelor of Technology in ECE', college: 'College of Engineering Trivandrum', year: '2013-2017' },
    { title: 'Master of Technology in Telecommunications', college: 'National Institute of Technology, Calicut', year: '2020-2022'}
  ];
}