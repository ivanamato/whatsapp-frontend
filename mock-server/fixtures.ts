// Fixture data for the Evolution API mock server

// Small 1x1 red pixel PNG in base64
export const RED_PIXEL_PNG_BASE64 =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI6QAAAABJRU5ErkJggg==';

// Connection state fixture
export const connectionState = {
  instance: { state: 'open' as const },
};

export type EvolutionMessageFixture = {
  key: { remoteJid: string; fromMe: boolean; id: string; participant?: string; remoteJidAlt?: string };
  pushName?: string;
  messageType?: string;
  messageTimestamp?: number;
  status?: number;
  MessageUpdate?: { status: string }[];
  message?: Record<string, unknown>;
};

// Helper to create a base timestamp seconds ago
const ts = (secondsAgo: number) => Math.floor((Date.now() - secondsAgo * 1000) / 1000);

// ── MOCK1 fixtures ────────────────────────────────────────────────────────────

const chats1 = [
  {
    id: '556992924255@s.whatsapp.net',
    remoteJid: '556992924255@s.whatsapp.net',
    name: 'Ana Beatriz',
    pushName: 'Ana Beatriz',
    profilePicUrl: undefined,
    unreadCount: 3,
    updatedAt: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    lastMessage: {
      key: { id: 'last-msg-001', fromMe: false, remoteJid: '556992924255@s.whatsapp.net' },
      pushName: 'Ana Beatriz',
      messageType: 'conversation',
      message: { conversation: 'Oi, tudo bem com você?' },
      messageTimestamp: Math.floor((Date.now() - 5 * 60 * 1000) / 1000),
    },
  },
  {
    id: '98765432109876543@lid',
    remoteJid: '98765432109876543@lid',
    name: 'Carlos Eduardo',
    pushName: 'Carlos Eduardo',
    profilePicUrl: undefined,
    unreadCount: 0,
    updatedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    lastMessage: {
      key: { id: 'last-msg-002', fromMe: true, remoteJid: '98765432109876543@lid', remoteJidAlt: '5511987654321@s.whatsapp.net' },
      pushName: 'Carlos Eduardo',
      messageType: 'conversation',
      message: { conversation: 'Perfeito! Vejo você amanhã.' },
      messageTimestamp: Math.floor((Date.now() - 30 * 60 * 1000) / 1000),
    },
  },
  {
    id: '120363012345678901@g.us',
    remoteJid: '120363012345678901@g.us',
    name: 'Equipe Vendas 🚀',
    pushName: 'Equipe Vendas 🚀',
    profilePicUrl: undefined,
    unreadCount: 12,
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    lastMessage: {
      key: { id: 'last-msg-003', fromMe: false, remoteJid: '120363012345678901@g.us', participant: '556711223344@s.whatsapp.net' },
      pushName: 'Marcos Silva',
      messageType: 'conversation',
      message: { conversation: 'Reunião às 15h confirmada 👍' },
      messageTimestamp: Math.floor((Date.now() - 2 * 60 * 60 * 1000) / 1000),
    },
  },
  {
    id: '5521988776655@s.whatsapp.net',
    remoteJid: '5521988776655@s.whatsapp.net',
    name: 'Fernanda Lima',
    pushName: 'Fernanda Lima',
    profilePicUrl: undefined,
    unreadCount: 1,
    updatedAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    lastMessage: {
      key: { id: 'last-msg-004', fromMe: false, remoteJid: '5521988776655@s.whatsapp.net' },
      pushName: 'Fernanda Lima',
      messageType: 'imageMessage',
      message: { imageMessage: { caption: 'Olha que lindo!', mimetype: 'image/jpeg' } },
      messageTimestamp: Math.floor((Date.now() - 6 * 60 * 60 * 1000) / 1000),
    },
  },
  {
    id: '5548999001122@s.whatsapp.net',
    remoteJid: '5548999001122@s.whatsapp.net',
    name: 'Roberto Mendes',
    pushName: 'Roberto Mendes',
    profilePicUrl: undefined,
    unreadCount: 0,
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    lastMessage: {
      key: { id: 'last-msg-005', fromMe: true, remoteJid: '5548999001122@s.whatsapp.net' },
      pushName: 'Roberto Mendes',
      messageType: 'conversation',
      message: { conversation: 'Proposta enviada por e-mail.' },
      messageTimestamp: Math.floor((Date.now() - 24 * 60 * 60 * 1000) / 1000),
    },
  },
];

