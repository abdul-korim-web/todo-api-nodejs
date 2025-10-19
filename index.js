import http from "http";
import url from "url";
// main todo list
let todolist = [
];
const server = http.createServer((req, res) => {
  // parse url
  let parseurl = url.parse(req.url, true);
  let paths = parseurl.pathname.replace(/\/+$/, "");
  let path = paths.split(`/`);

  // home page
  if (req.method === `GET` && req.url == `/`) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.write(`Wellcome to our app`);
    res.end();
  }
  // show all todo items with json formet
  else if (req.method == `GET` && path[1] === `todo` && !path[2]) {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(todolist));
    res.end();
  }
  // show single todo item with id
  else if (req.method === `GET` && path[1] === `todo` && path[2]) {
    // find id
    const id = Number(path[2]);

    //find item
    const item = todolist.find((todo) => todo.id === id);
    if (item) {
      // show item
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(item));
      res.end();
    } else {
      // item not found
      res.writeHead(404, { "content-type": "text/plain" });
      res.write(`Todo not found 😢`);
      res.end();
    }
  }
  // post new todo item
  else if (req.method === `POST` && path[1] == `todo`) {
    let body = ``;
    req.on(`data`, (chunk) => (body += chunk));
    req.on(`end`, () => {
      try {
        const data = JSON.parse(body);
        const newtodo = {
          id: todolist.length + 1,
          title:data?.title || "undefaind",
          description:data?.description || "undefaind",
          status:data?.status || false,
          time: new Date().toLocaleString()
        };
        todolist.push(newtodo);
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "New todo added success ✅" }));
      } catch (error) {
        res.writeHead(404, { "content-type": "text/plain" });
        res.end(`New todo item not added . fail 😢`);
      }
    });
  }
  // chenge todo item with id
  else if (req.method === `PUT` && path[1] == `todo` && path[2]) {
    // data receive
    let body = ``;
    req.on(`data`, (chuck) => (body += chuck));
    req.on(`end`, () => {
      // find target id
      const id = Number(path[2]);
      const targetindex = todolist.findIndex((item) => item.id === id);
      if (targetindex === -1) {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "data not found . Try Again!" }));
      } else {
        // update todo list
        try {
          const data = JSON.parse(body);
          todolist[targetindex] = {
            ...todolist[targetindex],
           title:data?.title  || todolist[targetindex].title,
          description:data?.description || todolist[targetindex].description ,
          status:data?.status || todolist[targetindex].status,
          time: new Date().toLocaleString()
          };
          res.writeHead(200, { "content-type": "application/json" });
          res.end(
            JSON.stringify({
              message: "todo updated successfully ✅",
              todo: todolist[targetindex],
            })
          );
        } catch (error) {
          res.writeHead(404, { "content-type": "application/json" });
          res.end(JSON.stringify({ message: " Try Again!" }));
        }
      }
    });
  }
  // delete target item
  else if (req.method === `DELETE` && path[1] == `todo` && path[2]) {
    try {
      // find target id
      let id = Number(path[2]);
      // find target todo item index
      let targetindex = todolist.findIndex((item) => item.id === id);
     
      if (targetindex === -1) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: "todo item not found 😢" }));
      } else{
          todolist.splice(targetindex)
          res.writeHead(200, { "content-type": "application/json" });
          res.end(JSON.stringify({ message: "todo item deleted success 😍", "tododeleteitem":todolist[targetindex] }));

      }
    } catch (error) {
        res.writeHead(400, { "content-type": "application/json" });
        res.end(JSON.stringify({ message: error.message }));


    }
  }
});
// server listin
const port = 5000;
server.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
