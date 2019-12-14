export type Checmical = {name: string; amount: number};

export type Reactions = {
  [name: string]: {
    producedAmount: number;
    from: Checmical[];
  };
};
