export const posts = [
  {
    slug: 'post-1',
    title: 'Mi Viaje con la IA Generativa',
    date: '2024-01-01', // Fecha de ejemplo, cámbiala si quieres
    description: 'Una reflexión sobre cómo la IA generativa ha transformado mi enfoque en el desarrollo de software y mi experiencia personal con estas herramientas innovadoras.',
    content: 'Este es el contenido de "Mi Viaje con la IA Generativa". Desde que comencé a explorar la IA generativa, mi forma de abordar los proyectos de desarrollo de software ha cambiado drásticamente. La capacidad de utilizar modelos para generar código, crear contenido de texto, o incluso diseñar elementos visuales ha acelerado mis flujos de trabajo y abierto nuevas posibilidades creativas. He experimentado con diferentes plataformas y APIs, aprendiendo a integrar estas herramientas de manera efectiva en mis proyectos. La experiencia ha sido fascinante, revelando el inmenso potencial de la IA para aumentar la productividad y permitir la creación de aplicaciones más inteligentes y dinámicas.',
           image: '/images/iagenerativa.png', // Reemplaza con la ruta a tu imagen
    tags: ['IA', 'Desarrollo', 'Futuro'],
    aiHint: 'artificial intelligence abstract'
  },
  {
    slug: 'post-2',
    title: 'Firebase: El Backend que Todo Frontend Ama',
    date: '2024-01-15', // Fecha de ejemplo, cámbiala si quieres
    description: 'Explorando las capacidades de Firebase y por qué se ha convertido en una herramienta esencial en mis proyectos.',
    content: 'Firebase se ha convertido en mi backend favorito para muchos proyectos frontend debido a su facilidad de uso y la gran cantidad de servicios que ofrece. Utilizo Firestore para bases de datos en tiempo real, lo que simplifica enormemente la gestión de datos. La autenticación de Firebase me permite implementar sistemas de inicio de sesión seguros de manera rápida. Además, Firebase Storage es ideal para almacenar archivos como imágenes. La integración de Firebase con aplicaciones frontend es muy fluida, lo que me permite concentrarme en la experiencia del usuario sin tener que preocuparme tanto por la infraestructura del backend.',
    image: '/images/backend.jpg', // Reemplaza con la ruta a tu imagen
    tags: ['Firebase', 'Backend', 'Google'],
    aiHint: 'cloud database'
  },
  {
    slug: 'build-with-ia-hackathon',
    title: 'Aprendizajes de la Hackathon "Build with IA"',
    date: '2023-11-18',
    description: 'Compartiendo las lecciones aprendidas durante la hackathon "Build with IA". Colaboración, presión y creatividad.',
    content: 'Mi participación en la GDG Santa Cruz Hackathon "Build with IA" fue una experiencia increíblemente enriquecedora. Trabajando en equipo bajo la presión del tiempo, desarrollamos un prototipo que integraba capacidades de IA para resolver un problema específico. Enfrentamos desafíos técnicos interesantes, especialmente al integrar los modelos de IA y asegurar la fluidez de la aplicación. La hackathon me permitió poner a prueba mis habilidades, aprender de mis compañeros de equipo y comprender mejor el proceso de ideación y desarrollo rápido. Fue una demostración del poder de la colaboración y la creatividad en un entorno desafiante, y me motivó a seguir explorando el potencial de la IA en proyectos futuros.',
    image: '/images/hackathon.jpg', // Reemplaza con la ruta a tu imagen
    tags: ['Hackathon', 'Comunidad', 'IA'],
    aiHint: 'people coding collaboration',
  },
  {
    slug: 'explorando-ia-desarrollo',
    title: 'Explorando el Potencial de la IA en el Desarrollo',
    date: new Date().toISOString().split('T')[0], // Fecha actual
    description: 'Reflexiones sobre el uso de la IA en mis proyectos y su impacto en el futuro de la programación.',
    content: 'Mi experiencia colaborando en iniciativas de software dentro de la Universidad Autónoma Gabriel René Moreno (UAGRM) ha sido fundamental para mi crecimiento profesional. Participar en proyectos académicos me ha permitido aplicar mis conocimientos en entornos prácticos y colaborar con otros estudiantes y profesores. Paralelamente, he tenido la oportunidad de involucrarme en el desarrollo de soluciones tecnológicas para el sector agroindustrial. Este sector presenta desafíos únicos que requieren enfoques innovadores, y he trabajado en la creación de herramientas que buscan optimizar procesos y mejorar la eficiencia. Esta dualidad de experiencias, tanto en el ámbito académico como en el industrial, ha enriquecido mi perspectiva y fortalecido mi capacidad para abordar problemas complejos con soluciones de software.',
    image: '/images/ia.jpg', // Reemplaza con la ruta a tu imagen
    tags: ['IA', 'Desarrollo', 'Tecnología'],
    aiHint: 'artificial intelligence coding'
  }
];
