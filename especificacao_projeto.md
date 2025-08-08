# Especificação do Webapp de Gestão de Renda

## Visão Geral
Webapp moderno e responsivo para gestão financeira familiar com dois perfis (Gabriel e Paloma), incluindo controle de renda, despesas, sistema de aprovação de compras e alertas inteligentes.

## Estrutura de Navegação

### Abas Principais:
1. **Renda** - Inserção de valores e origem da renda
2. **Despesas** - Controle de gastos individuais e totais
3. **Casa** - Gastos compartilhados do casal
4. **Novo Pedido de Compra** - Sistema de solicitação e aprovação
5. **Visão Geral** - Dashboard com resumo financeiro

## Funcionalidades Detalhadas

### 1. Sistema de Perfis
- **Perfis**: Gabriel e Paloma
- **Autenticação**: Login simples por seleção de perfil
- **Sincronização**: Dados compartilhados entre perfis em tempo real

### 2. Aba Renda
- **Campos**:
  - Valor da renda
  - Origem/fonte da renda
  - Data de recebimento
- **Funcionalidades**:
  - Adicionar múltiplas fontes de renda
  - Histórico de rendas recebidas
  - Cálculo automático da renda total

### 3. Aba Despesas
- **Visualizações**:
  - Despesas individuais (Gabriel ou Paloma)
  - Total combinado dos dois perfis
  - Separação por banco (Bradesco, Itaú, Nubank)
- **Botão "Gerar Nova Despesa"**:
  - **Forma de pagamento**: PIX, Bradesco, Itaú, Nubank
  - **Parcelamento**: Para cartão de crédito
    - Opção: Não parcelado / Sim parcelado
    - Se parcelado: número de parcelas
    - Cálculo automático para meses futuros
  - **Valor**: Valor da despesa
  - **Tipo de compra**: Despesas (70%), Lazer (20%), Investimento (10%)
  - **Destinatário**: Gabriel, Paloma ou Casa

### 4. Aba Casa
- **Funcionalidade**: Gastos compartilhados do casal
- **Origem**: Despesas marcadas como "CASA" no formulário
- **Visualização**: Lista separada dos gastos domésticos

### 5. Aba Novo Pedido de Compra
- **Formulário de Solicitação**:
  - O que quer comprar
  - Motivo da compra
  - Valor
  - Solicitante (Gabriel ou Paloma)
- **Sistema de Aprovação**:
  - Botão "Aceitar"
  - Botão "Recusar" (com campo obrigatório para motivo)
- **Histórico**: Lista de pedidos aprovados/rejeitados

### 6. Aba Visão Geral
- **Métricas Principais**:
  - Valor total da renda
  - Valor total das despesas (todos os perfis + casa)
  - Saldo (renda - despesas)
    - Verde: saldo positivo
    - Vermelho: saldo negativo
- **Barra de Progressão 70/20/10**:
  - 70% Despesas
  - 20% Lazer
  - 10% Investimento
- **Sistema de Alertas**:
  - Baseado no consumo do cartão de crédito vs renda total
  - 60%: Alerta amarelo
  - 75%: Alerta laranja
  - 85%: Alerta vermelho
  - Ícone de exclamação + texto "ALERTA"

## Estrutura de Dados

### Usuários
```javascript
{
  id: string,
  nome: "Gabriel" | "Paloma",
  ativo: boolean
}
```

### Renda
```javascript
{
  id: string,
  usuario: string,
  valor: number,
  origem: string,
  data: Date
}
```

### Despesas
```javascript
{
  id: string,
  usuario: string,
  valor: number,
  formaPagamento: "PIX" | "Bradesco" | "Itaú" | "Nubank",
  parcelado: boolean,
  numeroParcelas?: number,
  valorParcela?: number,
  tipo: "Despesas" | "Lazer" | "Investimento",
  destinatario: "Gabriel" | "Paloma" | "Casa",
  descricao: string,
  data: Date
}
```

### Pedidos de Compra
```javascript
{
  id: string,
  solicitante: string,
  item: string,
  motivo: string,
  valor: number,
  status: "Pendente" | "Aprovado" | "Rejeitado",
  motivoRejeicao?: string,
  datasolicitacao: Date,
  dataResposta?: Date
}
```

## Tecnologias
- **Frontend**: React com TypeScript
- **Styling**: Tailwind CSS + Shadcn/UI
- **Ícones**: Lucide React
- **Gráficos**: Recharts
- **Persistência**: localStorage com sincronização
- **Responsividade**: Mobile-first design

## Design System
- **Cores**:
  - Primária: Azul moderno
  - Sucesso: Verde
  - Alerta: Amarelo, Laranja, Vermelho
  - Neutros: Cinzas para textos e backgrounds
- **Tipografia**: Fonte moderna e legível
- **Componentes**: Cards, botões, formulários responsivos
- **Animações**: Transições suaves entre estados

