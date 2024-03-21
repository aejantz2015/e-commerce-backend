const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  // find all categories

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
    try {
      const categoryData = await Category.findByPk(req.params.id, {
        include: [{ model: Product }]
      });
  
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // be sure to include its associated Products

  // create a new category
  router.post('/', async (req, res) => {
    try {
      const categoryData = await Category.create(req.body);
      res.status(200).json(categoryDataData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  // update a category by its `id` value
  router.put('/:id', async (req, res) => {
    try {
      const updatedCategory = await Category.update(req.body, {
        where: {id: req.params.id }
      });
      if (updatedCategory[0] === 0) {
        return res.status(404).json({message: 'Category not found'});
      }
  
      res.status(200).json({ message: 'Category updated successfully'});
    }catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // delete a category by its `id` value
  router.delete('/:id', async (req, res) => {
    try {
      const categoryData = await category.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!categoryData === 0) {
        res.status(404).json({ message: 'No category found with this id!' });
        return;
      }
  
      res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
