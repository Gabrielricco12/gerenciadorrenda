# 🏦 Gerenciador Financeiro - Gabriel & Paloma

## 📋 Resumo do Projeto

Webapp moderno e responsivo para gestão de renda familiar desenvolvido especificamente para Gabriel e Paloma. O sistema permite controle completo das finanças do casal com funcionalidades avançadas de categorização, alertas e aprovação de compras.

## ✨ Funcionalidades Implementadas

### 🔐 Sistema de Autenticação
- **Dois perfis distintos**: Gabriel e Paloma
- **Login simples e intuitivo** com botões personalizados
- **Dados compartilhados** entre os perfis
- **Persistência automática** de sessão

### 💰 Gestão de Renda
- **Adicionar fontes de renda** (salário, freelance, investimentos, etc.)
- **Visualização individual** por usuário
- **Renda total do casal** sempre visível
- **Histórico completo** de todas as rendas

### 💳 Controle de Despesas
- **Formulário completo** para nova despesa com:
  - Valor da compra
  - Forma de pagamento (PIX, Bradesco, Itaú, Nubank)
  - Tipo de compra (Despesas 70%, Lazer 20%, Investimento 10%)
  - Destinatário (Gabriel, Paloma ou Casa)
  - Descrição detalhada
- **Sistema de parcelamento** para cartões de crédito
- **Visualização por banco** (Bradesco, Itaú, Nubank)
- **Despesas individuais e totais**

### 🏠 Aba Casa
- **Gastos compartilhados** do casal
- **Separação clara** entre despesas individuais e da casa
- **Controle específico** para gastos domésticos

### 🛒 Sistema de Pedidos de Compra
- **Solicitação de compras** com:
  - Item desejado
  - Motivo da compra
  - Valor estimado
- **Sistema de aprovação/rejeição**
- **Histórico organizado** em abas:
  - Pendentes
  - Meus Pedidos
  - Aprovados
  - Rejeitados
- **Notificações visuais** com contadores
- **Motivo obrigatório** para rejeições

### 📊 Visão Geral (Dashboard)
- **Resumo financeiro completo**:
  - Renda total
  - Despesas totais
  - Saldo (verde se positivo, vermelho se negativo)
- **Barra de progressão 70/20/10**:
  - 70% Despesas necessárias
  - 20% Lazer
  - 10% Investimento
- **Sistema de alertas por cores**:
  - 🟢 Verde: Gastos controlados
  - 🟡 Amarelo: 60% da renda em cartão
  - 🟠 Laranja: 75% da renda em cartão
  - 🔴 Vermelho: 85% da renda em cartão
- **Estatísticas detalhadas**

### 💾 Backup e Sincronização
- **Persistência automática** via localStorage
- **Sincronização em tempo real** entre perfis
- **Dados compartilhados** instantaneamente
- **Backup automático** no navegador

## 🎨 Design e Usabilidade

### 📱 Responsividade
- **Otimizado para mobile** e desktop
- **Interface touch-friendly**
- **Navegação intuitiva** por abas
- **Design moderno** com cores personalizadas

### 🎯 Experiência do Usuário
- **Navegação por abas coloridas**
- **Modais organizados** para formulários
- **Feedback visual** imediato
- **Alertas contextuais**
- **Imagem de fundo** personalizada

## 🔧 Tecnologias Utilizadas

- **React 18** - Framework principal
- **Tailwind CSS** - Estilização
- **Shadcn/UI** - Componentes de interface
- **Lucide Icons** - Ícones modernos
- **LocalStorage** - Persistência de dados
- **Vite** - Build tool

## 📂 Estrutura do Projeto

