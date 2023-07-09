import login from "./mutation/login";
import signup from "./mutation/signup";
import getAllEvents from "./query/getAllEvents";

export default {
  Query: {
    getAllEvents,
  },
  Mutation: { login, signup },
};
