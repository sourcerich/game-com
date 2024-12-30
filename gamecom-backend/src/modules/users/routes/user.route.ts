import { Router, Request, Response, NextFunction } from "express";

const router = Router();
router.use(function (req: Request, res: Response, next: NextFunction) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept",
  );
  next();
});
/*router.get("/kpi", (req: Request, res: Response) => {
  kpiOrder(req, res);
});*/

export const user = router;
