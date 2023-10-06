module.exports = {
  get: (req, res) => {
    res.send("User: Supun Nanayakkara!");
  },

  post: (req, res) => {
    res.send("User Created!");
  },

  update: (req, res) => {
    res.send("User Updated!");
  },

  delete: (req, res) => {
    res.send("User Deleted!");
  },
};
