// get login page
function getusers(req, res, next) {
  res.render("users");
}

module.exports = {
  getusers,
};
