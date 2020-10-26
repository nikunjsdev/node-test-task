const UserViewModal = require('../model/index')

 function userView (req, res, next) {
    let { startDate, endDate } = req.query;
    startDate = startDate ? new Date(startDate) : new Date('0');
    endDate = endDate ? new Date(endDate) : new Date();
    try {
    UserViewModal.aggregate([

      { $match: { 'date': { $gte: startDate, $lt: endDate } } },
      {
        $group: { _id: '$productId', uniqUsers: { $addToSet: "$userId" }, users: { $push: "$userId" } }
      }, {
        $addFields: { uniqueUserCount: { $size: '$uniqUsers' }, totalUser: { $size: "$users" } }
      }
    ],  (err, result) => {
      if (err) {
        throw new Error(err.message)
      }
      res.send(result);
    });
} catch(err){
    console.log('error', err)
    res.status(500).send({error: err.message})
  }
}


  module.exports =  { userView };