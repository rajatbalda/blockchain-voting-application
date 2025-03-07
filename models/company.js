const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

// Define a schema
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    email: { // Admin Email
        type: String,
        required: true,
        unique: true // Ensure unique admin emails
    },
    password: { // Admin Password
        type: String,
        required: true
    }
});

// Hash admin password before saving into database
AdminSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
