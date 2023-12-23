const express = require('express');

const { validateBody } = require('../../middlewares');

const ctrl = require('../../controllers/auth');

const { schemas } = require('../../models/user');

const router = express.Router();



router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;