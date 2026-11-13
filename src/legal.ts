// DRAFT legal content – English is authoritative. Not legal advice; review with counsel
// before launch. Kept in English on purpose (auto-translated binding clauses are a
// liability – the page shell/notice is localized, these clauses are not).
//
// `effectiveDate` is the single place to bump the "last updated" stamp.

export const LEGAL_EFFECTIVE_DATE = '2026-11-13';
export const LEGAL_CONTACT = 'privacy@mentarika.app';

export interface LegalSection {
  heading: string;
  body: string[];
}

export const PRIVACY: LegalSection[] = [
  {
    heading: '1. Scope',
    body: [
      'This policy explains what Mentarika ("we") collects when you use the Mentarika web app and this site, and how it is used. Mentarika is an AI mock-interview practice product for software engineers.',
      `Mentarika is a personal project. Its operator, and the data controller for the personal data described in this policy, is Pavel Piatrovich, a private individual based in Poland. Contact: ${LEGAL_CONTACT}.`,
      'This is a pre-launch draft.',
    ],
  },
  {
    heading: '2. What we collect',
    body: [
      'Account: your email address and authentication identifiers, via our authentication provider.',
      'Interview content: the transcripts, code, and answers you produce during a session, and the scores and reports generated from them.',
      'Code: code you run or submit in a coding assessment is sent to a code-execution provider to run it.',
      'Voice: if you answer out loud, the audio of your answer is sent to a speech-to-text provider to transcribe it into your session. If the interviewer speaks its replies, the text of those replies is sent to a text-to-speech provider.',
      'Browser: a push subscription (if you enable notifications) so we can tell you when a report is ready.',
      'Landing-site preferences and analytics: the site remembers your language and analytics choice in this browser’s local storage, not in cookies. Analytics is off unless you opt in. After opt-in, the site records page views, selected link clicks, product activity and article opens, without an account ID, and an analytics provider may receive technical request data such as your IP address and page information. You can reject or withdraw analytics consent in Privacy settings.',
      'Diagnostics: error reports and limited diagnostic session data to find and fix bugs – through an error-monitoring provider, from the web app and our servers. These reports can include your user ID.',
      'Email: if an organization invites you by email, your address and the invitation are sent through our email delivery provider.',
    ],
  },
  {
    heading: '3. How we use it',
    body: [
      'To run interviews and coding assessments, generate your scores and reports, track your progress, send the notifications you opted into, and keep the service secure and working.',
      'Under the GDPR we rely on these legal bases: performance of our agreement with you (your account, interviews, voice, code, reports and progress), our legitimate interest in keeping the service secure and working (diagnostics and abuse prevention), and your consent (push notifications and optional website analytics). You can withdraw consent at any time.',
    ],
  },
  {
    heading: '4. AI processing',
    body: [
      'To produce the interviewer’s responses and your scoring, your session content is sent to third-party AI model providers acting as our processors. It is used to generate your results, not to train their public models. Scores and reports are generated automatically for your own practice and have no legal effect on you.',
      'The text of your answers is sent to our AI model provider without your name, email address or account ID. Under its terms it is not used to train models, and it may be kept for up to 30 days to detect abuse.',
      'Before your answers are sent to any AI model, we remove email addresses, phone numbers and links. We cannot detect everything, so please do not mention the names of people, employers or clients, or anything else that identifies you. Code you submit in a coding assessment is sent unchanged.',
    ],
  },
  {
    heading: '5. Sharing',
    body: [
      'We share data only with processors that run the service: providers of authentication, AI models, speech-to-text and text-to-speech, code execution, optional website analytics (only after consent), error monitoring, email delivery, security and content delivery, and hosting. The code editor in assessments loads its files from a public content delivery network, which receives your IP address when it serves them. We do not sell your data.',
      'Transfers outside the European Economic Area. United States: the EU standard contractual clauses or the EU-US Data Privacy Framework, as set out in each provider’s data processing terms.',
      'Organizations: if you join an organization on Mentarika (for example through your employer), it sees only your join date, how many interviews you did in the last 30 days, and your last activity. Team skill averages are shown only when at least five people contributed. No one in the organization can read your transcripts or individual reports.',
      'Candidate assignments: if you accept an interview or assessment sent by a company, you are shown what will be shared before you start. The company sees the resulting report or test results and scores – not your transcript or submitted code.',
    ],
  },
  {
    heading: '6. Retention & deletion',
    body: [
      'We keep your account and interview data while your account exists. You can delete your account in-app at any time (Profile → Delete account); this permanently removes your data and identity from our systems. Detailed logs of AI requests are deleted after 90 days.',
      'Notification delivery history is deleted after 90 days. Counts of landing-site events are stored per day without any identifier and are deleted after 31 days.',
      'Server logs and error reports are kept by our hosting and error-monitoring providers for the period their plan sets, and no longer than 90 days. If you opt in to website analytics, the analytics provider keeps its own data under its terms.',
    ],
  },
  {
    heading: '7. Your rights',
    body: [
      'You have the right to access, correct, export or delete your data, and to object to or restrict some processing. Contact us to exercise these rights; we answer within one month. You can also complain to the President of the Personal Data Protection Office in Poland (uodo.gov.pl) or to the data-protection authority of the EU country where you live.',
    ],
  },
  {
    heading: '8. Children',
    body: ['Mentarika is not directed to children and is intended for users 16+.'],
  },
  {
    heading: '9. Changes & contact',
    body: [
      `We will update this policy as the product evolves and note the date below. Questions or privacy requests: ${LEGAL_CONTACT}.`,
    ],
  },
];

