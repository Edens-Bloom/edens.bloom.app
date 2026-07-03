export const Category = {
  ALL: "ALL",
  BOUQUET: "BOUQUET",
  KEYRING: "KEYRING",
  POT_FLOWER: "POT_FLOWER",
  HAIR_CLIP: "HAIR_CLIP",
  TABLE_DECOR: "TABLE_DECOR",
} as const;

export type Category = (typeof Category)[keyof typeof Category];