const contacts1 = [
  { remoteJid: '556992924255@s.whatsapp.net', pushName: 'Ana Beatriz', profilePicUrl: null },
  { remoteJid: '5511987654321@s.whatsapp.net', pushName: 'Carlos Eduardo', profilePicUrl: null },
  { remoteJid: '5521988776655@s.whatsapp.net', pushName: 'Fernanda Lima', profilePicUrl: null },
  { remoteJid: '5548999001122@s.whatsapp.net', pushName: 'Roberto Mendes', profilePicUrl: null },
  { remoteJid: '556711223344@s.whatsapp.net', pushName: 'Marcos Silva', profilePicUrl: null },
  { remoteJid: '556733445566@s.whatsapp.net', pushName: 'Juliana Costa', profilePicUrl: null },
  { remoteJid: '5511944556677@s.whatsapp.net', pushName: 'Pedro Alves', profilePicUrl: null },
];

const messagesAnaBeatriz: EvolutionMessageFixture[] = [
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-001' }, pushName: 'Ana Beatriz', messageType: 'conversation', messageTimestamp: ts(3600), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Olá! Tudo bem?' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: true, id: 'ab-msg-002' }, messageType: 'conversation', messageTimestamp: ts(3540), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Oi Ana! Tudo ótimo, e você?' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-003' }, pushName: 'Ana Beatriz', messageType: 'conversation', messageTimestamp: ts(3480), message: { conversation: 'Estou bem também, obrigada!' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: true, id: 'ab-msg-004' }, messageType: 'imageMessage', messageTimestamp: ts(3000), MessageUpdate: [{ status: 'DELIVERY_ACK' }], message: { imageMessage: { url: 'https://example.com/photo.jpg', mimetype: 'image/jpeg', caption: 'Olha a foto da reunião!', fileName: 'reuniao.jpg', fileLength: 102400 } } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-005' }, pushName: 'Ana Beatriz', messageType: 'conversation', messageTimestamp: ts(2900), message: { conversation: 'Que foto linda 😍' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-006' }, pushName: 'Ana Beatriz', messageType: 'audioMessage', messageTimestamp: ts(2800), message: { audioMessage: { url: 'https://example.com/audio.ogg', mimetype: 'audio/ogg; codecs=opus', fileLength: 24680, seconds: 12, ptt: true } } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: true, id: 'ab-msg-007' }, messageType: 'conversation', messageTimestamp: ts(2700), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Ouvi o áudio, pode deixar!' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-008' }, pushName: 'Ana Beatriz', messageType: 'documentMessage', messageTimestamp: ts(2600), message: { documentMessage: { url: 'https://example.com/relatorio.pdf', mimetype: 'application/pdf', title: 'Relatório Mensal', fileName: 'relatorio-mensal.pdf', fileLength: 512000, caption: 'Relatório do mês' } } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: true, id: 'ab-msg-009' }, messageType: 'conversation', messageTimestamp: ts(2500), MessageUpdate: [{ status: 'DELIVERY_ACK' }], message: { conversation: 'Recebi o relatório, vou analisar.' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-010' }, pushName: 'Ana Beatriz', messageType: 'reactionMessage', messageTimestamp: ts(2400), message: { reactionMessage: { key: { id: 'ab-msg-009' }, text: '👍' } } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-011' }, pushName: 'Ana Beatriz', messageType: 'conversation', messageTimestamp: ts(1800), message: { conversation: 'Você vai para o evento na sexta?' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: true, id: 'ab-msg-012' }, messageType: 'extendedTextMessage', messageTimestamp: ts(1700), MessageUpdate: [{ status: 'READ' }], message: { extendedTextMessage: { text: 'Sim! Estarei lá às 19h 🎉' } } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-013' }, pushName: 'Ana Beatriz', messageType: 'conversation', messageTimestamp: ts(1600), message: { conversation: 'Mensagem secreta que será deletada' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-014' }, pushName: 'Ana Beatriz', messageType: 'protocolMessage', messageTimestamp: ts(1590), message: { protocolMessage: { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-013' }, type: 'REVOKE' } } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-015' }, pushName: 'Ana Beatriz', messageType: 'conversation', messageTimestamp: ts(1200), message: { conversation: 'Me manda o endereço depois?' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: true, id: 'ab-msg-016' }, messageType: 'conversation', messageTimestamp: ts(1100), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Claro! Rua das Flores, 123 - Centro' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-017' }, pushName: 'Ana Beatriz', messageType: 'conversation', messageTimestamp: ts(900), message: { conversation: 'Perfeito, obrigada! ❤️' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: true, id: 'ab-msg-018' }, messageType: 'conversation', messageTimestamp: ts(600), MessageUpdate: [{ status: 'DELIVERY_ACK' }], message: { conversation: 'De nada! Até sexta então 😊' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-019' }, pushName: 'Ana Beatriz', messageType: 'conversation', messageTimestamp: ts(400), message: { conversation: 'Sim! Vai ser ótimo.' } },
  { key: { remoteJid: '556992924255@s.whatsapp.net', fromMe: false, id: 'ab-msg-020' }, pushName: 'Ana Beatriz', messageType: 'conversation', messageTimestamp: ts(300), message: { conversation: 'Oi, tudo bem com você?' } },
];

