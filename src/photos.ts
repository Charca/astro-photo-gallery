export type Photo = {
  id: number
  column: number
  row: number
  title: string
  description: string
}

// Excerpts from: Propaganda (1928) by Edward Bernays
export const photos: Photo[] = [
  {
    id: 1,
    column: 1,
    row: 1,
    title: 'Masses',
    description:
      'The instruments by which public opinion is organized and focused may be misused. But such organization and focusing are necessary to orderly life.',
  },
  {
    id: 2,
    column: 3,
    row: 1,
    title: 'Invisible',
    description:
      'As civilization has become more complex, and as the need for invisible government has been increas ingly demonstrated, the technical means have been invented and developed by which opinion may be regimented.',
  },
  {
    id: 3,
    column: 4,
    row: 1,
    title: 'Expense',
    description:
      'The invisible government tends to be concentrated in the hands of the few because of the expense of manipulating the social machinery which controls the opinions and habits of the masses.',
  },
  {
    id: 4,
    column: 1,
    row: 2,
    title: 'Mechanism',
    description:
      'No matter how sophisticated, how cynical the public may become about publicity methods, it must respond to the basic appeals, because it will always need food, crave amusement, long for beauty, respond to leadership.',
  },
  {
    id: 5,
    column: 3,
    row: 2,
    title: 'Millions',
    description:
      'This practice of creating circumstances and of creating pictures in the minds of millions of persons is very common.',
  },
  {
    id: 6,
    column: 2,
    row: 3,
    title: 'Continuous',
    description:
      'The important thing is that it is universal and continuous; and in its sum total it is regimenting the public mind every bit as much as an army regiments the bodies of its soldiers.',
  },
  {
    id: 7,
    column: 4,
    row: 3,
    title: 'Irresistible',
    description:
      'When regimented, a group at times offers an irresistible pressure before which legislators, editors, and teachers are helpless.',
  },
  {
    id: 8,
    column: 1,
    row: 4,
    title: 'Pressure',
    description:
      'A desire for a specific reform, however widespread, cannot be translated into action until it is made articulate, and until it has exerted sufficient pressure upon the proper law-making bodies.',
  },
  {
    id: 9,
    column: 3,
    row: 4,
    title: 'Interests',
    description:
      'In the active proselytizing minorities in whom selfish interests and public interests coincide lie the progress and development of America.',
  },
  {
    id: 10,
    column: 3,
    row: 5,
    title: 'Think',
    description:
      'Small groups of persons can, and do, make the rest of us think what they please about a given subject.',
  },
]
