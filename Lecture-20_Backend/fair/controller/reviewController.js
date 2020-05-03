const reviewModel = require("../model/reviewModel");

// createReview, getAllReviews, getReview , update review ,delete review=> db work  

async function createReview(req, res) {

  try {
    const review = await reviewModel.create(req.body);
    res.status(201).json({
      review
    })
  } catch (err) {
    res.status(200).json({
      err: err.message
    })
  }
}

async function getAllReviews(req, res) {
  try {
    const reviews = await reviewModel.find()
    res.status(201).json({
      reviews
    })
  } catch (err) {
    res.status(200).json({
      err: err.message
    })
  }
}
module.exports.createReview = createReview;
module.exports.getAllReviews = getAllReviews;