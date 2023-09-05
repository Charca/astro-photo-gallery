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

// Excerpts from: Propaganda (1928) by Edward Bernays
export const photos: Photo[] = [
  {
    id: 1,
    title: 'Masses',
    url: '/img/1.jpg',
    description:
      'The instruments by which public opinion is organized and focused may be misused. But such organization and focusing are necessary to orderly life.',
  },
  {
    id: 2,
    title: 'Invisible',
    url: '/img/2.jpg',
    description:
      'As civilization has become more complex, and as the need for invisible government has been increas ingly demonstrated, the technical means have been invented and developed by which opinion may be regimented.',
  },
  {
    id: 3,
    title: 'Expense',
    url: '/img/3.jpg',
    description:
      'The invisible government tends to be concentrated in the hands of the few because of the expense of manipulating the social machinery which controls the opinions and habits of the masses.',
  },
  {
    id: 4,
    title: 'Mechanism',
    url: '/img/4.jpg',
    description:
      'No matter how sophisticated, how cynical the public may become about publicity methods, it must respond to the basic appeals, because it will always need food, crave amusement, long for beauty, respond to leadership.',
  },
  {
    id: 5,
    title: 'Millions',
    url: '/img/5.jpg',
    description:
      'This practice of creating circumstances and of creating pictures in the minds of millions of persons is very common.',
  },
  {
    id: 6,
    title: 'Continuous',
    url: '/img/6.jpg',
    description:
      'The important thing is that it is universal and continuous; and in its sum total it is regimenting the public mind every bit as much as an army regiments the bodies of its soldiers.',
  },
  {
    id: 7,
    title: 'Irresistible',
    url: '/img/7.jpg',
    description:
      'When regimented, a group at times offers an irresistible pressure before which legislators, editors, and teachers are helpless.',
  },
  {
    id: 8,
    title: 'Pressure',
    url: '/img/8.jpg',
    description:
      'A desire for a specific reform, however widespread, cannot be translated into action until it is made articulate, and until it has exerted sufficient pressure upon the proper law-making bodies.',
  },
  {
    id: 9,
    title: 'Interests',
    url: '/img/9.jpg',
    description:
      'In the active proselytizing minorities in whom selfish interests and public interests coincide lie the progress and development of America.',
  },
  {
    id: 10,
    title: 'Think',
    url: '/img/10.jpg',
    description:
      'Small groups of persons can, and do, make the rest of us think what they please about a given subject.',
  },
]
