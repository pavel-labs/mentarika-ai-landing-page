import { LEGAL_CONTACT, type LegalContent } from './shared';

// Translation of en.ts, section for section. The English text prevails where they differ.
export const es: LegalContent = {
  privacy: [
    {
      heading: '1. Alcance',
      body: [
        'Esta política explica qué datos recoge Mentarika («nosotros») cuando usas la aplicación web de Mentarika y este sitio, y cómo se utilizan. Mentarika es un producto para practicar entrevistas con IA dirigido a ingenieros de software.',
        `Mentarika es un proyecto personal y no comercial: es gratuito y no acepta pagos. Su operador, y el responsable del tratamiento de los datos personales descritos en esta política, es Pavel Piatrovich, un particular residente en Polonia. Contacto: ${LEGAL_CONTACT}.`,
      ],
    },
    {
      heading: '2. Qué datos recogemos',
      body: [
        'Cuenta: tu dirección de correo electrónico y tus identificadores de autenticación, a través de nuestro proveedor de autenticación.',
        'Contenido de las entrevistas: las transcripciones, el código y las respuestas que produces durante una sesión, y las puntuaciones e informes generados a partir de ellos.',
        'Código: el código que ejecutas o envías en una evaluación de programación se envía a un proveedor de ejecución de código, que lo ejecuta en un entorno aislado. Se envía sin tu nombre, tu dirección de correo electrónico ni el identificador de tu cuenta.',
        'Voz: si respondes en voz alta, el audio de tu respuesta se envía a nuestro proveedor de IA para transcribirlo en tu sesión; no conservamos la grabación. Si el entrevistador lee sus respuestas en voz alta, el texto de esas respuestas se envía a un proveedor de síntesis de voz.',
        'Navegador: una suscripción push (si activas las notificaciones) para poder avisarte de que un informe está listo.',
        'Preferencias del sitio y analítica: el sitio recuerda tu idioma y tu elección sobre la analítica en el almacenamiento local de este navegador, no en cookies. La analítica está desactivada hasta que la aceptas. Tras aceptarla, el sitio registra páginas vistas, clics en enlaces seleccionados, actividad en el producto y aperturas de artículos, sin identificador de cuenta, y un proveedor de analítica puede recibir datos técnicos de la solicitud, como tu dirección IP e información de la página. Puedes rechazar o retirar el consentimiento en la configuración de privacidad.',
        'Diagnóstico: informes de errores y datos de diagnóstico limitados de la sesión para encontrar y corregir fallos, a través de un proveedor de monitorización de errores, desde la aplicación web y nuestros servidores. Estos informes pueden incluir tu identificador de usuario.',
        'Correo electrónico: si una organización te invita por correo, tu dirección y la invitación se envían a través de nuestro proveedor de envío de correo.',
      ],
    },
    {
      heading: '3. Cómo usamos los datos',
      body: [
        'Para realizar entrevistas y evaluaciones de programación, generar tus puntuaciones e informes, seguir tu progreso, enviar las notificaciones que has aceptado y mantener el servicio seguro y en funcionamiento.',
        'Conforme al RGPD nos basamos en estas bases jurídicas: la ejecución de nuestro contrato contigo (tu cuenta, entrevistas, voz, código, informes y progreso), nuestro interés legítimo en mantener el servicio seguro y en funcionamiento (diagnóstico y prevención de abusos) y tu consentimiento (notificaciones push y analítica opcional del sitio). Puedes retirar el consentimiento en cualquier momento.',
      ],
    },
    {
      heading: '4. Tratamiento mediante IA',
      body: [
        'Para generar las respuestas del entrevistador y tu puntuación, el contenido de tu sesión se envía a un proveedor externo de modelos de IA que actúa como nuestro encargado del tratamiento. Se utiliza para generar tus resultados, no para entrenar sus modelos. Las puntuaciones y los informes se generan automáticamente para tu propia práctica y no producen efectos jurídicos sobre ti.',
        'El texto de tus respuestas se envía al proveedor de modelos de IA sin tu nombre, tu dirección de correo electrónico ni el identificador de tu cuenta. Según sus condiciones, los datos enviados a través de su API no se usan para entrenar modelos y pueden conservarse hasta 30 días para detectar abusos. El audio enviado para su transcripción está sujeto a las mismas condiciones y el proveedor no lo conserva una vez transcrito.',
        'Antes de enviar tus respuestas a cualquier modelo de IA, eliminamos las direcciones de correo electrónico, los números de teléfono y los enlaces. No podemos detectarlo todo, así que no menciones nombres de personas, empleadores o clientes, ni nada más que te identifique. El código que envías en una evaluación de programación se envía sin cambios.',
      ],
    },
    {
      heading: '5. Cesión y lugar del tratamiento',
      body: [
        'Solo compartimos datos con los encargados del tratamiento que hacen funcionar el servicio: proveedores de alojamiento, autenticación, modelos de IA, reconocimiento y síntesis de voz, ejecución de código, analítica opcional del sitio (solo tras el consentimiento), monitorización de errores, envío de correo, y seguridad y distribución de contenidos. El editor de código de las evaluaciones carga sus archivos desde una red pública de distribución de contenidos, que recibe tu dirección IP al servirlos. No vendemos tus datos.',
        'Nuestros servidores, nuestra base de datos y nuestros informes de errores están alojados en la Unión Europea, y el proveedor de ejecución de código ejecuta tu código en servidores situados en la Unión Europea. Varios de nuestros proveedores son empresas con sede en Estados Unidos: alojamiento, autenticación, modelos de IA, monitorización de errores, ejecución de código, envío de correo, y seguridad y distribución de contenidos. Cuando tus datos llegan a ellos fuera del Espacio Económico Europeo, la transferencia se basa en las cláusulas contractuales tipo de la UE o en el Marco de Privacidad de Datos UE-EE. UU., según establecen las condiciones de tratamiento de datos de cada proveedor.',
        'Organizaciones: si te unes a una organización en Mentarika (por ejemplo, a través de tu empleador), esta solo ve tu fecha de incorporación, cuántas entrevistas has hecho en los últimos 30 días y tu última actividad. Las medias de habilidades del equipo solo se muestran cuando han contribuido al menos cinco personas. Nadie en la organización puede leer tus transcripciones ni tus informes individuales.',
        'Asignaciones a candidatos: si aceptas una entrevista o evaluación enviada por una empresa, antes de empezar se te muestra qué se va a compartir. La empresa ve el informe resultante o los resultados de las pruebas y las puntuaciones, no tu transcripción ni el código enviado.',
      ],
    },
    {
      heading: '6. Conservación y eliminación',
      body: [
        'Conservamos los datos de tu cuenta y de tus entrevistas mientras exista tu cuenta. Puedes eliminar tu cuenta desde la aplicación en cualquier momento (Perfil → Eliminar cuenta); esto borra de forma permanente tus datos y tu identidad de nuestros sistemas. Los registros detallados de las solicitudes a la IA se eliminan a los 90 días, y el historial de entrega de notificaciones a los 90 días.',
        'Los recuentos de eventos del sitio se guardan por día sin ningún identificador y se eliminan a los 31 días.',
        'Nuestros proveedores conservan algunos datos durante plazos fijos propios. El proveedor de modelos de IA puede conservar las solicitudes hasta 30 días para detectar abusos. El proveedor de ejecución de código conserva el código, la entrada y la salida de cada ejecución hasta 365 días, sin vincularlos a tu cuenta. Los proveedores de alojamiento y de monitorización de errores conservan los registros del servidor y los informes de errores durante no más de 90 días. Si aceptas la analítica del sitio, el proveedor de analítica conserva sus propios datos según sus condiciones.',
      ],
    },
    {
      heading: '7. Tus derechos',
      body: [
        'Tienes derecho a acceder a tus datos, rectificarlos, exportarlos o eliminarlos, y a oponerte a determinados tratamientos o limitarlos. Escríbenos para ejercer estos derechos; respondemos en el plazo de un mes. También puedes presentar una reclamación ante el Presidente de la Oficina de Protección de Datos Personales de Polonia (uodo.gov.pl) o ante la autoridad de protección de datos del país de la UE en el que vives.',
      ],
    },
    {
      heading: '8. Menores',
      body: [
        'Mentarika no está dirigida a menores y está pensada para usuarios mayores de 16 años.',
      ],
    },
    {
      heading: '9. Cambios y contacto',
      body: [
        `Actualizaremos esta política a medida que el producto evolucione e indicaremos la fecha abajo. Preguntas o solicitudes de privacidad: ${LEGAL_CONTACT}.`,
      ],
    },
  ],
  terms: [
    {
      heading: '1. Aceptación',
      body: [
        'Mentarika es un proyecto personal y no comercial gestionado por Pavel Piatrovich, un particular («nosotros»). Al usar Mentarika aceptas estas condiciones. Si no estás de acuerdo, no uses el servicio.',
      ],
    },
    {
      heading: '2. El servicio',
      body: [
        'Mentarika ofrece práctica de entrevistas técnicas con IA, evaluaciones de programación, informes con comentarios y seguimiento del progreso. Es una herramienta de práctica. Está en desarrollo activo y sus funciones pueden cambiar o no estar disponibles.',
      ],
    },
    {
      heading: '3. Cuentas',
      body: [
        'Eres responsable de tu cuenta y de la exactitud de la información que proporcionas. Mantén tus credenciales seguras.',
      ],
    },
    {
      heading: '4. Precio',
      body: [
        'Mentarika es actualmente gratuita, dentro de los límites de uso que se muestran en la aplicación. No recogemos datos de pago. Si introducimos planes de pago, antes actualizaremos estas condiciones.',
      ],
    },
    {
      heading: '5. Uso aceptable',
      body: [
        'No abuses del servicio, no le apliques ingeniería inversa, no extraigas datos de forma masiva, no lo sobrecargues ni lo uses de forma ilícita, y no envíes contenido que no tengas derecho a enviar.',
      ],
    },
    {
      heading: '6. Resultados de la IA',
      body: [
        'Las preguntas de entrevista, los comentarios y las puntuaciones los genera la IA de forma heurística con fines de práctica. No constituyen asesoramiento profesional ni garantizan ningún resultado en una entrevista.',
      ],
    },
    {
      heading: '7. Tu contenido',
      body: [
        'Conservas la titularidad del contenido que envías. Nos concedes la licencia necesaria para prestarte el servicio (por ejemplo, para generar y almacenar tus informes).',
      ],
    },
    {
      heading: '8. Exenciones y responsabilidad',
      body: [
        'El servicio se presta «tal cual», sin garantías. En la medida permitida por la ley, nuestra responsabilidad es limitada; no respondemos de daños indirectos ni consecuentes.',
      ],
    },
    {
      heading: '9. Baja',
      body: [
        'Puedes dejar de usar el servicio y eliminar tu cuenta en cualquier momento. Podemos suspender las cuentas que incumplan estas condiciones.',
      ],
    },
    {
      heading: '10. Ley aplicable, cambios y contacto',
      body: [
        `Estas condiciones se rigen por la ley de Polonia. Esa elección no elimina ninguna protección imperativa que te otorgue la normativa de consumo del país en el que vives. Los litigios se someten a los tribunales de Polonia, salvo que una norma imperativa te permita acudir a los tribunales de tu país. Podemos actualizar estas condiciones e indicaremos la fecha abajo. Preguntas: ${LEGAL_CONTACT}.`,
      ],
    },
  ],
};
