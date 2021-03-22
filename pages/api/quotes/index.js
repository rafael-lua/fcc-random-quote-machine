import { quotes } from "../../../quotesData";

export default function handler(req, res) {
  res.status(200);
  res.json(quotes);
};