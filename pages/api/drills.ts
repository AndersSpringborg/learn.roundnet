import {Drill, drills} from "../../data/localization";
import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<Drill[]>) {
  res.status(200).json(drills)
}