import React, { useState } from 'react';
import { Bell, TrendingUp, Calendar as CalendarIcon, ArrowUpRight, PiggyBank, BarChart3, ChevronRight, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export default function App() {
  const [selectedLapso, setSelectedLapso] = useState(null);
  const [selectedDayInfo, setSelectedDayInfo] = useState({ day: 12, type: 'real', text: 'Cierre histórico al día de hoy: Flujo operativo constante.' });

  // Fecha actual fija del sistema: 12 de septiembre de 2026
  const todayDay = 12;

  // Estructura de la cuadrícula de septiembre de 2026 (Do a Sá)
  const diasMesSeptiembre2026 = [
    { day: 30, currentMonth: false }, { day: 31, currentMonth: false },
    { day: 1, currentMonth: true }, { day: 2, currentMonth: true }, { day: 3, currentMonth: true }, { day: 4, currentMonth: true }, { day: 5, currentMonth: true },
    { day: 6, currentMonth: true }, { day: 7, currentMonth: true }, { day: 8, currentMonth: true }, { day: 9, currentMonth: true }, { day: 10, currentMonth: true }, { day: 11, currentMonth: true }, { day: 12, currentMonth: true },
    { day: 13, currentMonth: true }, { day: 14, currentMonth: true }, { day: 15, currentMonth: true }, { day: 16, currentMonth: true }, { day: 17, currentMonth: true }, { day: 18, currentMonth: true }, { day: 19, currentMonth: true },
    { day: 20, currentMonth: true }, { day: 21, currentMonth: true }, { day: 22, currentMonth: true }, { day: 23, currentMonth: true }, { day: 24, currentMonth: true }, { day: 25, currentMonth: true }, { day: 26, currentMonth: true },
    { day: 27, currentMonth: true }, { day: 28, currentMonth: true }, { day: 29, currentMonth: true }, { day: 30, currentMonth: true },
    { day: 1, currentMonth: false }, { day: 2, currentMonth: false }, { day: 3, currentMonth: false }
  ];

  // Recomendaciones agrupadas por Lapsos de Tiempo
  const lapsosRecomendaciones = [
    {
      id: 'lapso-1',
      rango: 'Días 1 al 7 (Inicio de Mes)',
      tipo: 'safe',
      titulo: 'Optimización inicial y arranque de cobros',
      mensaje: 'Balance de la primera semana cerrado con éxito. El motor detectó una reducción del 4% en costos fijos de suministros gracias al control de tickets bajos.',
      accion: 'Ver reporte de costos fijos',
      badgeColor: 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 'lapso-2',
      rango: 'Días 8 al 15 (Mitad de Mes & Nómina)',
      tipo: 'danger',
      titulo: 'Reserva Oportuna para Presión de Nómina',
      mensaje: 'Atención: Se proyecta un pico de salida fuerte por compromiso quincenal. Se recomienda transferir de forma preventiva $3,500 al fondo de reserva operativo antes del día 15.',
      accion: 'Autorizar fondo de reserva',
      badgeColor: 'bg-red-100 text-[#D01C1F]'
    },
    {
      id: 'lapso-3',
      rango: 'Días 16 al 22 (Recuperación y Estabilidad)',
      tipo: 'warning',
      titulo: 'Auditoría de Suscripciones y Software',
      mensaje: 'Análisis predictivo de gastos recurrentes muestra cargos hormiga en herramientas digitales sin uso operativo crítico. Cancelar servicios redundantes ahorrará $800 este periodo.',
      accion: 'Revisar suscripciones fijas',
      badgeColor: 'bg-amber-100 text-amber-800'
    },
    {
      id: 'lapso-4',
      rango: 'Días 23 al 30 (Cierre de Mes y Obligaciones)',
      tipo: 'safe',
      titulo: 'Fondeo de Reserva Fiscal Oportuna',
      mensaje: 'Con base en la tendencia de liquidez constante, el motor sugiere separar el excedente acumulado hacia la reserva impositiva para cumplir sin tensiones con el cierre mensual.',
      accion: 'Configurar reserva fiscal',
      badgeColor: 'bg-blue-100 text-[#0D233A]'
    }
  ];

  const handleDayClick = (item) => {
    if (!item.currentMonth) return;
    const isPastOrToday = item.day <= todayDay;
    setSelectedDayInfo({
      day: item.day,
      type: isPastOrToday ? 'real' : 'proyeccion',
      text: isPastOrToday 
        ? `Día ${item.day} de Septiembre: Registro histórico procesado. Ingresos y costos fijos reales cerrados sin incidencias.` 
        : `Día ${item.day} de Septiembre: Proyección predictiva activa. Flujo estimado en base al comportamiento de tickets bajos.`
    });
  };

  const getButtonStyle = (tipo) => {
    switch (tipo) {
      case 'danger': return 'bg-[#D01C1F] hover:bg-red-800 text-white';
      case 'warning': return 'bg-amber-600 hover:bg-amber-700 text-white';
      default: return 'bg-[#0D233A] hover:bg-blue-950 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F9FB] text-[#0D233A] font-sans antialiased flex flex-col selection:bg-[#0D233A] selection:text-white">
      
      {/* Top Navbar Capital One Style */}
      <header className="bg-[#0D233A] text-white px-8 py-4 flex items-center justify-between shadow-xl relative overflow-hidden border-b-4 border-[#D01C1F]">
        <div className="absolute top-0 right-0 w-[500px] h-full opacity-15 bg-gradient-to-l from-[#D01C1F] via-[#D01C1F]/40 to-transparent pointer-events-none transform skew-x-12"></div>

        <div className="flex items-center space-x-4 z-10">
          <div className="flex items-baseline font-black tracking-tight text-3xl">
            <span className="text-white italic">Capital</span>
            <span className="text-[#D01C1F] italic ml-1">PyMe</span>
          </div>
          <span className="bg-[#D01C1F]/20 text-red-200 border border-[#D01C1F]/40 text-[10px] font-bold uppercase px-2.5 py-1 rounded tracking-wider hidden sm:inline">
            Liquidity Engine
          </span>
        </div>

        <div className="flex items-center space-x-5 z-10">
          <div className="relative cursor-pointer bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 bg-[#D01C1F] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">1</span>
          </div>
          <div className="flex items-center space-x-3 border-l border-white/20 pl-4">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D01C1F] to-red-700 text-white flex items-center justify-center font-black text-xs shadow-md border border-white/20">
              CF
            </div>
            <div className="hidden md:block text-left">
              <p className="text-xs font-bold text-white leading-tight">Cafetería Don Pancho</p>
              <p className="text-[10px] text-red-300 font-medium">Cuenta Comercial Verificada</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Columna Principal: Calendario Estilo Tradicional */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Tarjetas KPI Superiores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-t-[#0D233A] border-x border-b border-slate-200/80">
              <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Liquidez Actual (Real)</p>
              <h3 className="text-2xl font-black text-[#0D233A] mt-1">$45,200.00</h3>
              <div className="flex items-center text-emerald-600 text-xs font-bold mt-2 bg-emerald-50 w-fit px-2 py-0.5 rounded">
                <ArrowUpRight className="w-3.5 h-3.5 mr-1" /> Cierre al Día 12
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-t-[#D01C1F] border-x border-b border-slate-200/80">
              <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Proyección 30 Días</p>
              <h3 className="text-2xl font-black text-[#D01C1F] mt-1">$12,450.00</h3>
              <span className="inline-block bg-red-50 text-[#D01C1F] text-[10px] font-bold px-2 py-0.5 rounded mt-2 border border-red-200">
                ⚠️ Margen ajustado proyectado
              </span>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-t-[#0D233A] border-x border-b border-slate-200/80">
              <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Reserva Sugerida</p>
              <h3 className="text-2xl font-black text-[#0D233A] mt-1">$5,000.00</h3>
              <span className="inline-block bg-blue-50 text-[#0D233A] text-[10px] font-bold px-2 py-0.5 rounded mt-2 border border-blue-200">
                💡 Meta de ahorro activo
              </span>
            </div>
          </div>

          {/* Calendario Estilo Cuadrícula Tradicional (Septiembre 2026) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/80 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0D233A]"></div>
            
            {/* Cabecera del Calendario */}
            <div className="flex justify-between items-center mb-6 pl-2">
              <div>
                <h4 className="font-black text-[#0D233A] text-lg capitalize">septiembre de 2026</h4>
                <p className="text-xs text-slate-400">Haz clic en cualquier día para consultar su estado financiero</p>
              </div>
              <div className="flex items-center space-x-4 text-xs">
                <span className="flex items-center font-bold text-slate-600"><span className="w-2.5 h-2.5 rounded-full bg-slate-400 mr-1.5"></span> Histórico (Real)</span>
                <span className="flex items-center font-bold text-[#0D233A]"><span className="w-2.5 h-2.5 rounded-full bg-[#0D233A] mr-1.5"></span> Proyección</span>
              </div>
            </div>

            {/* Días de la semana */}
            <div className="grid grid-cols-7 gap-2 text-center font-bold text-xs text-slate-400 mb-2 pb-2 border-b border-slate-100">
              <div>do.</div>
              <div>lu.</div>
              <div>ma.</div>
              <div>mi.</div>
              <div>ju.</div>
              <div>vi.</div>
              <div>sá.</div>
            </div>

            {/* Cuadrícula de los días */}
            <div className="grid grid-cols-7 gap-2">
              {diasMesSeptiembre2026.map((item, index) => {
                const isToday = item.currentMonth && item.day === todayDay;
                const isPast = item.currentMonth && item.day < todayDay;
                const isFuture = item.currentMonth && item.day > todayDay;
                const isSelected = selectedDayInfo.day === item.day && item.currentMonth;

                return (
                  <button
                    key={index}
                    disabled={!item.currentMonth}
                    onClick={() => handleDayClick(item)}
                    className={`h-12 rounded-lg flex flex-col items-center justify-center relative transition-all text-xs font-bold ${
                      !item.currentMonth 
                        ? 'text-slate-300 bg-transparent cursor-default' 
                        : isToday
                          ? 'bg-[#0D233A] text-white ring-2 ring-[#D01C1F] shadow-md'
                          : isPast
                            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                            : 'bg-blue-50/60 text-[#0D233A] hover:bg-blue-100 border border-blue-200'
                    } ${isSelected && !isToday ? 'ring-2 ring-[#0D233A]' : ''}`}
                  >
                    <span>{item.day}</span>
                    {item.currentMonth && (
                      <span className={`w-1 h-1 rounded-full mt-1 ${isPast || isToday ? 'bg-slate-400' : 'bg-[#D01C1F]'}`}></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Panel inferior de información del día seleccionado */}
            <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0D233A]">
                  Estado del Día {selectedDayInfo.day} de Septiembre ({selectedDayInfo.type === 'real' ? 'Dato Histórico Real' : 'Proyección Predictiva'})
                </span>
                <p className="text-xs text-slate-700 mt-1 font-medium">
                  {selectedDayInfo.text}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Columna Lateral: Recomendaciones por Lapsos de Tiempo */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-t-[#0D233A] border-x border-b border-slate-200/80 flex flex-col h-full">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
              <h4 className="font-black text-[#0D233A] text-base flex items-center">
                <PiggyBank className="w-5 h-5 mr-2 text-[#0D233A]" /> Recomendaciones por Lapsos
              </h4>
              <span className="text-[10px] font-extrabold bg-[#0D233A] text-white px-2.5 py-0.5 rounded-full shadow-sm">
                Estrategia Mensual
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-4 font-medium">
              Selecciona un lapso estratégico del mes para consultar las optimizaciones de costos fijos y reservas:
            </p>

            {/* Listado de Lapsos */}
            <div className="space-y-3 flex-1">
              {lapsosRecomendaciones.map((lapso) => {
                const isSelected = selectedLapso && selectedLapso.id === lapso.id;
                return (
                  <div
                    key={lapso.id}
                    onClick={() => setSelectedLapso(lapso)}
                    className={`p-3.5 rounded-lg border cursor-pointer transition-all ${
                      isSelected ? 'border-[#0D233A] bg-blue-50/40 ring-1 ring-[#0D233A]' : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded ${lapso.badgeColor}`}>
                        {lapso.rango}
                      </span>
                      <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isSelected ? 'rotate-90 text-[#0D233A]' : ''}`} />
                    </div>
                    <h5 className="font-bold text-xs text-[#0D233A] mt-1">{lapso.titulo}</h5>
                  </div>
                );
              })}
            </div>

            {/* Panel de Detalle del Lapso Seleccionado */}
            {selectedLapso ? (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200 animate-fade-in">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#D01C1F]">
                  {selectedLapso.rango}
                </span>
                <p className="text-xs text-slate-700 mt-1.5 font-medium leading-relaxed">
                  {selectedLapso.mensaje}
                </p>
                <button className={`mt-3 text-xs font-black px-3.5 py-2 rounded-lg flex items-center transition-colors shadow-sm ${getButtonStyle(selectedLapso.tipo)}`}>
                  {selectedLapso.accion} <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            ) : (
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
                <p className="text-xs text-slate-400 font-medium">
                  Haz clic en cualquiera de los 4 lapsos superiores para ver la recomendación táctica del motor de liquidez.
                </p>
              </div>
            )}

            {/* Sello de Marca Inferior */}
            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <p className="text-[10px] font-black text-[#0D233A] uppercase tracking-widest">
                Capital One • Business Intelligence
              </p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}