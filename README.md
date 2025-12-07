This is the design choice notes from this task

third party library

- framer-motion
  because its okay to add another third party library, and I see couple of animation for the task, I add `motion` from `framer-motion`.

hero section

- button with 개발자가 필요하신가요? CTA
  I wanted to create the hero section as a grid before, using the grid-template like:

  ```
  [bubble] [image]
  [title] [image]
  [description] [image]
  [hero filter] [image] (hero filter is hidden on large screen)
  [cta] [image]
  [hero stats] [image] (hero filter)
  ```

  I believe this is not a good DX, too rigid and harder to maintain, so I changed to flex, and just flip the visibility, even at the cost of adding another CTA there.

- Hero slider
  this is the slider for `Hero Card`. the task showing 3 cards here, but I add a couple more to make it interesting. with helper function [`wrap`](https://motion.dev/docs/wrap) from `motion`.
  - `virtualIndex` is the center card index, lets say its `0`
  - `offset` will be `[4, 0, 1, 2, 3]`
  - because we play on sliding window from `-1` to `1`, i add this code `Math.abs(offset) <= 1` outside of this will be null,
    so it will stay like this `[4, 0, 1]`, `[0, 1, 2]`, etc

- checkbox
  Before, I think this component is used for filtering the images, but when i translate the checkbox and skill from the cards, there are no corelation between them, so I made this into `readonly` and `defaultChecked` because if I add any useEffect this component will be on client
