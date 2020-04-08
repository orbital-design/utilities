# Utility Generator

.class constructor
---
`$class_name` - string
Give your object a class name.
___
`$variants` - list
Decide which variants you want to produce. Default classes are always generated no matter what variants you pass. You can pass any element state through this list.

Multiple args should be passed as: `$variants: 'responsive' 'hover' 'focus';`

| `$variants`      | Description                            |
| ---------------- | -------------------------------------- |
| `'none'`         | Creates default classes only.          |
| `'responsive'`   | Creates breakpoint specific classes.   |
| `'hover'`        | Creates hover specific classes.        |
| `'focus'`        | Creates focus specific classes.        |
| `'focus-within'` | Creates focus-within specific classes. |
| `'active'`       | Creates active specific classes.       |
---