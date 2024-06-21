export const WUILookValues: Readonly<WUILook[]> = [
  'default',
  'primary'
] as const;

export type WUILook =
  | ''
  | 'default'
  | 'primary';