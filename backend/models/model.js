const mongoose = require('mongoose');

const baseSchema = new mongoose.Schema({
    material_name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    material_notes: {
        type: String,
        default: ''
    },
    biodegradability: {
        type: String,
        enum: ['Biodegradable', 'Non-biodegradable'],
        required: true
    },
    properties: {
        type: [String],
        default: []
    },
    applications: {
        type: [String],
        default: []
    },
    physical_properties: [{
        property: { type: String },
        metric: { type: String },
        english: { type: String },
        comments: { type: String }
    }],
    mechanical_properties: [{
        property: { type: String },
        metric: { type: String },
        english: { type: String },
        comments: { type: String }
    }],
    electrical_properties: [{
        property: { type: String },
        metric: { type: String },
        english: { type: String },
        comments: { type: String }
    }],
    thermal_properties: [{
        property: { type: String },
        metric: { type: String },
        english: { type: String },
        comments: { type: String }
    }],
    optical_properties: [{
        property: { type: String },
        metric: { type: String },
        english: { type: String },
        comments: { type: String }
    }],
    processing_properties: [{
        property: { type: String },
        metric: { type: String },
        english: { type: String },
        comments: { type: String }
    }]
});

const bonegraft = mongoose.model('bonegraft', baseSchema);
const cartilagerepair = mongoose.model('cartilagerepair', baseSchema);
const skinsubstitues = mongoose.model('skinsubstitues', baseSchema);
const orthopedicscrews = mongoose.model('orthopedicscrews', baseSchema);
const dentalimplants = mongoose.model('dentalimplants', baseSchema);
const cardiovascularstents = mongoose.model('cardiovascularstents', baseSchema);
const filmsandcoatings = mongoose.model('filmsandcoatings', baseSchema);
const containersandutensils = mongoose.model('containersandutensils', baseSchema);
const compostablebags = mongoose.model('compostablebags', baseSchema);
const mulchfilms = mongoose.model('mulchfilms', baseSchema);
const biobatteries = mongoose.model('biobatteries', baseSchema);
const flexibleelectronics = mongoose.model('flexibleelectronics', baseSchema);

module.exports = {
    bonegraft,
    cartilagerepair,
    skinsubstitues,
    orthopedicscrews,
    dentalimplants,
    cardiovascularstents,
    filmsandcoatings,
    containersandutensils,
    compostablebags,
    mulchfilms,
    biobatteries,
    flexibleelectronics,
};
