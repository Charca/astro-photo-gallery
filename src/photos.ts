export type Photo = {
  // Photo ID (unique). It will also become the URL slug.
  id: number | string
  // Photo title
  title: string
  // Photo URL (can be absolute or relative to the public folder)
  url: string
  // Photo description
  description: string
}

export const photos: Photo[] = [
  {
    id: 1,
    title: 'Death by JavaScript',
    description:
      "Death by JavaScript: When you're so async, you forget to await your own life.",
    url: '/img/1.webp',
  },
  {
    id: 2,
    title: 'Death by JavaScript',
    description:
      'Why did the developer die? They kept trying to destructure the meaning of life and got `undefined`.',
    url: '/img/2.webp',
  },
  {
    id: 3,
    title: 'Death by JavaScript',
    description:
      'The developer passed away from trying to debug an obfuscated script in production.',
    url: '/img/3.webp',
  },
  {
    id: 4,
    title: 'Death by JavaScript',
    description:
      'How did the coder die? By getting lost in an array and never finding a way out.',
    url: '/img/4.webp',
  },
  {
    id: 5,
    title: 'Death by JavaScript',
    description:
      'Why did the developer pass away? They kept hitting `ctrl + alt + delete` on their life.',
    url: '/img/5.webp',
  },
  {
    id: 6,
    title: 'Death by JavaScript',
    description:
      'How did the programmer meet their end? The recursion in their life stack overflowed.',
    url: '/img/6.webp',
  },
  {
    id: 7,
    title: 'Death by JavaScript',
    description:
      'Death by JavaScript: Where every `console.log` is a cry for help.',
    url: '/img/7.webp',
  },
  {
    id: 8,
    title: 'Death by JavaScript',
    description:
      'Why did the developer meet their maker? Because their life had too many side-effects and no pure functions.',
    url: '/img/8.webp',
  },
  {
    id: 9,
    title: 'Death by JavaScript',
    description:
      "Death by JavaScript: When your life doesn't pass the unit tests.",
    url: '/img/9.webp',
  },
  {
    id: 10,
    title: 'Death by JavaScript',
    description:
      'Why did the coder die? Because they ran `rm -rf /` on their life by mistake.',
    url: '/img/10.webp',
  },
  {
    id: 11,
    title: 'Death by JavaScript',
    description:
      'Death by JavaScript: When the developer forgot to throttle their heartbeat.',
    url: '/img/11.webp',
  },
  {
    id: 12,
    title: 'Death by JavaScript',
    description:
      "How did the programmer die? Their CORS policy didn't allow them to access heaven.",
    url: '/img/12.webp',
  },
  {
    id: 13,
    title: 'Death by JavaScript',
    description:
      'Why did the developer pass away? They spent too much time parsing and not enough time living.',
    url: '/img/13.webp',
  },
  {
    id: 14,
    title: 'Death by JavaScript',
    description:
      "Death by JavaScript: When you've been deprecated but don't know it yet.",
    url: '/img/14.webp',
  },
  {
    id: 15,
    title: 'Death by JavaScript',
    description:
      'How did the coder die? They ran out of heap memory while trying to store their dreams.',
    url: '/img/15.webp',
  },
  {
    id: 16,
    title: 'Death by JavaScript',
    description:
      'Why did the developer pass away? Because they tried to multi-thread their single-threaded life.',
    url: '/img/16.webp',
  },
  {
    id: 17,
    title: 'Death by JavaScript',
    description:
      "Death by JavaScript: Where you're in strict mode, but life isn't.",
    url: '/img/17.webp',
  },
  {
    id: 18,
    title: 'Death by JavaScript',
    description:
      'Why did the coder die? Because their git commit was rejected from the repository of life.',
    url: '/img/18.webp',
  },
  {
    id: 19,
    title: 'Death by JavaScript',
    description:
      'How did the programmer meet their end? They were terminated by an unknown runtime error.',
    url: '/img/19.webp',
  },
  {
    id: 20,
    title: 'Death by JavaScript',
    description:
      "Death by JavaScript: When you time out waiting for life's AJAX request to complete.",
    url: '/img/20.webp',
  },
  {
    id: 21,
    title: 'Death by JavaScript',
    description:
      'Why did the developer pass away? Because they ignored too many warnings until it became a fatal error.',
    url: '/img/21.webp',
  },
  {
    id: 22,
    title: 'Death by JavaScript',
    description:
      'How did the coder meet their end? By refactoring their life and introducing too many bugs.',
    url: '/img/22.webp',
  },
  {
    id: 23,
    title: 'Death by JavaScript',
    description:
      "Death by JavaScript: When your life's dependencies have vulnerabilities.",
    url: '/img/23.webp',
  },
  {
    id: 24,
    title: 'Death by JavaScript',
    description:
      "Why did the developer die? Because they took a job at a startup called 'TitanicJS'.",
    url: '/img/24.webp',
  },
  {
    id: 25,
    title: 'Death by JavaScript',
    description:
      "How did the coder die? They were caught in an event loop and couldn't emit an 'exit' event.",
    url: '/img/25.webp',
  },
  {
    id: 26,
    title: 'Death by JavaScript',
    description:
      'Death by JavaScript: When your life has more issues than your GitHub repository.',
    url: '/img/26.webp',
  },
  {
    id: 27,
    title: 'Death by JavaScript',
    description:
      "Why did the developer meet their maker? Because they kept trying to 'force push' through life.",
    url: '/img/27.webp',
  },
  {
    id: 28,
    title: 'Death by JavaScript',
    description:
      "Why did the developer die? He couldn't escape from JSON.stringify!",
    url: '/img/28.webp',
  },
  {
    id: 29,
    title: 'Death by JavaScript',
    description:
      'Death by JavaScript: where the developer goes into an infinite loop and never comes back.',
    url: '/img/29.webp',
  },
  {
    id: 30,
    title: 'Death by JavaScript',
    description:
      "What's a coder's worst nightmare? Dying in a sea of unresolved promises.",
    url: '/img/30.webp',
  },
  {
    id: 31,
    title: 'Death by JavaScript',
    description:
      'Why did the programmer die in JavaScript? He kept waiting for async functions but they never awaited him.',
    url: '/img/31.webp',
  },
  {
    id: 32,
    title: 'Death by JavaScript',
    description:
      "Death by JavaScript: The only end where 'null' and 'undefined' finally make sense.",
    url: '/img/32.webp',
  },
  {
    id: 33,
    title: 'Death by JavaScript',
    description:
      "Why did the coder pass away? They encountered an Uncaught TypeError that couldn't be treated.",
    url: '/img/33.webp',
  },
  {
    id: 34,
    title: 'Death by JavaScript',
    description:
      'The programmer died from JavaScript fatigue. The cause? Constantly switching frameworks!',
    url: '/img/34.webp',
  },
  {
    id: 35,
    title: 'Death by JavaScript',
    description:
      "Why did the coder die? Because 'life' was not a function, but he kept trying to call it.",
    url: '/img/35.webp',
  },
]
