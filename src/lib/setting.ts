import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const router = express.Router();

// body-parser setting
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// cors setting
router.use(
  cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'],
  })
);

// cookie parser setting
router.use(cookieParser('secretKey'));

export default router;
