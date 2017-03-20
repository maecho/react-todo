var AWS = require("aws-sdk");
var dynamo = new AWS.DynamoDB.DocumentClient();
module.exports.todosReadAll = function(event, context) {
    dynamo.scan({TableName : "playground-gcmae"}, function(err, data) {
        if (err) {
            context.fail(err); // エラー時
        } else {
            context.succeed(data); // 正常時
        }
    });
};

module.exports.update = (event, context, callback) => {
  const id = event.pathParameters.id,
        data = JSON.parse(event.body);

  const params = {
    TableName : 'playground-gcmae',
    Item: {
      id,
      data
    }
  };

  return db.put(params, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(err, params.Item);
    }
  });
};
