import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Post 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti at voluptatum iure magnam laborum id, aut qui animi et quisquam expedita rem, sed, fuga quas? Officia corrupti consectetur blanditiis?',
      favourite: false
    },
    {
      title: 'Post 2',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolores voluptates nisi illo praesentium? Ipsa a itaque repellendus hic accusamus, ab voluptatibus rem dicta, unde ut dolorem accusantium quisquam ipsum.',
      favourite: true
    },
    {
      title: 'Post 3',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolores voluptates nisi illo praesentium? Ipsa a itaque repellendus hic accusamus, ab voluptatibus rem dicta, unde ut dolorem accusantium quisquam ipsum.',
      favourite: true
    }
  ];
}
