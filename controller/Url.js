const Url = require("../model/Url");

exports.postAddUrl = (req, res, next) => {
  const inputurl = req.body.url;
  Url.findOne({ url: inputurl })
    .then((existurl) => {
      if (existurl) {
        return res.status(404).json({
          massage: "This Link is Already Exist",
        });
      }
      const url = new Url({
        url: inputurl,
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
};

exports.geturl = (req, res, next) => {
  const code = req.params.code;
  Url.findOneAndUpdate(
    { shorturl: code },
    { $inc: { count: 1 } }, // Increment the count field by 1
    { new: true }
  ).then((existurl) => {
    if (!existurl) {
      return res.status(404).json({
        massage: "NOT FOUND",
      });
    }
    return res.status(200).json({
      url: existurl.url,
      Short : existurl.shorturl
    });
  }).catch((err) => {
      console.log(err);
      return res.status(500).json({
        message: "Error get the URL",
        error: err,
      });
    });
};
