import activateAccount from "./mutation/activateAccount";
import login from "./mutation/login";
import order from "./mutation/order";
import requestCode, { checkBuyCode } from "./mutation/requestCode";
import signup from "./mutation/signup";
import getAllEvents from "./query/getAllEvents";

export default {
  Query: {
    getAllEvents,
    requestCode,
  },
  Mutation: {
    activateAccount,
    login,
    signup,
    checkBuyCode,
    order,
  },
};
