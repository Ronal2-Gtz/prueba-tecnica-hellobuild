import axios from "axios";

const BASE_URL = "https://api.github.com/graphql";
const token = "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";

const headers = {
  "Content-Type": "application/json",
  Authorization: `bearer ${token}`,
};

type RepositoriesResponse = {
  data: {
    user: {
      repositories?: {
        edges: Array<Repository>
      }
      starredRepositories?: {
        edges: Array<Repository>
      }
    }
  }
}

type Repository = {
  node: {
    id: string;
    name: string;
    description: string;
    isPrivate: boolean;
    createdAt: string;
    url: string;
  }
}

const getRepositories = async (user: string) => {
    const { data } = await axios.post<RepositoriesResponse>(
      BASE_URL,
      {
        query: `
          query { 
            user(login: "${user}"){
              repositories(last:20) {
                edges {
                  node {
                    name,
                    createdAt,
                    description,
                    url,
                    id,
                    description,
                    isPrivate,
                  }
                }
              }
            }
          }`,
      },
      { headers }
    );

    return {
      data: data?.data?.user?.repositories?.edges,
      error: false
    };

};

const getStarredRepositories = async (user: string) => {

  const { data } = await axios.post<RepositoriesResponse>(
    BASE_URL,
    {
      query: `
      query { 
          user(login: "${user}"){
            starredRepositories (last:20) {
              edges {
                node {
                  name,
                  createdAt,
                  description,
                  url,
                  id,
                  description,
                  isPrivate,
                }
              }
            }
          }
        }`,
    },
    { headers }
  );

  return { data: data?.data?.user?.starredRepositories?.edges, error: false };
};

export { getRepositories, getStarredRepositories };
export type { Repository }