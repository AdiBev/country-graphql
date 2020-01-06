import gql from "graphql-tag";

export const QUERY_COUNTRY = gql`
query QueryCountry {
  continents {
    code
    name
  }
}
`;