const messagesCarlosEduardo: EvolutionMessageFixture[] = [
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: false, id: 'ce-msg-001' }, pushName: 'Carlos Eduardo', messageType: 'conversation', messageTimestamp: ts(7200), message: { conversation: 'Bom dia! Você recebeu meu e-mail?' } },
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: true, id: 'ce-msg-002' }, messageType: 'conversation', messageTimestamp: ts(7100), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Bom dia Carlos! Sim, vou responder em breve.' } },
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: false, id: 'ce-msg-003' }, pushName: 'Carlos Eduardo', messageType: 'conversation', messageTimestamp: ts(7000), message: { conversation: 'Ótimo, aguardo.' } },
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: true, id: 'ce-msg-004' }, messageType: 'documentMessage', messageTimestamp: ts(6000), MessageUpdate: [{ status: 'READ' }], message: { documentMessage: { url: 'https://example.com/proposta.pdf', mimetype: 'application/pdf', title: 'Proposta Comercial', fileName: 'proposta-comercial-2026.pdf', fileLength: 245760 } } },
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: false, id: 'ce-msg-005' }, pushName: 'Carlos Eduardo', messageType: 'conversation', messageTimestamp: ts(5500), message: { conversation: 'Recebi a proposta. Vou analisar com minha equipe.' } },
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: true, id: 'ce-msg-006' }, messageType: 'conversation', messageTimestamp: ts(5400), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Qualquer dúvida é só chamar.' } },
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: false, id: 'ce-msg-007' }, pushName: 'Carlos Eduardo', messageType: 'conversation', messageTimestamp: ts(3600), message: { conversation: 'Gostamos muito da proposta. Vamos fechar!' } },
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: true, id: 'ce-msg-008' }, messageType: 'conversation', messageTimestamp: ts(3500), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Que ótima notícia! Quando posso enviar o contrato?' } },
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: false, id: 'ce-msg-009' }, pushName: 'Carlos Eduardo', messageType: 'conversation', messageTimestamp: ts(3400), message: { conversation: 'Pode enviar amanhã.' } },
  { key: { remoteJid: '5511987654321@s.whatsapp.net', fromMe: true, id: 'ce-msg-010' }, messageType: 'conversation', messageTimestamp: ts(1800), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Perfeito! Vejo você amanhã.' } },
  { key: { remoteJid: '98765432109876543@lid', fromMe: false, id: 'ce-msg-011' }, pushName: 'Carlos Eduardo', messageType: 'conversation', messageTimestamp: ts(1700), message: { conversation: 'Até amanhã!' } },
  { key: { remoteJid: '98765432109876543@lid', fromMe: true, id: 'ce-msg-012' }, messageType: 'conversation', messageTimestamp: ts(1800), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Combinado!' } },
];

const messagesGroup1: EvolutionMessageFixture[] = [
  { key: { remoteJid: '120363012345678901@g.us', fromMe: false, id: 'grp-msg-001', participant: '556711223344@s.whatsapp.net' }, pushName: 'Marcos Silva', messageType: 'conversation', messageTimestamp: ts(86400), message: { conversation: 'Bom dia pessoal! 👋' } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: false, id: 'grp-msg-002', participant: '556733445566@s.whatsapp.net' }, pushName: 'Juliana Costa', messageType: 'conversation', messageTimestamp: ts(86300), message: { conversation: 'Bom dia Marcos! Como foi o fim de semana?' } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: true, id: 'grp-msg-003' }, messageType: 'conversation', messageTimestamp: ts(86200), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Bom dia! Fim de semana ótimo 😄' } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: false, id: 'grp-msg-004', participant: '556711223344@s.whatsapp.net' }, pushName: 'Marcos Silva', messageType: 'conversation', messageTimestamp: ts(43200), message: { conversation: 'Lembrem que temos reunião amanhã às 9h' } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: false, id: 'grp-msg-005', participant: '556733445566@s.whatsapp.net' }, pushName: 'Juliana Costa', messageType: 'conversation', messageTimestamp: ts(43100), message: { conversation: 'Confirmado! 👍' } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: true, id: 'grp-msg-006' }, messageType: 'conversation', messageTimestamp: ts(43000), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Estarei lá!' } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: false, id: 'grp-msg-007', participant: '556711223344@s.whatsapp.net' }, pushName: 'Marcos Silva', messageType: 'imageMessage', messageTimestamp: ts(21600), message: { imageMessage: { url: 'https://example.com/slide.jpg', mimetype: 'image/jpeg', caption: 'Slide da apresentação de amanhã', fileName: 'slide.jpg', fileLength: 307200 } } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: false, id: 'grp-msg-008', participant: '556733445566@s.whatsapp.net' }, pushName: 'Juliana Costa', messageType: 'reactionMessage', messageTimestamp: ts(21500), message: { reactionMessage: { key: { id: 'grp-msg-007' }, text: '🔥' } } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: false, id: 'grp-msg-009', participant: '5511944556677@s.whatsapp.net' }, pushName: 'Pedro Alves', messageType: 'conversation', messageTimestamp: ts(10800), message: { conversation: 'Alguém sabe qual é a pauta de hoje?' } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: true, id: 'grp-msg-010' }, messageType: 'conversation', messageTimestamp: ts(10700), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Revisão de metas do trimestre e planejamento Q2' } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: false, id: 'grp-msg-011', participant: '5511944556677@s.whatsapp.net' }, pushName: 'Pedro Alves', messageType: 'conversation', messageTimestamp: ts(10600), message: { conversation: 'Perfeito, obrigado!' } },
  { key: { remoteJid: '120363012345678901@g.us', fromMe: false, id: 'grp-msg-012', participant: '556711223344@s.whatsapp.net' }, pushName: 'Marcos Silva', messageType: 'conversation', messageTimestamp: ts(7200), message: { conversation: 'Reunião às 15h confirmada 👍' } },
];

