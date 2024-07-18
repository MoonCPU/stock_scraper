
export interface Indicator {
    valorAcao: number;
    pl: string;
    psr: string;
    pvp: string;
    dividendYield: string;
    payout: string;
    margemLiquida: string;
    margemBruta: string;
    margemEbit: string;
    margemEbitda: string;
    evEbitda: string;
    evEbit: string;
    pEbitda: string;
    pEbit: string;
    pAtivo: string;
    pCapGiro: string;
    pAtivoCircLiq: string;
    vpa: string;
    lpa: string;
    giroAtivos: string;
    roe: string;
    roic: string;
    roa: string;
    dividaLiquidaPatrimonio: string;
    dividaLiquidaEbitda: string;
    dividaLiquidaEbit: string;
    dividaBrutaPatrimonio: string;
    patrimonioAtivos: string;
    passivosAtivos: string;
    liquidezCorrente: string;
}
  
export interface NetGrowth {
    netRevenue: number;
    cost: number;
    grossProfit: number;
    ebitda: number;
    ebit: number;
    tax: number;
    netProfit: number;
    netWorth: number;
    year: string;
    quarter?: string;
}

export interface Stock {
    indicators: Indicator;
    netGrowth: NetGrowth[];
}