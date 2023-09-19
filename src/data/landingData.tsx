import { RiGithubLine, RiBehanceFill, RiLinkedinFill } from 'react-icons/ri'

const menuData = [
  {
    menuId: 'home_menu',
    menuTo: 'home',
    menuLabel: 'home'
  },
  {
    menuId: 'aboutme_section_menu',
    menuTo: 'aboutme_section',
    menuLabel: 'sobreMim'
  },
  {
    menuId: 'myskills_section_menu',
    menuTo: 'myskills_section',
    menuLabel: 'minhasHabilidades'
  },
  {
    menuId: 'portfolio_section_menu',
    menuTo: 'portfolio_section',
    menuLabel: 'meusProjetos'
  }
  // {
  //   menuId: 'thanks_section_menu',
  //   menuTo: 'thanks_section',
  //   menuLabel: 'obrigado'
  // }
]

// ====================================================== START ABOUT ME

const hobbiesData = [
  {
    hobbieId: 'des_pessoal_hobbie',
    hobbieName: 'Desenvolvimento Pessoal'
    // hobbieIcon: <RiGithubLine />
  },
  {
    hobbieId: 'empreendedorismo_hobbie',
    hobbieName: 'Empreenderorismo'
    // hobbieIcon: <RiGithubLine />
  },
  {
    hobbieId: 'gestao_projetos_hobbie',
    hobbieName: 'Gestão de Projetos'
    // hobbieIcon: <RiGithubLine />
  },
  {
    hobbieId: 'ia_hobbie',
    hobbieName: 'Inteligência Artificial'
    // hobbieIcon: <RiGithubLine />
  },
  {
    hobbieId: 'inovacao_hobbie',
    hobbieName: 'Inovação'
    // hobbieIcon: <RiGithubLine />
  }
]

const aboutMeData = {
  aboutMeResume: (
    <>
      <p>
        Escrevi meu primeiro código em 2018, programando jogos com C# na
        Unity3D, em um curso de programação de jogos digitais. Desde então,
        comecei a procurar novas soluções e tecnologias e foi então que
        encontrei a área de front-end. Eu, que já tinha uma predisposição para
        programação e design, decidi seguir carreira nessa área. Com uma paixão
        verdadeira pela área e suas possibilidades, sou um programador
        autodidata, sempre evoluindo e me mantendo atualizado com as tendências
        mais atuais do mundo da tecnologia, incluindo Inteligência Artificial e
        outros.
      </p>
    </>
  ),
  aboutMeHobbies: hobbiesData,
  aboutMePhoto: '/images/profile_image_02.jpeg',
  aboutMeName: 'Henrique P. Garcia',
  aboutMeOffice: 'Programador de Front-End',
  aboutMeAge: 21,
  aboutMeEmail: 'henriquegarcia.dev@gmail.com',
  aboutMePhone: '(51) 9 9307-7788',
  aboutMeLocation: 'Natal, RN'
}

// ====================================================== END ABOUT ME

