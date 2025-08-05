const express = require('express');
const router = express.Router();
const doctors = require('../data/doctors.json');

router.get('/', (req, res) => {
  const search = req.query.search?.toLowerCase();
  if (search) {
    const filtered = doctors.filter(doctor =>
      doctor.name.toLowerCase().includes(search) ||
      doctor.specialization.toLowerCase().includes(search) ||
      doctor.location.toLowerCase().includes(search)
    );
    res.json(filtered);
  } else {
    res.json(doctors);
  }
});

module.exports = router;
