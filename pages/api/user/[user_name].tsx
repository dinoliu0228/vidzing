import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { GET_USERS_ENDPOINT } from "../../../lib/api/constants";
import { UserDetailApi } from "../../../lib/api/users/model";

export default async function userHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { user_name },
    method,
  } = req;

  switch (method) {
    case "GET":
      await getSingleUserByName(user_name as string, res);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

const getSingleUserByName = async (username: string, res: NextApiResponse) => {
  try {
    const response = await axios.get<UserDetailApi[]>(GET_USERS_ENDPOINT);
    if (response.data && response.data.length > 0) {
      const user = response.data.find(
        (x: UserDetailApi) =>
          x.username.toLocaleLowerCase() === username.toLocaleLowerCase()
      );
      if (user) {
        res.status(200).json(user);
      }
    }
    res.status(404).end();
  } catch (e) {
    // TODO error handling
    res.status(500).end();
  }
};
