export interface Indicator {
    'Valor Ação': number;
    'P/L': string;
    'P/RECEITA (PSR)': string;
    'P/VP': string;
    'DIVIDEND YIELD - OIBR3': string;
    'PAYOUT': string;
    'MARGEM LÍQUIDA': string;
    'MARGEM BRUTA': string;
    'MARGEM EBIT': string;
    'MARGEM EBITDA': string;
    'EV/EBITDA': string;
    'EV/EBIT': string;
    'P/EBITDA': string;
    'P/EBIT': string;
    'P/ATIVO': string;
    'P/CAP.GIRO': string;
    'P/ATIVO CIRC LIQ': string;
    'VPA': string;
    'LPA': string;
    'GIRO ATIVOS': string;
    'ROE': string;
    'ROIC': string;
    'ROA': string;
    'DÍVIDA LÍQUIDA / PATRIMÔNIO': string;
    'DÍVIDA LÍQUIDA / EBITDA': string;
    'DÍVIDA LÍQUIDA / EBIT': string;
    'DÍVIDA BRUTA / PATRIMÔNIO': string;
    'PATRIMÔNIO / ATIVOS': string;
    'PASSIVOS / ATIVOS': string;
    'LIQUIDEZ CORRENTE': string;
    'CAGR RECEITAS 5 ANOS': string;
  }
  
  export interface NetGrowth {
    net_revenue: number;
    cost?: number;
    gross_profit?: number;
    ebitda?: number;
    ebit?: number;
    tax?: number;
    net_profit: number;
    net_worth: number;
    year: string;
    quarter?: string;
  }
  
  export interface Stock {
    indicators: Indicator;
    net_growth: NetGrowth[];
  }