const messagesFernandaLima: EvolutionMessageFixture[] = [
  { key: { remoteJid: '5521988776655@s.whatsapp.net', fromMe: true, id: 'fl-msg-001' }, messageType: 'conversation', messageTimestamp: ts(86400 * 2), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Oi Fernanda! Tudo bem?' } },
  { key: { remoteJid: '5521988776655@s.whatsapp.net', fromMe: false, id: 'fl-msg-002' }, pushName: 'Fernanda Lima', messageType: 'conversation', messageTimestamp: ts(86400 * 2 - 100), message: { conversation: 'Oi! Tudo ótimo e você?' } },
  { key: { remoteJid: '5521988776655@s.whatsapp.net', fromMe: true, id: 'fl-msg-003' }, messageType: 'conversation', messageTimestamp: ts(86400 * 2 - 200), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Bem também! Posso te ligar mais tarde?' } },
  { key: { remoteJid: '5521988776655@s.whatsapp.net', fromMe: false, id: 'fl-msg-004' }, pushName: 'Fernanda Lima', messageType: 'conversation', messageTimestamp: ts(86400 - 1000), message: { conversation: 'Claro, pode ligar sim!' } },
  { key: { remoteJid: '5521988776655@s.whatsapp.net', fromMe: false, id: 'fl-msg-005' }, pushName: 'Fernanda Lima', messageType: 'imageMessage', messageTimestamp: ts(21600), message: { imageMessage: { url: 'https://example.com/paisagem.jpg', mimetype: 'image/jpeg', caption: 'Olha que lindo!', fileName: 'paisagem.jpg', fileLength: 204800 } } },
  { key: { remoteJid: '5521988776655@s.whatsapp.net', fromMe: true, id: 'fl-msg-006' }, messageType: 'conversation', messageTimestamp: ts(21500), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Uau, que lugar lindo! Onde é isso?' } },
  { key: { remoteJid: '5521988776655@s.whatsapp.net', fromMe: false, id: 'fl-msg-007' }, pushName: 'Fernanda Lima', messageType: 'conversation', messageTimestamp: ts(21400), message: { conversation: 'É Gramado! Estou aqui de férias 😊' } },
  { key: { remoteJid: '5521988776655@s.whatsapp.net', fromMe: false, id: 'fl-msg-010' }, pushName: 'Fernanda Lima', messageType: 'conversation', messageTimestamp: ts(21600), message: { conversation: 'Olha que lindo!' } },
];

const messagesRobertoMendes: EvolutionMessageFixture[] = [
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: true, id: 'rm-msg-001' }, messageType: 'conversation', messageTimestamp: ts(86400 * 3), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Olá Roberto, tudo bem?' } },
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: false, id: 'rm-msg-002' }, pushName: 'Roberto Mendes', messageType: 'conversation', messageTimestamp: ts(86400 * 3 - 500), message: { conversation: 'Oi! Tudo bem sim. Preciso de um orçamento.' } },
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: true, id: 'rm-msg-003' }, messageType: 'conversation', messageTimestamp: ts(86400 * 3 - 1000), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Claro! Pode me passar os detalhes?' } },
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: false, id: 'rm-msg-004' }, pushName: 'Roberto Mendes', messageType: 'conversation', messageTimestamp: ts(86400 * 2), message: { conversation: 'Quero 100 unidades do produto X e 50 do Y.' } },
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: true, id: 'rm-msg-005' }, messageType: 'conversation', messageTimestamp: ts(86400 * 2 - 500), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Entendido! Vou preparar o orçamento.' } },
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: true, id: 'rm-msg-006' }, messageType: 'documentMessage', messageTimestamp: ts(86400), MessageUpdate: [{ status: 'READ' }], message: { documentMessage: { url: 'https://example.com/orcamento.pdf', mimetype: 'application/pdf', title: 'Orçamento', fileName: 'orcamento-roberto.pdf', fileLength: 102400 } } },
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: false, id: 'rm-msg-007' }, pushName: 'Roberto Mendes', messageType: 'conversation', messageTimestamp: ts(86400 - 1000), message: { conversation: 'Recebi! Vou analisar e retorno.' } },
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: true, id: 'rm-msg-008' }, messageType: 'conversation', messageTimestamp: ts(43200), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Qualquer dúvida pode chamar!' } },
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: false, id: 'rm-msg-009' }, pushName: 'Roberto Mendes', messageType: 'conversation', messageTimestamp: ts(36000), message: { conversation: 'Ok, aprovamos o orçamento. Como fazemos o pedido?' } },
  { key: { remoteJid: '5548999001122@s.whatsapp.net', fromMe: true, id: 'rm-msg-010' }, messageType: 'conversation', messageTimestamp: ts(35000), MessageUpdate: [{ status: 'DELIVERY_ACK' }], message: { conversation: 'Ótimo! Proposta enviada por e-mail.' } },
];

