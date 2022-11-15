import { TransformedTransaction } from '../types';

const categorizeTransaction = (txn: TransformedTransaction, address: string) => {
    
    const flow = txn.from.toLowerCase() !== address.toLowerCase() ? 'Receive' : 'Send'
    console.log("flow", flow)
    if (isERC20(txn)) {
        return {
            ...txn,
            category: 'erc20',
            flow: flow
        }
    } else if (isEthTransfer(txn)) {
        return {
            ...txn, 
            category: 'ethTransfer',
            flow: flow
        }
    } else if (isSwap(txn)) {
        return {
            ...txn, 
            category: 'swap',
            flow: 'Exchange'
        }
    } else {
        return {
            ...txn, 
            category: 'uncategorized',
            flow: 'Transact'
        }
    }
}

const isERC20 = (txn: TransformedTransaction): boolean => {
    if (Number(txn.value) === 0 && txn.method.filter(item => item === "Transfer").length === 1) {
        return true;
    } else {
        return false;
    }
}

const isEthTransfer = (txn: TransformedTransaction): boolean => {
    if (Number(txn.value) > 0 && !txn.method.includes('Transfer')) {
        return true;
    } else {
        return false;
    }
}

const isSwap = (txn: TransformedTransaction): boolean => {
    if (txn.method.filter(item => item === "Transfer").length > 0 && ["Swap", "Swapped", "TokenExchange"].some(item => txn.method.includes(item))) {
        return true;
    } else {
        return false;
    }
}

export { categorizeTransaction }