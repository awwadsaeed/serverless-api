const peopleModel = require('./people.schema.js');
exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    await peopleModel.delete({ "id": id });
    return {
      statusCode: 200,
      body: JSON.stringify({}),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};