const messagesByJid1: Record<string, EvolutionMessageFixture[]> = {
  '556992924255@s.whatsapp.net': messagesAnaBeatriz,
  '5511987654321@s.whatsapp.net': messagesCarlosEduardo,
  '98765432109876543@lid': messagesCarlosEduardo,
  '120363012345678901@g.us': messagesGroup1,
  '5521988776655@s.whatsapp.net': messagesFernandaLima,
  '5548999001122@s.whatsapp.net': messagesRobertoMendes,
};

// ── MOCK2 fixtures ────────────────────────────────────────────────────────────

const chats2 = [
  {
    id: '15551234567@s.whatsapp.net',
    remoteJid: '15551234567@s.whatsapp.net',
    name: 'Sarah Johnson',
    pushName: 'Sarah Johnson',
    profilePicUrl: undefined,
    unreadCount: 2,
    updatedAt: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    lastMessage: {
      key: { id: 'm2-last-001', fromMe: false, remoteJid: '15551234567@s.whatsapp.net' },
      pushName: 'Sarah Johnson',
      messageType: 'conversation',
      message: { conversation: 'Can we reschedule to Thursday?' },
      messageTimestamp: Math.floor((Date.now() - 10 * 60 * 1000) / 1000),
    },
  },
  {
    id: '447911123456@s.whatsapp.net',
    remoteJid: '447911123456@s.whatsapp.net',
    name: 'James Wright',
    pushName: 'James Wright',
    profilePicUrl: undefined,
    unreadCount: 0,
    updatedAt: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
    lastMessage: {
      key: { id: 'm2-last-002', fromMe: true, remoteJid: '447911123456@s.whatsapp.net' },
      pushName: 'James Wright',
      messageType: 'conversation',
      message: { conversation: 'Invoice sent. Let me know if you have questions.' },
      messageTimestamp: Math.floor((Date.now() - 45 * 60 * 1000) / 1000),
    },
  },
  {
    id: '120363099887766554@g.us',
    remoteJid: '120363099887766554@g.us',
    name: 'Product Team 💡',
    pushName: 'Product Team 💡',
    profilePicUrl: undefined,
    unreadCount: 5,
    updatedAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    lastMessage: {
      key: { id: 'm2-last-003', fromMe: false, remoteJid: '120363099887766554@g.us', participant: '15559876543@s.whatsapp.net' },
      pushName: 'Emily Chen',
      messageType: 'conversation',
      message: { conversation: 'Designs are ready for review 🎨' },
      messageTimestamp: Math.floor((Date.now() - 3 * 60 * 60 * 1000) / 1000),
    },
  },
  {
    id: '34612345678@s.whatsapp.net',
    remoteJid: '34612345678@s.whatsapp.net',
    name: 'Miguel Torres',
    pushName: 'Miguel Torres',
    profilePicUrl: undefined,
    unreadCount: 0,
    updatedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    lastMessage: {
      key: { id: 'm2-last-004', fromMe: false, remoteJid: '34612345678@s.whatsapp.net' },
      pushName: 'Miguel Torres',
      messageType: 'conversation',
      message: { conversation: 'Confirmed for Monday. See you then!' },
      messageTimestamp: Math.floor((Date.now() - 12 * 60 * 60 * 1000) / 1000),
    },
  },
];

