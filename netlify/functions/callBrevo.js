const axios = require('axios')

exports.handler = function (event) {
  return axios
    .get('https://api.brevo.com/v3/emailCampaigns/39?statistics=linksStats', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
    })
    .then((res) => ({
      statusCode: 200,
      body: JSON.stringify(res.data),
    }))
}
