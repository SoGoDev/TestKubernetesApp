const catsService = require('./service');
exports.groups = async function(_, res) {
  const response = await catsService.groups();

  const preparedResponse = response.data.reduce((acc, cur) => {
    acc[cur.value] ? acc[cur.value].push(cur): acc[cur.value] = [cur];
    return acc
  }, {});

  res.status(200).send(JSON.stringify(preparedResponse));
};