const contacts2 = [
  { remoteJid: '15551234567@s.whatsapp.net', pushName: 'Sarah Johnson', profilePicUrl: null },
  { remoteJid: '447911123456@s.whatsapp.net', pushName: 'James Wright', profilePicUrl: null },
  { remoteJid: '15559876543@s.whatsapp.net', pushName: 'Emily Chen', profilePicUrl: null },
  { remoteJid: '15554445566@s.whatsapp.net', pushName: 'David Park', profilePicUrl: null },
  { remoteJid: '34612345678@s.whatsapp.net', pushName: 'Miguel Torres', profilePicUrl: null },
];

const messagesSarahJohnson: EvolutionMessageFixture[] = [
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: true, id: 'sj-msg-001' }, messageType: 'conversation', messageTimestamp: ts(7200), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Hi Sarah! Following up on the proposal.' } },
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: false, id: 'sj-msg-002' }, pushName: 'Sarah Johnson', messageType: 'conversation', messageTimestamp: ts(7100), message: { conversation: 'Hi! Yes, we reviewed it with the team.' } },
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: true, id: 'sj-msg-003' }, messageType: 'conversation', messageTimestamp: ts(7000), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Great! Any feedback?' } },
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: false, id: 'sj-msg-004' }, pushName: 'Sarah Johnson', messageType: 'conversation', messageTimestamp: ts(6800), message: { conversation: 'We love the approach. A few questions about pricing.' } },
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: true, id: 'sj-msg-005' }, messageType: 'conversation', messageTimestamp: ts(6700), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Of course, happy to discuss. Want to hop on a call?' } },
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: false, id: 'sj-msg-006' }, pushName: 'Sarah Johnson', messageType: 'conversation', messageTimestamp: ts(3600), message: { conversation: 'Sure! How about Wednesday at 3pm?' } },
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: true, id: 'sj-msg-007' }, messageType: 'conversation', messageTimestamp: ts(3500), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Wednesday works perfectly!' } },
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: false, id: 'sj-msg-008' }, pushName: 'Sarah Johnson', messageType: 'audioMessage', messageTimestamp: ts(1800), message: { audioMessage: { url: 'https://example.com/voice.ogg', mimetype: 'audio/ogg; codecs=opus', fileLength: 18000, seconds: 9, ptt: true } } },
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: true, id: 'sj-msg-009' }, messageType: 'conversation', messageTimestamp: ts(1700), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Heard it — noted everything you mentioned!' } },
  { key: { remoteJid: '15551234567@s.whatsapp.net', fromMe: false, id: 'sj-msg-010' }, pushName: 'Sarah Johnson', messageType: 'conversation', messageTimestamp: ts(600), message: { conversation: 'Can we reschedule to Thursday?' } },
];

