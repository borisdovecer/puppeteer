import { Router } from "express";
import { getData, getProductList } from "../controllers/puppeteerController";

const router: Router = Router();

router.get("/", getData);
router.get("/products", getProductList);

export default router;