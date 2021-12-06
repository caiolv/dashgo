import { createServer, Model } from "miragejs";

type User = {
  name: string,
  email: string,
  created_at: string,
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    routes() {
      this.namespace = 'api'; // /api/users
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      this.namespace = ''; // quando terminar de definir as rotas do mirage, ele vai voltar o estado original pra n prejudicar o api do next
      this.passthrough();
    },
  });

  return server;
}