```
gestao-renda/
├── src/
│   ├── components/
│   │   ├── RendaTab.jsx          # Aba de renda
│   │   ├── DespesasTab.jsx       # Aba de despesas
│   │   ├── CasaTab.jsx           # Aba da casa
│   │   ├── PedidosTab.jsx        # Aba de pedidos
│   │   └── VisaoGeralTab.jsx     # Dashboard
│   ├── hooks/
│   │   ├── useLocalStorage.js    # Hook de persistência
│   │   └── useFinancialData.js   # Hook de dados financeiros
│   ├── assets/
│   │   └── financial-bg.webp     # Imagem de fundo
│   └── App.jsx                   # Componente principal
├── package.json
└── README.md
```

## 🚀 Como Usar

### 1. Acesso ao Sistema
1. Abra o webapp no navegador
2. Selecione seu perfil (Gabriel ou Paloma)
3. Comece a usar as funcionalidades

### 2. Adicionando Renda
1. Clique na aba "Renda"
2. Clique em "Adicionar Renda"
3. Preencha valor e origem
4. Confirme a adição

### 3. Registrando Despesas
1. Clique na aba "Despesas"
2. Clique em "Gerar Nova Despesa"
3. Preencha todos os campos:
   - Valor
   - Forma de pagamento
   - Tipo de compra
   - Destinatário
   - Descrição
4. Se for cartão, informe se é parcelado
5. Confirme a despesa

### 4. Solicitando Compras
1. Clique na aba "Pedidos"
2. Clique em "Novo Pedido de Compra"
3. Informe:
   - O que quer comprar
   - Motivo da compra
   - Valor estimado
4. Envie o pedido

### 5. Aprovando/Rejeitando Pedidos
1. Na aba "Pedidos", vá para "Pendentes"
2. Visualize os pedidos do parceiro
3. Clique em "Aceitar" ou "Recusar"
4. Se recusar, explique o motivo

### 6. Acompanhando Finanças
1. Clique na aba "Visão"
2. Visualize o resumo completo
3. Acompanhe a barra 70/20/10
4. Observe os alertas de gastos

## ⚠️ Sistema de Alertas

O sistema monitora automaticamente os gastos com cartão de crédito e emite alertas:

- **🟢 Verde (0-59%)**: Gastos controlados
- **🟡 Amarelo (60-74%)**: Atenção aos gastos
- **🟠 Laranja (75-84%)**: Reduza os gastos
- **🔴 Vermelho (85%+)**: Situação crítica

## 📊 Regra 70/20/10

O sistema implementa a regra financeira 70/20/10:
- **70% Despesas**: Necessidades básicas
- **20% Lazer**: Entretenimento e diversão
- **10% Investimento**: Poupança e investimentos

## 🔄 Sincronização de Dados

- **Dados compartilhados**: Ambos os perfis veem as mesmas informações
- **Atualizações em tempo real**: Mudanças são refletidas imediatamente
- **Persistência**: Dados salvos automaticamente no navegador
- **Backup**: Informações mantidas entre sessões

## 📱 Compatibilidade

- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, tablet, smartphone
- **Sistemas**: Windows, macOS, Linux, iOS, Android

## 🎯 Benefícios

1. **Controle Total**: Visão completa das finanças do casal
2. **Transparência**: Ambos veem todos os gastos e rendas
3. **Planejamento**: Sistema de aprovação para compras grandes
4. **Alertas**: Prevenção de gastos excessivos
5. **Organização**: Categorização automática seguindo regra 70/20/10
6. **Mobilidade**: Acesso de qualquer dispositivo

## 🔮 Próximos Passos (Sugestões)

1. **Relatórios mensais** em PDF
2. **Gráficos avançados** de gastos
3. **Metas de economia** personalizadas
4. **Integração bancária** (futuro)
5. **Notificações push** (futuro)
6. **Exportação de dados** para Excel

## 📞 Suporte

O webapp foi desenvolvido com foco na simplicidade e usabilidade. Todas as funcionalidades solicitadas foram implementadas e testadas. O sistema está pronto para uso imediato!

---

**Desenvolvido com ❤️ para Gabriel & Paloma**
*Gestão financeira inteligente para casais modernos*