const messagesJamesWright: EvolutionMessageFixture[] = [
  { key: { remoteJid: '447911123456@s.whatsapp.net', fromMe: false, id: 'jw-msg-001' }, pushName: 'James Wright', messageType: 'conversation', messageTimestamp: ts(86400 * 2), message: { conversation: 'Hello, I need a quote for 500 units.' } },
  { key: { remoteJid: '447911123456@s.whatsapp.net', fromMe: true, id: 'jw-msg-002' }, messageType: 'conversation', messageTimestamp: ts(86400 * 2 - 600), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Hi James! I will prepare that for you today.' } },
  { key: { remoteJid: '447911123456@s.whatsapp.net', fromMe: true, id: 'jw-msg-003' }, messageType: 'documentMessage', messageTimestamp: ts(86400), MessageUpdate: [{ status: 'READ' }], message: { documentMessage: { url: 'https://example.com/quote.pdf', mimetype: 'application/pdf', title: 'Quote #2026-042', fileName: 'quote-2026-042.pdf', fileLength: 98304 } } },
  { key: { remoteJid: '447911123456@s.whatsapp.net', fromMe: false, id: 'jw-msg-004' }, pushName: 'James Wright', messageType: 'conversation', messageTimestamp: ts(86400 - 1200), message: { conversation: 'Thanks! The pricing looks fair. Going ahead.' } },
  { key: { remoteJid: '447911123456@s.whatsapp.net', fromMe: true, id: 'jw-msg-005' }, messageType: 'conversation', messageTimestamp: ts(86400 - 2000), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Fantastic! I will process the order now.' } },
  { key: { remoteJid: '447911123456@s.whatsapp.net', fromMe: false, id: 'jw-msg-006' }, pushName: 'James Wright', messageType: 'reactionMessage', messageTimestamp: ts(86400 - 2100), message: { reactionMessage: { key: { id: 'jw-msg-005' }, text: '👍' } } },
  { key: { remoteJid: '447911123456@s.whatsapp.net', fromMe: true, id: 'jw-msg-007' }, messageType: 'conversation', messageTimestamp: ts(3600), MessageUpdate: [{ status: 'DELIVERY_ACK' }], message: { conversation: 'Invoice sent. Let me know if you have questions.' } },
];

const messagesProductTeam: EvolutionMessageFixture[] = [
  { key: { remoteJid: '120363099887766554@g.us', fromMe: false, id: 'pt-msg-001', participant: '15559876543@s.whatsapp.net' }, pushName: 'Emily Chen', messageType: 'conversation', messageTimestamp: ts(86400), message: { conversation: 'Good morning team! Sprint review at 10am.' } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: true, id: 'pt-msg-002' }, messageType: 'conversation', messageTimestamp: ts(86300), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'On it! I will have the demo ready.' } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: false, id: 'pt-msg-003', participant: '15554445566@s.whatsapp.net' }, pushName: 'David Park', messageType: 'conversation', messageTimestamp: ts(86200), message: { conversation: 'Backend changes are deployed to staging ✅' } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: false, id: 'pt-msg-004', participant: '15559876543@s.whatsapp.net' }, pushName: 'Emily Chen', messageType: 'conversation', messageTimestamp: ts(43200), message: { conversation: 'Review went great! Stakeholders loved it 🎉' } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: true, id: 'pt-msg-005' }, messageType: 'conversation', messageTimestamp: ts(43100), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Awesome news! What are the next steps?' } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: false, id: 'pt-msg-006', participant: '15554445566@s.whatsapp.net' }, pushName: 'David Park', messageType: 'conversation', messageTimestamp: ts(43000), message: { conversation: 'Launch prep starting next week.' } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: false, id: 'pt-msg-007', participant: '15559876543@s.whatsapp.net' }, pushName: 'Emily Chen', messageType: 'imageMessage', messageTimestamp: ts(21600), message: { imageMessage: { url: 'https://example.com/mockup.png', mimetype: 'image/png', caption: 'New onboarding flow mockup', fileName: 'onboarding-v3.png', fileLength: 450000 } } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: true, id: 'pt-msg-008' }, messageType: 'reactionMessage', messageTimestamp: ts(21500), message: { reactionMessage: { key: { id: 'pt-msg-007' }, text: '🔥' } } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: false, id: 'pt-msg-009', participant: '15554445566@s.whatsapp.net' }, pushName: 'David Park', messageType: 'conversation', messageTimestamp: ts(10800), message: { conversation: 'Can someone review PR #247?' } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: true, id: 'pt-msg-010' }, messageType: 'conversation', messageTimestamp: ts(10700), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'On it, give me 10 minutes.' } },
  { key: { remoteJid: '120363099887766554@g.us', fromMe: false, id: 'pt-msg-011', participant: '15559876543@s.whatsapp.net' }, pushName: 'Emily Chen', messageType: 'conversation', messageTimestamp: ts(3600), message: { conversation: 'Designs are ready for review 🎨' } },
];

