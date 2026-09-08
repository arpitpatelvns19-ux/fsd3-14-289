import http from "http";
import { getAllTeams } from "./teams.js";

const PORT = 5000;

const sendJSONResponse = (res,statusCode,data) => {
    res.writeHead(statusCode), {
        "Content-Type": "application/json"
    });
    const parseJSONBody = (req) => {
        let body = "";

        res.on("data", (chunk) => {
            body += chunk.toString();
        });

        res.on("end", () => {
            try {
                
            } catch (error) {
                reject(error);
            }
        });

    const server = http.createServer((req, res) => {
        const{ pathname, query } = parse(req.url, true);
        const { method } = req;
        console.log("pathname:", pathname);
        console.log("query:", query);
        console.log("method:", method);

        if (pathname === "/api/v1/teams" && method === "GET") {
            let teams = getAllTeams();
            sendJSONResponse(res, 200, teams);
        } else {
            return sendJSON(res,200,teams);
        }else {
            res.statusCode
            res.end("Not Found");

server.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});