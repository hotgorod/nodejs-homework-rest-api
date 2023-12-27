const express = require("express");

const ctrl = require("../../controllers/contacts");

const router = express.Router();

const {
  validateBody,
  isValidId,
  validateBodyFav,
  authenticate,
} = require("../../middlewares");

const {schemas} = require('../../models/contact')

router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.post("/", authenticate, validateBody(schemas.addSchema), ctrl.addContact);

router.put(
  "/:contactId",
  authenticate, isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate, isValidId,
  validateBodyFav(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

router.delete("/:contactId", authenticate, isValidId, ctrl.deleteContact);

module.exports = router;
