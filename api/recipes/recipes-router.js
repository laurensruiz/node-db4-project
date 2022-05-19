const router = require('express').Router()

const Recipe = require('./recipes-model')

router.get('/:recipe_id', (req, res, next) => {
    Recipe.getRecipeById(req.params.recipe_id)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(next)
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