const skillsData = [
  {
    skillGroupId: 'frontend_group',
    skillGroupName: 'Front-End',
    skillGroupItems: [
      {
        skillId: 'js_skill',
        skillName: 'JavaScript (ES6+)',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
        skillLevel: 90
      },
      {
        skillId: 'ts_skill',
        skillName: 'TypeScript',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
        skillLevel: 80
      },
      {
        skillId: 'stack_base_skill',
        skillName: 'HTML5 & CSS3',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
        skillLevel: 94
      },
      {
        skillId: 'sassless_skill',
        skillName: 'Sass/Less',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        skillLevel: 90
      },
      {
        skillId: 'php_skill',
        skillName: 'PHP',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg',
        skillLevel: 70
      },
      {
        skillId: 'jest_skill',
        skillName: 'Jest',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
        skillLevel: 85
      },
      // {
      //   skillId: 'cypress_skill',
      //   skillName: 'Cypress',
      //   skillIcon: '',
      //   skillLevel: 80
      // },
      {
        skillId: 'git_skill',
        skillName: 'Git',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        skillLevel: 90
      },
      {
        skillId: 'eslint_skill',
        skillName: 'ESLint & Prettier',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg',
        skillLevel: 85
      },
      {
        skillId: 'gulp_skill',
        skillName: 'Gulp & Grunt',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gulp/gulp-plain.svg',
        skillLevel: 80
      },
      {
        skillId: 'figma_skill',
        skillName: 'Figma',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        skillLevel: 88
      },
      {
        skillId: 'bitbucket_skill',
        skillName: 'Bitbucket',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg',
        skillLevel: 75
      },
      {
        skillId: 'webpack_skill',
        skillName: 'Webpack',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
        skillLevel: 70
      }
    ]
  },
  {
    skillGroupId: 'frameworks_group',
    skillGroupName: 'Frameworks',
    skillGroupItems: [
      {
        skillId: 'react_skill',
        skillName: 'ReactJS',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        skillLevel: 90
      },
      {
        skillId: 'reactnative_skill',
        skillName: 'React Native',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        skillLevel: 84
      },
      {
        skillId: 'next_skill',
        skillName: 'Next.js',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        skillLevel: 80
      },
      {
        skillId: 'redux_skill',
        skillName: 'Redux',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
        skillLevel: 80
      },
      {
        skillId: 'jquery_skill',
        skillName: 'jQuery',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg',
        skillLevel: 75
      },
      {
        skillId: 'mobx_skill',
        skillName: 'Mobx',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        skillLevel: 80
      },
      {
        skillId: 'three_skill',
        skillName: 'Three.js',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
        skillLevel: 65
      },
      {
        skillId: 'bootstrap_skill',
        skillName: 'Bootstrap',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
        skillLevel: 75
      },
      {
        skillId: 'magento_skill',
        skillName: 'Magento',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg',
        skillLevel: 65
      },
      {
        skillId: 'tailwind_skill',
        skillName: 'Tailwind',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        skillLevel: 80
      },
      {
        skillId: 'materialui_skill',
        skillName: 'Material UI',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg',
        skillLevel: 92
      }
    ]
  },
  {
    skillGroupId: 'backend_group',
    skillGroupName: 'Back-End',
    skillGroupItems: [
      {
        skillId: 'node_skill',
        skillName: 'Node.js',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg',
        skillLevel: 75
      },
      {
        skillId: 'express_skill',
        skillName: 'Express.js',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        skillLevel: 70
      },
      {
        skillId: 'mongodb_skill',
        skillName: 'MongoDB',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg',
        skillLevel: 75
      },
      {
        skillId: 'graphql_skill',
        skillName: 'GraphQL',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
        skillLevel: 80
      },
      {
        skillId: 'mysql_skill',
        skillName: 'MySQL',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg',
        skillLevel: 85
      },
      {
        skillId: 'postgresql_skill',
        skillName: 'PostgreSQL',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
        skillLevel: 80
      },
      {
        skillId: 'firebase_skill',
        skillName: 'Firebase',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        skillLevel: 95
      }
      // {
      //   skillId: 'rest_skill',
      //   skillName: 'REST',
      //   skillIcon: '',
      //   skillLevel: 80
      // },
      // {
      //   skillId: 'soap_skill',
      //   skillName: 'SOAP',
      //   skillIcon: '',
      //   skillLevel: 80
      // }
    ]
  },
  {
    skillGroupId: 'gamedev_group',
    skillGroupName: 'Game Dev',
    skillGroupItems: [
      {
        skillId: 'unity_skill',
        skillName: 'Unity 3D',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg',
        skillLevel: 70
      },
      {
        skillId: 'blender_skill',
        skillName: 'Blender 3D',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg',
        skillLevel: 65
      },
      {
        skillId: 'csharp_skill',
        skillName: 'C# para Unity',
        skillIcon:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        skillLevel: 75
      }
    ]
  }
]

