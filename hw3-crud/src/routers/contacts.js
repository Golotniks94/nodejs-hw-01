import express from 'express';
import {
  getContactsController,
  getContactByIdController,
  createContactController,
  patchContactController,
  deleteContactController,
} from '../controllers/contacts.js';

const router = express.Router();

router.get('/contacts', getContactsController);
router.get('/contacts/:contactId', getContactByIdController);
router.post('/contacts', createContactController);
router.patch('/contacts/:contactId', patchContactController);
router.delete('/contacts/:contactId', deleteContactController);

export default router;
