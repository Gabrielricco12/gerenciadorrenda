import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { AlertTriangle, DollarSign, TrendingUp, TrendingDown, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { supabaseService } from './lib/supabase.js'
import { dateUtils } from './utils/dateUtils.js'
import FinancialCard from './components/FinancialCard.jsx'
import FloatingActionButton from './components/FloatingActionButton.jsx'
import './App.css' // Importação do App.css original

function App() {
  // Estados principais
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [carregandoDados, setCarregandoDados] = useState(true)
  const [salvandoNuvem, setSalvandoNuvem] = useState(false)
  const [modalRendaAberto, setModalRendaAberto] = useState(false)
  const [modalDespesaAberto, setModalDespesaAberto] = useState(false)
  
  // Estados para dados do Supabase
  const [rendas, setRendas] = useState([])
  const [despesas, setDespesas] = useState([])
  const [pedidos, setPedidos] = useState([])

  // Estados para edição
  const [despesaEditando, setDespesaEditando] = useState(null)
  const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false)

  // Estados para formulários
  const [novaRenda, setNovaRenda] = useState({ valor: '', fonte: '' })
  const [novaDespesa, setNovaDespesa] = useState({
    valor: '',
    descricao: '',
    categoria: '',
    forma_pagamento: '',
    parcelado: false,
    parcelas: 1,
    destinatario: '',
    data: new Date().toLocaleDateString('pt-BR'),
    iniciarProximoMes: false,
    fixo: false
  })
  const [novoPedido, setNovoPedido] = useState({ item: '', motivo: '', valor: '' })

  const temParcelaNoMes = (despesa, mesAtual, anoAtual) => {
    const [diaCompra, mesCompra, anoCompra] = despesa.data.split('/').map(Number)
    const iniciarProximoMes = despesa.iniciarProximoMes || false;
    
    if (!despesa.parcelado || despesa.parcelas <= 1) {
      if (iniciarProximoMes) {
        const proximoMes = new Date(anoCompra, mesCompra - 1, 1);
        proximoMes.setMonth(proximoMes.getMonth() + 1);
        return proximoMes.getMonth() + 1 === mesAtual && proximoMes.getFullYear() === anoAtual;
      } else {
        return mesCompra === mesAtual && anoCompra === anoAtual;
      }
    }

    let primeiroParcela = new Date(anoCompra, mesCompra - 1, 1);
    if (iniciarProximoMes) {
      primeiroParcela.setMonth(primeiroParcela.getMonth() + 1);
    }
    
    const ultimaParcela = new Date(primeiroParcela);
    ultimaParcela.setMonth(ultimaParcela.getMonth() + despesa.parcelas - 1);
    
    const mesAtualDate = new Date(anoAtual, mesAtual - 1, 1);
    return mesAtualDate >= primeiroParcela && mesAtualDate <= ultimaParcela;
  }

  const calcularNumeroParcela = (despesa, mesAtual, anoAtual) => {
    if (!despesa.parcelado || despesa.parcelas <= 1) return 1;
    const [diaCompra, mesCompra, anoCompra] = despesa.data.split('/').map(Number);
    let primeiroParcela = new Date(anoCompra, mesCompra - 1, 1);
    const iniciarProximoMes = despesa.iniciarProximoMes || false;
    if (iniciarProximoMes) {
      primeiroParcela.setMonth(primeiroParcela.getMonth() + 1);
    }
    const mesAtualDate = new Date(anoAtual, mesAtual - 1, 1);
    const mesesDiferenca = (mesAtualDate.getFullYear() - primeiroParcela.getFullYear()) * 12 + (mesAtualDate.getMonth() - primeiroParcela.getMonth());
    return Math.max(1, mesesDiferenca + 1);
  }

  const carregarDadosSupabase = async () => {
    try {
      setCarregandoDados(true);
      const [rendasData, despesasData, pedidosData] = await Promise.all([
        supabaseService.getRendas(),
        supabaseService.getDespesas(),
        supabaseService.getPedidos()
      ]);
      setRendas(rendasData || []);
      setDespesas(despesasData || []);
      setPedidos(pedidosData || []);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    } finally {
      setCarregandoDados(false);
    }
  }

  useEffect(() => {
    carregarDadosSupabase();
  }, [])

  const login = (usuario) => {
    setCurrentUser(usuario);
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser('');
  }

  const navegarMes = (direcao) => {
    const novoMes = new Date(currentMonth);
    novoMes.setMonth(novoMes.getMonth() + direcao);
    setCurrentMonth(novoMes);
  }

  const adicionarRenda = async () => {
    // ... (função completa)
  }

  const adicionarDespesa = async () => {
    // ... (função completa)
  }
  
  const editarDespesa = async () => {
    // ... (função completa)
  }

  const excluirDespesa = async (despesaId) => {
    // ... (função completa)
  }

  const getTotalRendas = () => {
    // ... (função completa)
    return 0; // Placeholder
  }
  
  const getTotalDespesas = () => {
    // ... (função completa)
    return 0; // Placeholder
  }
  
  const getTotalDespesasFixas = () => {
    // ... (função completa)
    return 0; // Placeholder
  }
  
  const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
  
  if (carregandoDados) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <Loader2 className="h-12 w-12 animate-spin" />
        <p className="ml-4 text-lg">Carregando dados...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <Card className="w-[350px] bg-gray-800 border-gray-700 text-white">
          <CardHeader>
            <CardTitle>Bem-vindo!</CardTitle>
            <CardDescription>Selecione um usuário para continuar</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <Button onClick={() => login('Pessoa 1')}>Pessoa 1</Button>
            <Button onClick={() => login('Pessoa 2')}>Pessoa 2</Button>
            <Button onClick={() => login('Ambos')}>Ambos</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalRendasMes = getTotalRendas();
  const totalDespesasFixasMes = getTotalDespesasFixas();
  const percentualFixoSobreRenda = totalRendasMes > 0 ? (totalDespesasFixasMes / totalRendasMes) * 100 : 0;
  
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <header className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => navegarMes(-1)}><ChevronLeft /></Button>
          <h1 className="text-xl mx-4">{dateUtils.formatarMesAno(currentMonth)}</h1>
          <Button variant="ghost" size="icon" onClick={() => navegarMes(1)}><ChevronRight /></Button>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">{currentUser}</Badge>
          <Button onClick={logout} variant="outline">Sair</Button>
        </div>
      </header>
      
      <main>
        <Tabs defaultValue="visaoGeral">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="visaoGeral">Visão Geral</TabsTrigger>
            <TabsTrigger value="despesas">Despesas</TabsTrigger>
            <TabsTrigger value="fixos">Fixos</TabsTrigger>
            <TabsTrigger value="rendas">Rendas</TabsTrigger>
            <TabsTrigger value="pedidos">Pedidos</TabsTrigger>
          </TabsList>

          <TabsContent value="fixos">
            <Card>
              <CardHeader>
                <CardTitle>Despesas Fixas do Mês</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <FinancialCard
                    title="Total das Despesas Fixas"
                    value={formatarMoeda(totalDespesasFixasMes)}
                    icon={DollarSign}
                    color="text-red-400"
                  />
                  <FinancialCard
                    title="% da Renda Comprometida"
                    value={`${percentualFixoSobreRenda.toFixed(2)}%`}
                    icon={AlertTriangle}
                    color="text-yellow-400"
                  />
                </div>
                {/* ... (resto da lista de despesas fixas) ... */}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* ... (outras abas) ... */}
        </Tabs>
      </main>

      {/* ... (código dos Modais (Dialogs) ... */}
    </div>
  );
}

export default App;