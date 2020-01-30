import { Server } from 'miragejs';

const posts = [
  {
    id: 1580385920514,
    title: 'Post 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deleniti at voluptatum iure magnam laborum id, aut qui animi et quisquam expedita rem, sed, fuga quas? Officia corrupti consectetur blanditiis?',
    like: false
  },
  {
    id: 1580385928455,
    title: 'Post 2',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolores voluptates nisi illo praesentium? Ipsa a itaque repellendus hic accusamus, ab voluptatibus rem dicta, unde ut dolorem accusantium quisquam ipsum.',
    like: true
  },
  {
    id: 1580385936498,
    title: 'Post 3',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dolores voluptates nisi illo praesentium? Ipsa a itaque repellendus hic accusamus, ab voluptatibus rem dicta, unde ut dolorem accusantium quisquam ipsum.',
    like: true
  }
];

export default () => {
  new Server({
    seeds(server) {
      server.db.loadData({
        posts
      });
    },
    routes() {
      this.namespace = '/api';

      this.get('/posts', schema => schema.db.posts);

      this.post('/posts', (schema, request) => {
        const post = JSON.parse(request.requestBody);
        post.id = Date.now();
        post.description = posts[0].description;
        return schema.db.posts.insert(post);
      });

      this.put('/posts/:id', (schema, request) => {
        const post = schema.db.posts.find(request.params.id);
        post.like = !post.like;
        return post;
      });

      this.delete('/posts/:id', (schema, request) => {
        const post = schema.db.posts.remove(request.params.id);
        return post;
      });
    }
  });
};
