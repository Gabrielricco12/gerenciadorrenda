import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  DollarSign, 
  CreditCard, 
  Home, 
  ShoppingCart, 
  BarChart3,
  User,
  LogOut
} from 'lucide-react'
import { useFinancialData } from './hooks/useFinancialData'
import { RendaTab } from './components/RendaTab'
import { DespesasTab } from './components/DespesasTab'
import { CasaTab } from './components/CasaTab'
import { PedidosTab } from './components/PedidosTab'
import { VisaoGeralTab } from './components/VisaoGeralTab'
import financialBg from './assets/financial-bg.webp'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('renda')
  const {
    getUsuarioAtivo,
    setUsuarioAtivo,
    data
  } = useFinancialData()

  const currentUser = getUsuarioAtivo()

  // Função para fazer login
  const handleLogin = (nomeUsuario) => {
    setUsuarioAtivo(nomeUsuario)
  }

  // Função para fazer logout
  const handleLogout = () => {
    setUsuarioAtivo(null)
  }

  // Sistema de login simples
  if (!currentUser) {
    return (
      <div 
        className="min-h-screen flex items-center justify-center p-4 relative"
        style={{
          backgroundImage: `url(${financialBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay para melhor legibilidade */}
        <div className="absolute inset-0 bg-white/80"></div>
        
        <Card className="w-full max-w-md relative z-10 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-800">
              Gerenciador Financeiro
            </CardTitle>
            <p className="text-gray-600">Selecione seu perfil para continuar</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={() => handleLogin('Gabriel')}
              className="w-full h-16 text-lg"
              variant="outline"
            >
              <Avatar className="mr-3">
                <AvatarFallback className="bg-blue-500 text-white">G</AvatarFallback>
              </Avatar>
              Gabriel
            </Button>
            <Button 
              onClick={() => handleLogin('Paloma')}
              className="w-full h-16 text-lg"
              variant="outline"
            >
              <Avatar className="mr-3">
                <AvatarFallback className="bg-pink-500 text-white">P</AvatarFallback>
              </Avatar>
              Paloma
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarFallback className={currentUser?.nome === 'Gabriel' ? 'bg-blue-500 text-white' : 'bg-pink-500 text-white'}>
                  {currentUser?.nome[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  Olá, {currentUser?.nome}!
                </h1>
                <p className="text-sm text-gray-500">Gerenciador Financeiro</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleLogout}
              className="text-gray-500 hover:text-gray-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Navigation Tabs */}
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="renda" className="flex flex-col items-center p-3">
              <DollarSign className="h-4 w-4 mb-1" />
              <span className="text-xs">Renda</span>
            </TabsTrigger>
            <TabsTrigger value="despesas" className="flex flex-col items-center p-3">
              <CreditCard className="h-4 w-4 mb-1" />
              <span className="text-xs">Despesas</span>
            </TabsTrigger>
            <TabsTrigger value="casa" className="flex flex-col items-center p-3">
              <Home className="h-4 w-4 mb-1" />
              <span className="text-xs">Casa</span>
            </TabsTrigger>
            <TabsTrigger value="pedidos" className="flex flex-col items-center p-3">
              <ShoppingCart className="h-4 w-4 mb-1" />
              <span className="text-xs">Pedidos</span>
            </TabsTrigger>
            <TabsTrigger value="visao-geral" className="flex flex-col items-center p-3">
              <BarChart3 className="h-4 w-4 mb-1" />
              <span className="text-xs">Visão</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="renda" className="space-y-6">
            <RendaTab />
          </TabsContent>

          <TabsContent value="despesas" className="space-y-6">
            <DespesasTab />
          </TabsContent>

          <TabsContent value="casa" className="space-y-6">
            <CasaTab />
          </TabsContent>

          <TabsContent value="pedidos" className="space-y-6">
            <PedidosTab />
          </TabsContent>

          <TabsContent value="visao-geral" className="space-y-6">
            <VisaoGeralTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default App

