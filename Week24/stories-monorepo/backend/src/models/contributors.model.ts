type Contributor = {
  id: number;
  username: string;
  contributions: number;
};

const contributors: Contributor[] = [];
let nextId = 1;

export const createContributor = async (username: string, contributions: number) => {
  const existing = contributors.find((c) => c.username === username);
  if (existing) {
    return null;
  }

  const contributor: Contributor = {
    id: nextId++,
    username,
    contributions
  };

  contributors.push(contributor);

  return {
    id: contributor.id,
    username: contributor.username,
    contributions: contributor.contributions
  };
};

export const getContributorByUsername = async (username: string) => {
  return contributors.find((c) => c.username === username) ?? null;
};