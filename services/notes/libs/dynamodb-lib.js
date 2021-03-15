import AWS from "aws-sdk";
AWS.config.update({ region: "eu-west-3" });
const client = new AWS.DynamoDB.DocumentClient();

export default {
    get: (params) => client.get(params).promise(),
    put: (params) => client.put(params).promise(),
    query: (params) => client.query(params).promise(),
    update: (params) => client.update(params).promise(),
    delete: (params) => client.delete(params).promise(),
};
