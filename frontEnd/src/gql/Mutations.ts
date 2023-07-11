import { gql } from "@apollo/client";

export const BuyTicket = gql`
  mutation ($email: String!, $eventId: Int!, $quantity: Int!) {
    order(email: $email, eventId: $eventId, quantity: $quantity)
  }
`;
export const checkCode = gql`
  mutation {
    checkBuyCode(code: "8733")
  }
`;
