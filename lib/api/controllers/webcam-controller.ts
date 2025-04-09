import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export class WebCamController {
  req: NextApiRequest;
  res: NextApiResponse;
  prisma: PrismaClient;

  constructor(req: NextApiRequest, res: NextApiResponse, prisma: PrismaClient) {
    this.req = req;
    this.res = res;
    this.prisma = prisma;
  }
  async handle() {
    try {
      switch (this.req.method) {
        case "GET":
          return await this.getAllWebcams();
        case "PUT":
          return this.res.status(404).json({ error: "no put methods yet" });
        case "DELETE":
          return this.res.status(404).json({ error: "no delete methods yet" });
        default:
          return this.res.status(405).json({ error: "Method Not Allowed" });
      }
    } catch (err) {
      return this.res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async getAllWebcams() {
    if (this.req.query.mountain) {
      return this.getWebcamsForMountain(this.req.query.mountain as string);
    }

    const webcams = await this.prisma.cams.findMany();
    return this.res.status(200).json(webcams);
  }

  async getWebcamsForMountain(mountain: string) {
    const webcams = await this.prisma.cams.findMany({
      where: {
        mountain: {
          contains: mountain,
          mode: "insensitive",
        },
      },
    });
    return this.res.status(200).json(webcams);
  }

}
