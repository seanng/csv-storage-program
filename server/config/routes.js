const postData = (req, res) => {
  console.log('reqbody', req.body)
  if (req) {
    res.status(201).send('okay.')
  }
}

const getData = (req, res) => {
  console.log('query', req.params.query)
}

module.exports = (app, express) => {
  app.route('/api')
    .post(postData)
    .get(getData)
}