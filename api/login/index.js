const FileSystem = require('fs');
module.exports = async function (context, req) {
    context.log('HTTP trigger function processed a request.');

    const responseMessage = FileSystem.readFileSync("./login/response.json");

    context.res = {
        status: 200,
        body: responseMessage,
    };
};