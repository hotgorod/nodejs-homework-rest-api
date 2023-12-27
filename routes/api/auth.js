const express = require('express');

const { validateBody, authenticate } = require('../../middlewares');

const ctrl = require('../../controllers/auth');

const { schemas } = require('../../models/user');

const router = express.Router();



router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrl.register
);

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/users/current", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

module.exports = router;