export const cartKeys = {
  all: ["cart"] as const,
  details: () => [...cartKeys.all, "details"] as const,
};