import { SideProjectModel } from './models/side-project.model';
import { JobModel } from './models/job.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  jobs = [
    {
      period: '2021 - ...',
      function: 'Frontend developer',
      company: 'T4W',
      description: 'Durante o curso aprendemos na prática porque essas tecnologias fazem tanto sentido juntas',
      techs: ['Angular', '.Net Core', 'Sql Server']
    } as JobModel,
    {
      period: '2019 - 2021',
      function: 'Fullstack developer',
      company: 'Instituto Adventista de Tecnologia',
      description: 'Durante o curso aprendemos na prática porque essas tecnologias fazem tanto sentido juntas',
      techs: ['Angular', '.Net Core', 'Sql Server']
    } as JobModel,
    {
      period: '2019 - 2019',
      function: 'Fullstack developer',
      company: 'Mercante Tempos',
      description: 'Durante o curso aprendemos na prática porque essas tecnologias fazem tanto sentido juntas',
      techs: ['Node', 'React', 'React native']
    } as JobModel,
  ];
  sideProjects = [
    {
      title: 'Remember me',
      description: 'An app to reminder the user regadling all the taks'
    } as SideProjectModel,
    {
      title: 'Junior forever blog',
      description: 'A webapp for me to share my small knowledge with the comunity.'
    } as SideProjectModel,
    {
      title: 'Others projects',
      description: 'Go to my github and discover all the my projects'
    } as SideProjectModel
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