export const TERMS: LegalSection[] = [
  {
    heading: '1. Acceptance',
    body: [
      'Mentarika is a personal project operated by Pavel Piatrovich, a private individual ("we"). By using Mentarika you agree to these terms. If you do not agree, do not use the service. This is a pre-launch draft.',
    ],
  },
  {
    heading: '2. The service',
    body: [
      'Mentarika provides AI technical interview practice, coding assessments, feedback reports and progress tracking. It is a practice tool. It is under active development and features may change or be unavailable.',
    ],
  },
  {
    heading: '3. Accounts',
    body: [
      'You are responsible for your account and for the accuracy of the information you provide. Keep your credentials secure.',
    ],
  },
  {
    heading: '4. Price',
    body: [
      'Mentarika is currently free, within the usage limits shown in the app. We do not take payment details. If we introduce paid plans, we will update these terms first.',
    ],
  },
  {
    heading: '5. Acceptable use',
    body: [
      'Do not abuse, reverse-engineer, scrape, overload, or use the service unlawfully, and do not submit content you have no right to submit.',
    ],
  },
  {
    heading: '6. AI output',
    body: [
      'Interview questions, feedback, and scores are generated heuristically by AI for practice. They are not professional advice and do not guarantee any interview outcome.',
    ],
  },
  {
    heading: '7. Your content',
    body: [
      'You keep ownership of the content you submit. You grant us the license needed to operate the service for you (e.g. to generate and store your reports).',
    ],
  },
  {
    heading: '8. Disclaimers & liability',
    body: [
      'The service is provided "as is" without warranties. To the extent permitted by law, our liability is limited; we are not liable for indirect or consequential damages.',
    ],
  },
  {
    heading: '9. Termination',
    body: [
      'You may stop and delete your account anytime. We may suspend accounts that violate these terms.',
    ],
  },
  {
    heading: '10. Governing law, changes & contact',
    body: [
      `These terms are governed by the law of Poland. That choice does not remove any mandatory protection you have under the consumer law of the country where you live. Disputes go to the courts of Poland, unless mandatory law lets you bring them in your home courts. We may update these terms and will note the date below. Questions: ${LEGAL_CONTACT}.`,
    ],
  },
];

export const LEGAL_DOCS = { privacy: PRIVACY, terms: TERMS } as const;
export type LegalDoc = keyof typeof LEGAL_DOCS;
