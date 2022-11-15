// import { transactions } from '../data/transactions'
import { Transaction, TransformedTransaction, LogEventItem, TransformedLogEvent, LogEventParam, CategorizedTransaction } from '../types'

const transform = (transactions: Transaction[]): TransformedTransaction[] => {
    const transformedTransactions: TransformedTransaction[] = transactions.map((transaction) => {
        console.log("This was reached")
        const logEvents = transaction.log_events;
        return {
            date: transaction.block_signed_at,
            from: transaction.from_address,
            to: transaction.to_address,
            value: transaction.value,
            gasSpent: transaction.gas_spent,
            gasPrice: transaction.gas_price,
            gasQuoteRate: transaction.gas_quote_rate,
            method: extractMethods(logEvents), 
            txnHash: transaction.tx_hash,
            logEvents: transformLogEvents(logEvents)
        }
    })
    return transformedTransactions
    
}


const extractMethods = (logEvents: LogEventItem[]): string[] => {
    console.log("extractmethod is reached")
    console.log(logEvents)
    const methods: string[] = []
    logEvents.map(logEvent => {
        if (logEvent.decoded) {
            methods.push(logEvent.decoded.name)
        }
        return null
    })
    return methods
}

const transformLogEvents = (logEvents: LogEventItem[]): (TransformedLogEvent | null)[] => {
    const newLogEvents: (TransformedLogEvent | null)[] = logEvents.map(item => {
        console.log(item.decoded)
        if (item.decoded) {
            // console.log("decoded name", item.decoded.name)
            const returnObject: TransformedLogEvent = {
                name: item.decoded.name,
                signature: item.decoded.signature,
                contractDecimals: item.sender_contract_decimals,
                contractName: item.sender_name,
                logo: item.sender_logo_url,
                ticker: item.sender_contract_ticker_symbol,
                contractAddress: item.sender_address
            }
            // console.log(item.decoded.params)
            
            const params = item.decoded.params
            if (params) {
                params.map((param: LogEventParam)=> returnObject["param_" + param.name] = param.value)
            }
            
            return returnObject
        } else {
            return null
        }
        
    })
    return newLogEvents
}



export {
    transform
}