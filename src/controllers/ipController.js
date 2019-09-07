// External Dependancies
const boom = require('boom')

// Get Data Models
const Ip = require('../models/Ip')

// Get all Ips
exports.getIp = async (req, reply) => {
  try {
    const ips = await Ip.find()
    return ips
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Add a new Ip
exports.addIp = async (req, reply) => {
  try {
    const ip = new Ip(req.body)
    return ip.save()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Update an existing Ip
exports.updateIp = async (req, reply) => {
  try {
    const id = req.params.id
    const ip = req.body
    const { ...updateData } = ip
    const update = await Ip.findByIdAndUpdate(id, updateData, { new: true })
    return update
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Delete a Ip
exports.deleteIp = async (req, reply) => {
  try {
    const id = req.params.id
    const ip = await Ip.findByIdAndRemove(id)
    return ip
  } catch (err) {
    throw boom.boomify(err)
  }
}