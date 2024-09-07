const Url = require("../model/Url");

exports.postAddUrl((req, res, next) => {
  const url = req.body.url;

  Url.findOne({ url: url })
    .then((existurl) => {
      if (existurl) {
        return res.status(404).json({
          massage: "This Link is Already Exist",
        });
      }
      const url = new Url({
        url: url,
      });
      url
        .save()
        .then((url) => {
          return res.status(404).json({
            massage: "successful Add new url",
            code: url.shorturl,
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({
            message: "Error saving the URL",
            error: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: "Error Chacking the URL",
        error: err,
      });
    });
});