const messagesMiguelTorres: EvolutionMessageFixture[] = [
  { key: { remoteJid: '34612345678@s.whatsapp.net', fromMe: true, id: 'mt-msg-001' }, messageType: 'conversation', messageTimestamp: ts(86400 * 3), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Hola Miguel! ¿Todo bien?' } },
  { key: { remoteJid: '34612345678@s.whatsapp.net', fromMe: false, id: 'mt-msg-002' }, pushName: 'Miguel Torres', messageType: 'conversation', messageTimestamp: ts(86400 * 3 - 800), message: { conversation: '¡Hola! Sí, todo bien. ¿Tienes los documentos?' } },
  { key: { remoteJid: '34612345678@s.whatsapp.net', fromMe: true, id: 'mt-msg-003' }, messageType: 'documentMessage', messageTimestamp: ts(86400 * 2), MessageUpdate: [{ status: 'READ' }], message: { documentMessage: { url: 'https://example.com/contract.pdf', mimetype: 'application/pdf', title: 'Contract Draft', fileName: 'contract-draft.pdf', fileLength: 153600 } } },
  { key: { remoteJid: '34612345678@s.whatsapp.net', fromMe: false, id: 'mt-msg-004' }, pushName: 'Miguel Torres', messageType: 'conversation', messageTimestamp: ts(86400 * 2 - 1000), message: { conversation: 'Perfecto, lo reviso hoy.' } },
  { key: { remoteJid: '34612345678@s.whatsapp.net', fromMe: false, id: 'mt-msg-005' }, pushName: 'Miguel Torres', messageType: 'conversation', messageTimestamp: ts(86400), message: { conversation: 'Todo está bien. Solo una pregunta sobre la cláusula 4.' } },
  { key: { remoteJid: '34612345678@s.whatsapp.net', fromMe: true, id: 'mt-msg-006' }, messageType: 'conversation', messageTimestamp: ts(86400 - 500), MessageUpdate: [{ status: 'READ' }], message: { conversation: 'Claro, la cláusula 4 es estándar. No hay problema en ajustarla.' } },
  { key: { remoteJid: '34612345678@s.whatsapp.net', fromMe: false, id: 'mt-msg-007' }, pushName: 'Miguel Torres', messageType: 'conversation', messageTimestamp: ts(43200), message: { conversation: 'Confirmed for Monday. See you then!' } },
];

const messagesByJid2: Record<string, EvolutionMessageFixture[]> = {
  '15551234567@s.whatsapp.net': messagesSarahJohnson,
  '447911123456@s.whatsapp.net': messagesJamesWright,
  '120363099887766554@g.us': messagesProductTeam,
  '34612345678@s.whatsapp.net': messagesMiguelTorres,
};

// ── Per-instance exports ──────────────────────────────────────────────────────

export type InstanceFixtures = {
  chats: typeof chats1;
  contacts: typeof contacts1;
  messagesByJid: Record<string, EvolutionMessageFixture[]>;
};

export const fixturesByInstance: Record<string, InstanceFixtures> = {
  MOCK1: { chats: chats1, contacts: contacts1, messagesByJid: messagesByJid1 },
  MOCK2: { chats: chats2, contacts: contacts2, messagesByJid: messagesByJid2 },
};

// Fallback for unknown instances
export const defaultFixtures: InstanceFixtures = fixturesByInstance.MOCK1;
