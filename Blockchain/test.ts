import { serve } from "https://deno.land/std@0.83.0/http/server.ts";
const s = serve({ port: 8880 });
console.log("http://localhost:8880/");
for await (const req of s) {
  req.respond({ body: "haefsf" });
}
