import './blockSubTitle.js';


export default {
  title: 'LondonParkour/text/blockSubTitle',
  component: 'ldnpk-blockSubTitle',
  tags: ['autodocs'],
  // Docs Page Description
  parameters: { docs: { description: { component: 
    'The LondonParkour BlockSubTitle Component.',
  }, }, },

  argTypes: {
    title: { 
      control: 'text',
      description: 'The Title.',
      table: { defaultValue: { summary: "The Title" } },
    },

    subtitle: { 
      control: 'text',
      description: 'The Subtitle.',
      table: { defaultValue: { summary: "The SubTitle" } },
    },
  },


  args: {
    title:  'The Title',
    subtitle: 'JMMP. CLIMB. VAULT. SWING.'
  }
};


// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                                  STORIES                                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝


// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                     Default Style                     │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Default = ({ title, subtitle }) => {

  const htmlString = 
  /* html */`
    <ldnpk-blocksubtitle>
        <div slot="title">${title}</div>
        <div slot="subheading">${subtitle}</div>
    </ldnpk-blocksubtitle>
  `

  return htmlString;
};
