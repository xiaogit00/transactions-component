export type Address = string;

export interface TransactionsProps {
    chainId: number;
    address: Address;
}



export interface Transaction {
    block_signed_at: string;
    block_height: number;
    tx_hash: string;
    tx_offset: number;
    successful: boolean;
    from_address: string;
    from_address_label: string | null;
    to_address: string;
    to_address_label: string | null;
    value: string;
    value_quote: number;
    gas_offered: number;
    gas_spent: number;
    gas_price: number;
    fees_paid: string | null;
    gas_quote: number;
    gas_quote_rate: number;
    log_events: LogEventItem[];
}

export interface LogEventItem {
    block_signed_at: string;
    block_height: number;
    tx_offset: number;
    log_offset: number;
    tx_hash: string;
    raw_log_topics: any;
    sender_contract_decimals: number | null;
    sender_name: string | null;
    sender_contract_ticker_symbol: string | null;
    sender_address: string;
    sender_address_label: string | null;
    sender_logo_url: string | null;
    raw_log_data: string | null;
    decoded: DecodedItem | null;
}

export interface DecodedItem {
    name: string;
    signature: string;
    params: DecodedParamItem[] | null;
}

export interface DecodedParamItem {
    name: string;
    type: string;
    indexed: boolean;
    decoded: boolean;
    value: string;
  }

export interface CovalentAPIBaseResponse {
    data: TransactionsBaseResponse;
    error: boolean;
    error_message: string | null;
    error_code: number | null;
  }


export interface TransactionsBaseResponse {
    address: string;
    chain_id: number;
    items: Transaction[];
    next_update_at: string;
    pagination: Pagination;
    quote_currency: string;
    updated_at: string;
}

export type Category = 'Receive' | 'Send' | 'Exchange'

export interface TransformedTransaction {
    date: string,
    from: string,
    to: string,
    value: string,
    method: string[],
    gasSpent: number,
    gasPrice: number,
    gasQuoteRate: number,
    txnHash: string,
    logEvents: (TransformedLogEvent | null)[]
}

export interface TransformedLogEvent {
    contractAddress: string,
    contractDecimals: number | null,
    contractName: string | null,
    logo: string | null,
    ticker: string | null,
    name: string,
    signature: string,
    [key: string]: string | number | null
}

// export type TransformedLogEvents = [TransformedLogEvent | null]

export interface LogEventParam {
    name: string,
    type: string,
    indexed: boolean,
    decoded: boolean,
    value: string,
}

export interface Pagination {
    has_more: boolean;
    page_number: number;
    page_size: number;
    total_count: number | null;
}
// export type TransactionsArray = Array<Transaction>


export interface CategorizedTransaction extends TransformedTransaction {
    category: string;
    flow?: string;
}