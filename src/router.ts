import { Elysia, t } from "elysia";
import { html } from '@elysiajs/html';
import { User } from "./mysql/index";

export const Handler = new Elysia()
  .get('/users', async () => {
    let res = await User.findAll();
    console.log(res);
    return { msg: `hello users` }
  });


export const Page = new Elysia()
  // .use(html())
  .get("/", ({set}) => {
    set.headers['Content-type'] = 'text/html';

    return `
    <html lang='en'>
    <head>
      <title>Hello World</title>
    </head>
    <body>
      <h1>Hello World</h1>
    </body>
    </html>`;
  }, {
    beforeHandle() {
      console.log('before handle');
    },
    afterHandle() {
      console.log('after handle');
    }
  })
  .get("/admin", ({ query }) => {
    console.log(query);
    return `<h1>hello elysia</h1>`;
  }, {
    query: t.Object({
      name: t.String()
    }),
    // error(){
    //   return '/admin error!';
    // }
  })
  .get("/error", (ctx) => {
    throw new Error('throw error!!!!!!!!!!!!!!!!!');
    // return 'error';
  })