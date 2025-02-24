export default defineEventHandler((event) => {
  const ignoredPaths = /^\/__nuxt_error/;

  if (ignoredPaths.test(event.node.req.url || "")) {
    return;
  }

  if (event.node.req.url?.endsWith("/")) {
    return;
  }
  // console.log(event.node.req.method, event.node.req.url)
  if (!event.node.req.url?.endsWith("/") && event.node.req.method === "GET") {
    event.node.res.writeHead(301, { Location: event.node.req.url + "/" });
    event.node.res.end();
  }
});
