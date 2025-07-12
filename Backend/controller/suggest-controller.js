const Suggest = require("../model/suggest-model");

const insertintodb = async (req, res) => {
  const { suggesttext, userid } = req.body;

  // Validate input
  if (!suggesttext || !userid) {
    return res.status(400).json({
      status: false,
      message: "suggesttext and userid are required"
    });
  }

  try {
    // 1. Create the suggestion with user ID
    const newSuggestion = await Suggest.create({
      suggesttext,
      user: userid  // 👈 Mongoose expects this field to be named 'user'
    });

    // 2. Populate the user field with name and email
    const populatedSuggestion = await Suggest.findById(newSuggestion._id)
      .populate("user");

    // 3. Send success response
    return res.status(201).json({
      status: true,
      message: "Suggestion added successfully",
      suggestion: populatedSuggestion
    });

  } catch (err) {
    console.error("Error inserting suggestion:", err);

    // 4. Handle validation errors
    return res.status(500).json({
      status: false,
      message: "Failed to add suggestion",
      error: err.message
    });
  }
};

const getAllSuggestions = async (req, res) => {
  try {
    const suggestions = await Suggest.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: true,
      suggestions
    });
  } catch (err) {
    console.error("Error fetching suggestions:", err);
    return res.status(500).json({
      status: false,
      message: "Failed to fetch suggestions"
    });
  }
};

module.exports = {
  insertintodb,
  getAllSuggestions
};
