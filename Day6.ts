type FilterChildrenBy<T, U> = Exclude<T, U>;

// or

type FilterChildrenBy2<T, U> = T extends U ? never : T;