// different ways to use type and interface 
//
//
//
export function foo1(a: number, b: string): void {
  console.log(a, b)
}

export const foo2 = (a: number, b: string): void => {
  console.log(a, b)
}

interface Foo3Props {
  a: number,
  b: string
}
export function foo3({ a, b }: Foo3Props): void {
  console.log(a, b)
}

type Foo4 = (
  a: number,
  b: string
) => void
export const foo4: Foo4 = (a, b) => console.log(a, b)

export const foo5: (a: number, b: string) => void =
  (a, b) => {
    console.log(a, b)
  }

