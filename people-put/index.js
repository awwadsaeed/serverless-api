const peopleModel = require('./people.schema.js');
exports.handler = async (event) => {
  try {
    const id = event?.pathParameters?.id;
    const { name, age } = JSON.parse(event.body);
      const results = await peopleModel.update({"id": id}, { name, age });
    return {
      statusCode: 200,
      body: JSON.stringify(results),
    };
  } catch (e) {
    return {
      status: 500,
      message: e.message,
    };
  }
};