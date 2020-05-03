
const stripe = require("stripe")('sk_test_TBvB4nbkS7d0bmofgLuPDvfQ00AkavxPYY');
const planModel = require("../model/planModel");
const userModel = require("../model/userModel");
async function createSession(req, res) {
  // retrive your plan and user
  try {

    let { id } = req
    let userId = id;
    let { planId } = req.body;

    const user = await userModel.findById(userId);
    const plan = await planModel.findById(planId);
    //  create session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: user.email,
      client_refernce_id: req.planId,
      line_items: [
        {
          name: plan.name,
          description: plan.description,
          // deploy website 
          amount: plan.price * 100,
          currency: "usd",
          quantity: 1
        }
      ],
      success_url: "http://localhost:3000/profile",
      cancel_url: "http://localhost:3000"
    })
    res.status(200).json({
      status: "success",
      session
    })
  } catch (err) {
    res.status(200).json({
      err: err.message
    })
  }
}
module.exports.createSession = createSession;