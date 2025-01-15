import type { NextApiRequest, NextApiResponse } from "next";
import { WebCamController } from "../../lib/api/controllers/webcam-controller";
import { PrismaClient } from "@prisma/client";

type ResponseData = {
  result?: any;
  error?: string;
  message?: string;
};
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const webCamController = new WebCamController(req, res, prisma);

  try {
    const result = await webCamController.handle();
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
