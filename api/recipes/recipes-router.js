const router = require('express').Router()

//catchall
router.use('*', (req, res) => {
    res.json({api:'up'})
})

// error handling
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      devAdvice: 'the code broke somewhere in the recipes router',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router