const projectsData = [
  {
    projectId: 'project_00',
    projectName: 'Frontend Lab',
    projectDescription: 'Plataforma e-learning para desenvolvedores front-end',
    projectGitHub:
      'https://github.com/henriquegarcia-web/frontendlab-dashboard',
    projectBehance: '',
    projectWebsite: '',
    projectStacks: [
      {
        stackId: 'project_00_stack_01',
        stackName: 'Next.js'
      },
      {
        stackId: 'project_00_stack_02',
        stackName: 'React'
      },
      {
        stackId: 'project_00_stack_03',
        stackName: 'TypeScritpt'
      },
      {
        stackId: 'project_00_stack_04',
        stackName: 'Firebase'
      },
      {
        stackId: 'project_00_stack_05',
        stackName: 'Material-UI'
      },
      {
        stackId: 'project_00_stack_06',
        stackName: 'Everegreen-UI'
      },
      {
        stackId: 'project_00_stack_07',
        stackName: 'Twilio'
      }
    ],
    projectImages: [
      {
        imageId: 'project_00_image_01',
        imageUrl: '/images/projects/project00/1.png'
      },
      {
        imageId: 'project_00_image_02',
        imageUrl: '/images/projects/project00/2.png'
      },
      {
        imageId: 'project_00_image_03',
        imageUrl: '/images/projects/project00/3.png'
      },
      {
        imageId: 'project_00_image_04',
        imageUrl: '/images/projects/project00/4.png'
      },
      {
        imageId: 'project_00_image_05',
        imageUrl: '/images/projects/project00/5.png'
      },
      {
        imageId: 'project_00_image_06',
        imageUrl: '/images/projects/project00/6.png'
      },
      {
        imageId: 'project_00_image_07',
        imageUrl: '/images/projects/project00/7.png'
      }
    ]
  },
  {
    projectId: 'project_09',
    projectName: 'Dashboard Delivery',
    projectDescription:
      'Dashboard controlador de uma aplicação de delivery de comida',
    projectGitHub: '',
    projectBehance:
      'https://www.behance.net/gallery/171361963/Sistema-de-Delivery',
    projectWebsite: '',
    projectStacks: [
      {
        stackId: 'project_09_stack_01',
        stackName: 'Next.js'
      },
      {
        stackId: 'project_09_stack_02',
        stackName: 'React'
      },
      {
        stackId: 'project_09_stack_03',
        stackName: 'TypeScritpt'
      },
      {
        stackId: 'project_09_stack_04',
        stackName: 'Firebase'
      },
      {
        stackId: 'project_09_stack_05',
        stackName: 'Material-UI'
      },
      {
        stackId: 'project_09_stack_06',
        stackName: 'Everegreen-UI'
      }
    ],
    projectImages: [
      {
        imageId: 'project_09_image_01',
        imageUrl: '/images/projects/project09/1.png'
      },
      {
        imageId: 'project_09_image_02',
        imageUrl: '/images/projects/project09/2.png'
      },
      {
        imageId: 'project_09_image_03',
        imageUrl: '/images/projects/project09/3.png'
      },
      {
        imageId: 'project_09_image_04',
        imageUrl: '/images/projects/project09/4.png'
      }
    ]
  },
  {
    projectId: 'project_10',
    projectName: 'Sistema de Tickets',
    projectDescription:
      'Aplicação de controle de tickets de suporte para freelancers',
    projectGitHub: '',
    projectBehance:
      'https://www.behance.net/gallery/171362009/Sistema-de-Tickets',
    projectWebsite: '',
    projectStacks: [
      {
        stackId: 'project_10_stack_02',
        stackName: 'React'
      },
      {
        stackId: 'project_10_stack_03',
        stackName: 'TypeScritpt'
      },
      {
        stackId: 'project_10_stack_04',
        stackName: 'Firebase'
      },
      {
        stackId: 'project_10_stack_05',
        stackName: 'Material-UI'
      },
      {
        stackId: 'project_10_stack_06',
        stackName: 'Everegreen-UI'
      }
    ],
    projectImages: [
      {
        imageId: 'project_10_image_01',
        imageUrl: '/images/projects/project10/1.png'
      },
      {
        imageId: 'project_10_image_02',
        imageUrl: '/images/projects/project10/2.png'
      },
      {
        imageId: 'project_10_image_03',
        imageUrl: '/images/projects/project10/3.png'
      },
      {
        imageId: 'project_10_image_04',
        imageUrl: '/images/projects/project10/4.png'
      },
      {
        imageId: 'project_10_image_05',
        imageUrl: '/images/projects/project10/5.png'
      },
      {
        imageId: 'project_10_image_06',
        imageUrl: '/images/projects/project10/6.png'
      },
      {
        imageId: 'project_10_image_07',
        imageUrl: '/images/projects/project10/7.png'
      }
    ]
  },
  {
    projectId: 'project_01',
    projectName: 'Web Portfólio Versão 3.0 - Atual',
    projectDescription:
      'Nova versão do meu web portfólio, incluindo novas features, recursos e eastereggs.',
    projectGitHub: 'https://github.com/henriquegarcia-web/web-portfolio-v3',
    projectBehance: '',
    projectWebsite: '',
    projectStacks: [
      {
        stackId: 'project_01_stack_01',
        stackName: 'Next.js'
      },
      {
        stackId: 'project_01_stack_02',
        stackName: 'React'
      },
      {
        stackId: 'project_01_stack_03',
        stackName: 'TypeScritpt'
      },
      {
        stackId: 'project_01_stack_04',
        stackName: 'Firebase'
      },
      {
        stackId: 'project_01_stack_05',
        stackName: 'Material-UI'
      }
    ],
    projectImages: [
      {
        imageId: 'project_01_image_01',
        imageUrl: '/images/projects/project01/1.png'
      },
      {
        imageId: 'project_01_image_02',
        imageUrl: '/images/projects/project01/2.png'
      },
      {
        imageId: 'project_01_image_03',
        imageUrl: '/images/projects/project01/3.png'
      },
      {
        imageId: 'project_01_image_04',
        imageUrl: '/images/projects/project01/4.png'
      }
    ]
  },
  {
    projectId: 'project_02',
    projectName: 'Web Portfólio Versão 2.0',
    projectDescription:
      'Website Portfolio pessoal, contendo principalmente minhas informações pessoais e de contato, habilidades e competências. O website também possuí uma seção para informações minhas como Freelancer e sistema de Tickets, para projetos desenvolvidos por mim.',
    projectGitHub: 'https://github.com/henriquegarcia-web/Portfolio-Website',
    projectBehance:
      'https://www.behance.net/gallery/146242227/Web-Portfolio-20',
    projectWebsite: '',
    projectStacks: [
      {
        stackId: 'project_02_stack_01',
        stackName: 'React'
      },
      {
        stackId: 'project_02_stack_02',
        stackName: 'Styled-Components'
      },
      {
        stackId: 'project_02_stack_03',
        stackName: 'Material-UI'
      }
    ],
    projectImages: [
      {
        imageId: 'project_02_image_01',
        imageUrl: '/images/projects/project02/1.png'
      },
      {
        imageId: 'project_02_image_02',
        imageUrl: '/images/projects/project02/2.png'
      },
      {
        imageId: 'project_02_image_03',
        imageUrl: '/images/projects/project02/3.png'
      }
    ]
  },
  {
    projectId: 'project_03',
    projectName: 'Compilado de Projetos #1',
    projectDescription:
      'Compilação de alguns projetos front-end que eu já prototipei e desenvolvi. Projetos desenvolvidos utilizando as linguagens: Next.js, React, React Native, JavaScript, Firebase, MySQL, GraphQL, Node e outras.',
    projectGitHub: '',
    projectBehance:
      'https://www.behance.net/gallery/166823881/Compilado-de-Projetos-1',
    projectWebsite: '',
    projectStacks: [
      {
        stackId: 'project_03_stack_01',
        stackName: 'Next.js'
      },
      {
        stackId: 'project_03_stack_02',
        stackName: 'React'
      },
      {
        stackId: 'project_03_stack_03',
        stackName: 'React Native'
      },
      {
        stackId: 'project_03_stack_04',
        stackName: 'JavaScript'
      },
      {
        stackId: 'project_03_stack_05',
        stackName: 'Firebase'
      },
      {
        stackId: 'project_03_stack_06',
        stackName: 'MySQL'
      },
      {
        stackId: 'project_03_stack_07',
        stackName: 'GraphQL'
      },
      {
        stackId: 'project_03_stack_08',
        stackName: 'Node.js'
      }
    ],
    projectImages: [
      {
        imageId: 'project_03_image_01',
        imageUrl: '/images/projects/project03/1.png'
      },
      {
        imageId: 'project_03_image_02',
        imageUrl: '/images/projects/project03/2.png'
      },
      {
        imageId: 'project_03_image_03',
        imageUrl: '/images/projects/project03/3.png'
      },
      {
        imageId: 'project_03_image_04',
        imageUrl: '/images/projects/project03/4.png'
      },
      {
        imageId: 'project_03_image_05',
        imageUrl: '/images/projects/project03/5.png'
      },
      {
        imageId: 'project_03_image_06',
        imageUrl: '/images/projects/project03/6.png'
      },
      {
        imageId: 'project_03_image_07',
        imageUrl: '/images/projects/project03/7.png'
      }
    ]
  },
  {
    projectId: 'project_04',
    projectName: 'Website Institucional para Profissional Analista Corporal',
    projectDescription:
      'Website institucional desenvolvido para uma profissional de análise corporal. Desenvolvimento completo do projeto, desde o planejamento e prototipação até o deploy final. Website desenvolvido em Next.js, React e Styled-Components.',
    projectGitHub: '',
    projectBehance: '',
    projectWebsite: 'https://luanagarciacoach.com.br/',
    projectStacks: [
      {
        stackId: 'project_04_stack_01',
        stackName: 'Next.js'
      },
      {
        stackId: 'project_04_stack_02',
        stackName: 'React'
      },
      {
        stackId: 'project_04_stack_03',
        stackName: 'Styled-Components'
      },
      {
        stackId: 'project_04_stack_04',
        stackName: 'Firebase'
      }
    ],
    projectImages: [
      {
        imageId: 'project_04_image_01',
        imageUrl: '/images/projects/project04/1.png'
      },
      {
        imageId: 'project_04_image_02',
        imageUrl: '/images/projects/project04/2.png'
      },
      {
        imageId: 'project_04_image_03',
        imageUrl: '/images/projects/project04/3.png'
      },
      {
        imageId: 'project_04_image_04',
        imageUrl: '/images/projects/project04/4.png'
      },
      {
        imageId: 'project_04_image_05',
        imageUrl: '/images/projects/project04/5.png'
      },
      {
        imageId: 'project_04_image_06',
        imageUrl: '/images/projects/project04/6.png'
      },
      {
        imageId: 'project_04_image_07',
        imageUrl: '/images/projects/project04/7.png'
      }
    ]
  },
  {
    projectId: 'project_05',
    projectName: 'Landing Page de Vendas para Produto Digital',
    projectDescription:
      'Landing Page de vendas destinada a venda do guia: Como conseguir uma vaga de dev front-end. Acesse e confira!',
    projectGitHub: '',
    projectBehance: '',
    projectWebsite: 'https://frontendlab.com.br/ebook',
    projectStacks: [
      {
        stackId: 'project_05_stack_01',
        stackName: 'Next.js'
      },
      {
        stackId: 'project_05_stack_02',
        stackName: 'React'
      },
      {
        stackId: 'project_05_stack_03',
        stackName: 'TypeScript'
      },
      {
        stackId: 'project_05_stack_04',
        stackName: 'Styled-Components'
      },
      {
        stackId: 'project_05_stack_05',
        stackName: 'Firebase'
      }
    ],
    projectImages: [
      {
        imageId: 'project_05_image_01',
        imageUrl: '/images/projects/project05/1.png'
      },
      {
        imageId: 'project_05_image_02',
        imageUrl: '/images/projects/project05/2.png'
      },
      {
        imageId: 'project_05_image_03',
        imageUrl: '/images/projects/project05/3.png'
      },
      {
        imageId: 'project_05_image_04',
        imageUrl: '/images/projects/project05/4.png'
      },
      {
        imageId: 'project_05_image_05',
        imageUrl: '/images/projects/project05/5.png'
      },
      {
        imageId: 'project_05_image_06',
        imageUrl: '/images/projects/project05/6.png'
      }
    ]
  },
  {
    projectId: 'project_06',
    projectName: 'Landing Page para Agência de Marketing',
    projectDescription:
      'Landing page desenvolvida para uma agência de marketing digital.',
    projectGitHub: '',
    projectBehance: '',
    projectWebsite: '',
    projectStacks: [
      {
        stackId: 'project_06_stack_01',
        stackName: 'React'
      },
      {
        stackId: 'project_06_stack_02',
        stackName: 'Styled-Components'
      },
      {
        stackId: 'project_06_stack_03',
        stackName: 'Firebase'
      }
    ],
    projectImages: [
      {
        imageId: 'project_06_image_01',
        imageUrl: '/images/projects/project06/1.png'
      },
      {
        imageId: 'project_06_image_02',
        imageUrl: '/images/projects/project06/2.png'
      },
      {
        imageId: 'project_06_image_03',
        imageUrl: '/images/projects/project06/3.png'
      },
      {
        imageId: 'project_06_image_04',
        imageUrl: '/images/projects/project06/4.png'
      }
    ]
  },
  {
    projectId: 'project_07',
    projectName: 'Website de Apresentação da Moto S1000RR',
    projectDescription:
      'Projeto de demonstração de habilidades. Website de aprentação da moto da BMW: S1000RR.',
    projectGitHub:
      'https://github.com/henriquegarcia-web/S1000RR-Presentation-Website',
    projectBehance:
      'https://www.behance.net/gallery/143796439/BMW-S-1000-RR-Website-de-Apresentacao-da-Moto',
    projectWebsite: '',
    projectStacks: [
      {
        stackId: 'project_07_stack_01',
        stackName: 'HTML5'
      },
      {
        stackId: 'project_07_stack_02',
        stackName: 'LESS'
      }
    ],
    projectImages: [
      {
        imageId: 'project_07_image_01',
        imageUrl: '/images/projects/project07/1.png'
      },
      {
        imageId: 'project_07_image_02',
        imageUrl: '/images/projects/project07/2.png'
      },
      {
        imageId: 'project_07_image_03',
        imageUrl: '/images/projects/project07/3.png'
      },
      {
        imageId: 'project_07_image_04',
        imageUrl: '/images/projects/project07/4.png'
      },
      {
        imageId: 'project_07_image_05',
        imageUrl: '/images/projects/project07/5.png'
      },
      {
        imageId: 'project_07_image_06',
        imageUrl: '/images/projects/project07/6.png'
      }
    ]
  },
  {
    projectId: 'project_08',
    projectName: 'Website para Agência de Motos',
    projectDescription:
      'Website para agência de motos. Projeto desenvolvido durante processo seletivo.',
    projectGitHub: '',
    projectBehance:
      'https://www.behance.net/gallery/143798089/Front-End-Challenge-com-tema-da-BMW',
    projectWebsite: '',
    projectStacks: [
      {
        stackId: 'project_08_stack_01',
        stackName: 'HTML5'
      },
      {
        stackId: 'project_08_stack_02',
        stackName: 'SASS'
      }
    ],
    projectImages: [
      {
        imageId: 'project_08_image_01',
        imageUrl: '/images/projects/project08/1.png'
      },
      {
        imageId: 'project_08_image_02',
        imageUrl: '/images/projects/project08/2.png'
      },
      {
        imageId: 'project_08_image_03',
        imageUrl: '/images/projects/project08/3.png'
      },
      {
        imageId: 'project_08_image_04',
        imageUrl: '/images/projects/project08/4.png'
      },
      {
        imageId: 'project_08_image_05',
        imageUrl: '/images/projects/project08/5.png'
      }
    ]
  }
]

// ====================================================== START SOCIAL MEDIAS

const socialMediasData = [
  {
    mediaId: 'linkedin_link',
    mediaName: 'LinkedIn',
    mediaLink: 'https://www.linkedin.com/in/henrique-p-garcia/',
    mediaIcon: <RiLinkedinFill />
  },
  {
    mediaId: 'behance_link',
    mediaName: 'Behance',
    mediaLink: 'https://www.behance.net/henriquegarcia-dev',
    mediaIcon: <RiBehanceFill />
  },
  {
    mediaId: 'github_link',
    mediaName: 'GitHub',
    mediaLink: 'https://github.com/henriquegarcia-web',
    mediaIcon: <RiGithubLine />
  }
]

// ====================================================== END SOCIAL MEDIAS

export { menuData, aboutMeData, socialMediasData, skillsData, projectsData }
