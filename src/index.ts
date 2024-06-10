import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger';
import { cookie } from '@elysiajs/cookie';
import { jwt } from '@elysiajs/jwt';
import path from "path";

import { Handler, Page } from "./router";

const app = new Elysia()
  .onRequest((ctx) => {
    console.log('global event request=', ctx.request.method);
  })
  .onParse(({ request }) => {
    console.log('global event parse request=', request);
  })
  .onResponse(() => {
    console.log('global event response');
  })
  .onError(({ code, error }) => {
    console.log('global event error!',code);
    return new Response('global error supervisor '+String(error));
  });

app.use(staticPlugin());
app.use(cors());
app.use(jwt({ name: 'jwt', secret: 'Fischl von Luftschloss Narfidort' }));
app.use(cookie());
console.log('log location:',path.resolve(import.meta.dir,'../elysia-log/'));
app.use(swagger());

app.use(Handler);
app.use(Page);

app.listen(3000, () => {
  console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
});


